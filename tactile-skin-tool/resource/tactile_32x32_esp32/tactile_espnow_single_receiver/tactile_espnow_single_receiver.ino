#include <esp_now.h>
#include <WiFi.h>

#include "ros.h"
#include <mocap_msgs/TactileArray.h>


#define CHANNEL 1

typedef struct struct_message {
  int8_t PacketIndex;
  uint16_t PressureArray[32];
} struct_message;

struct_message tactile_data;

// ROS serial communication
ros::NodeHandle nh;
String tactile_topic = "tactile/left";
mocap_msgs::TactileArray tactile_data_ros;
ros::Publisher tactile_transmit(tactile_topic.c_str(), &tactile_data_ros);

// callback function that will be executed when data is received
void OnDataRecv(const uint8_t * mac, const uint8_t *incomingData, int len) {
  tactile_data_ros.stamp = nh.now();
  memcpy(&tactile_data, incomingData, sizeof(tactile_data));
  // esp_err_t result = esp_now_send(broadcastAddress, (uint8_t *) &tactile_data, sizeof(tactile_data));
  tactile_data_ros.PacketIndex = tactile_data.PacketIndex;
  memcpy(tactile_data_ros.PressureArray, &tactile_data.PressureArray[0], 32*sizeof(*tactile_data_ros.PressureArray));
  tactile_transmit.publish(&tactile_data_ros);
  nh.spinOnce();
}

void setup() {
  // put your setup code here, to run once:
  // rosserial set up
  nh.getHardware()->setBaud(2000000);
  nh.initNode();
  nh.advertise(tactile_transmit);

  // Set device as a Wi-Fi Station
  WiFi.mode(WIFI_STA);

  // Init ESP-NOW
  if (esp_now_init() == ESP_OK) {
    // Serial.println("ESPNow Init Success");
    nh.loginfo("ESPNow Init Success");
  }
  else {
    // Serial.println("ESPNow Init Failed");
    nh.logwarn("ESPNow Init Failed. Retrying...");
    // Retry InitESPNow, add a counte and then restart?
    // InitESPNow();
    // or Simply Restart
    ESP.restart();
  }

  // Once ESPNow is successfully Init, we will register for recv CB to
  // get recv packer info
  esp_now_register_recv_cb(OnDataRecv);
}

void loop() {
  // put your main code here, to run repeatedly:

}
