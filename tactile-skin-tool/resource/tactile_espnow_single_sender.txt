#include <esp_now.h>
#include <WiFi.h>

#define CHANNEL 1

#ifndef cbi   // clear bit
#define cbi(sfr, bit) (_SFR_BYTE(sfr) &= ~_BV(bit))
#endif
#ifndef sbi   // set bit
#define sbi(sfr, bit) (_SFR_BYTE(sfr) |= _BV(bit))
#endif

// REPLACE WITH YOUR RECEIVER MAC Address
uint8_t broadcastAddress[] = {0x94, 0xB9, 0x7E, 0x6B, 0x5A, 0x64};

typedef struct struct_message {
  int8_t PacketIndex;
  uint16_t PressureArray[32];
} struct_message;

struct_message tactile_data;

const int selectRowPins[5] = {A1, A2, A3, A4, A5};     // S0~2, S1~3, S2~4
const int selectReadPins[5] = {21, 32, 27, 33, 15}; // S0~9, S1~10
const int ledPin = 13;
uint16_t a0val = 0;
uint16_t numAvg = 0;
const int zInput = A0;


void setup() {
  // Init Serial Monitor
  Serial.begin(115200);
  
  // ESP-Now setup
  WiFi.mode(WIFI_STA);
  // This is the mac address of the Master in Station Mode
  Serial.print("STA MAC: "); Serial.println(WiFi.macAddress());
  if (esp_now_init() != ESP_OK) {
    Serial.println("Error initializing ESP-NOW");
    return;
  }

  // Register peer
  esp_now_peer_info_t peerInfo;
  memset(&peerInfo, 0, sizeof(peerInfo));
  memcpy(peerInfo.peer_addr, broadcastAddress, 6);
  peerInfo.channel = CHANNEL;  
  peerInfo.encrypt = 0;

  // Add peer        
  esp_err_t addStatus = esp_now_add_peer(&peerInfo);
  if (addStatus == ESP_OK) {
    // Pair success
    Serial.println("Pair success");
  } else if (addStatus == ESP_ERR_ESPNOW_NOT_INIT) {
    // How did we get so far!!
    Serial.println("ESPNOW Not Init");
  } else if (addStatus == ESP_ERR_ESPNOW_ARG) {
    Serial.println("Invalid Argument");
  } else if (addStatus == ESP_ERR_ESPNOW_FULL) {
    Serial.println("Peer list full");
  } else if (addStatus == ESP_ERR_ESPNOW_NO_MEM) {
    Serial.println("Out of memory");
  } else if (addStatus == ESP_ERR_ESPNOW_EXIST) {
    Serial.println("Peer Exists");
  } else {
    Serial.println("Not sure what happened");
  }

  // TODO: tactile sensor setup

  for (int i = 0; i < 5; i++) {
    pinMode(selectRowPins[i], OUTPUT);
    pinMode(selectReadPins[i], OUTPUT);
    digitalWrite(selectRowPins[i], LOW);
    digitalWrite(selectReadPins[i], LOW);
  }
  
  pinMode(ledPin, OUTPUT);
  pinMode(zInput, INPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  scanArray();
  digitalWrite(ledPin, LOW);
//  switch (readData()) {
//    case 97:
//      digitalWrite(ledPin, HIGH);
//      scanArray();
//      digitalWrite(ledPin, LOW);
//      break;
//  }
//  
//  delay(5);
}

//char readData() {
//  Serial.println("w");
//  while(1) {
//    if(Serial.available() > 0) {
//      short val = (short) Serial.read();
//      // Serial.println(val);
//      return val;
//    }
//  }
//}

void scanArray() {
  numAvg = 1;
  for (int y = 0; y <= 31; y++) {
    tactile_data.PacketIndex = y;
    selectMuxPin(y);
    //selectMuxPin(10);   
      for(int x = 0; x <= 31; x++) {
        selectReadSwitch(x);
        //selectReadSwitch(12);
        //delayMicroseconds(2);
        a0val = 0;
        for(int avg = 0; avg < numAvg; avg++) {
            a0val = a0val + analogRead(zInput);
        }
        
        a0val = a0val / numAvg;
  
        // Serial.println(a0val);
        tactile_data.PressureArray[x] = a0val;
        // tactile_data.PressureArray[x] = x;
        // 10 bit version 
        // Serial.write((uint8_t)(a0val>>5));  
        // Serial.write((uint8_t)(a0val & 0x1F));
      }
    // Send message via ESP-NOW
    esp_err_t result = esp_now_send(broadcastAddress, (uint8_t *) &tactile_data, sizeof(tactile_data));
//    if (result == ESP_OK) {
//      // Serial.println("Sent with success");
//      Serial.write(49);
//      Serial.write('\n');
//    }
//    else {
//      // Serial.println("Error sending the data");
//      Serial.write(50);
//      Serial.write('\n');
//    }
    delay(1);
  }  
}

// D (digital pins 0 to 7)
void selectMuxPin(byte pin) {
    if (pin > 31) return; // Exit if pin is out of scope

//  if (pin & 1)
//      digitalWrite(selectRowPins[0],LOW);
//  else
//      digitalWrite(selectRowPins[0], HIGH);
      
  for (int i=0; i<5; i++)
  {
    if (pin & (1<<i))
      digitalWrite(selectRowPins[i], HIGH);
    else
      digitalWrite(selectRowPins[i], LOW);
  }
}

// B (digital pin 8 to 13)
void selectReadSwitch(byte pin) {
  if (pin > 31) return; // Exit if pin is out of scope

//  if (pin & 1)
//      digitalWrite(selectReadPins[0],LOW);
//  else
//      digitalWrite(selectReadPins[0], HIGH);
      
  for (int i=0; i<5; i++)
  {
    if (pin & (1<<i))
      digitalWrite(selectReadPins[i], HIGH);
    else
      digitalWrite(selectReadPins[i], LOW);
  }
}
