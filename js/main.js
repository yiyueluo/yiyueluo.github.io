var recruit = 0;

function setPubToggleState(activeId) {
  ["select0", "select1", "select2"].forEach(function (toggleId) {
    var toggle = document.getElementById(toggleId);
    if (!toggle) {
      return;
    }

    if (toggleId === activeId) {
      toggle.classList.add("pub-toggle-active");
    } else {
      toggle.classList.remove("pub-toggle-active");
    }
  });
}

function showPubs(id) {
  var pubs = document.getElementById("pubs");
  if (!pubs) {
    return;
  }

  var sourceId = "pubs_selected";
  var activeId = "select0";

  if (id === 1) {
    sourceId = "pubs_by_date";
    activeId = "select1";
  } else if (id === 2) {
    sourceId = "pubs_by_topic";
    activeId = "select2";
  }

  var source = document.getElementById(sourceId);
  if (!source) {
    return;
  }

  pubs.innerHTML = source.innerHTML;
  setPubToggleState(activeId);
}

function showRecruit() {
  var recruitEl = document.getElementById("recruit");
  if (!recruitEl) {
    return;
  }

  recruitEl.style.display = recruit === 0 ? "inline-block" : "none";
  recruit = 1 - recruit;
}

function setupNavToggles() {
  var toggles = document.querySelectorAll(".navbar-toggler");

  toggles.forEach(function (button) {
    button.addEventListener("click", function () {
      var targetSelector = button.getAttribute("data-bs-target") || button.getAttribute("data-target");
      var target = null;

      if (targetSelector) {
        target = document.querySelector(targetSelector);
      }

      if (!target) {
        var controlsId = button.getAttribute("aria-controls");
        if (controlsId) {
          target = document.getElementById(controlsId);
        }
      }

      if (!target) {
        return;
      }

      var isExpanded = target.classList.toggle("show");
      button.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    });
  });
}

function setupDisclosureToggles() {
  var toggles = document.querySelectorAll("[data-toggle-target]");

  toggles.forEach(function (button) {
    button.addEventListener("click", function () {
      var selector = button.getAttribute("data-toggle-target");
      var target = selector ? document.querySelector(selector) : null;

      if (!target) {
        return;
      }

      var hiddenClass = button.getAttribute("data-toggle-class") || "is-collapsed";
      target.classList.toggle(hiddenClass);
      var expanded = !target.classList.contains(hiddenClass);
      button.textContent = expanded
        ? button.getAttribute("data-label-less") || "Show less"
        : button.getAttribute("data-label-more") || "Show more";
      button.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setupNavToggles();
  setupDisclosureToggles();
});
