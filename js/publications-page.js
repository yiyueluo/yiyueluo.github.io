(function () {
  var publicationOverrides = {
    "intelligent-carpet-inferring-3d-human-pose-from-tactile-signals": [
      "<div>",
      "<strong>Y. Luo</strong><sup>✉</sup>; Y. Li; M. Foshey; W. Shou; P. Sharma; T. Palacios; A. Torralba; W. Matusik.",
      "</div>",
      "<div>",
      "<i>CVPR</i> 2021.",
      '<a href="http://intcarpet.csail.mit.edu/">[Project Page]</a>',
      '<a href="./pdf/CVPR2021.pdf" target="_blank">[Paper]</a>',
      '<a href="https://github.com/yiyueluo/IntelligentCarpet" target="_blank">[Code]</a>',
      '<p style="font-size:15px">',
      'Covered by <a href="https://news.mit.edu/2021/intelligent-carpet-gives-insight-human-poses-0624" target="_blank">[MIT news]</a>',
      '<a href="https://www.fastcompany.com/90648670/this-magic-carpet-can-track-your-workout" target="_blank">[Fast Company]</a>',
      '<a href="https://www.zdnet.com/article/mit-makes-an-ai-smart-carpet-for-monitoring-people-without-cameras/" target="_blank">[ZDNet]</a>.',
      "</p>",
      "</div>",
    ].join(" "),
  };

  function getPublications() {
    return Array.isArray(window.publications) ? window.publications : [];
  }

  function getPublicationMap() {
    var map = new Map();

    getPublications().forEach(function (publication) {
      map.set(publication.id, publication);
    });

    return map;
  }

  function normalizePublicationHtml(publication) {
    var html = publicationOverrides[publication.id] || publication.contentHtml || "";

    html = html.trim();
    html = html.replace(/<\/a>\s*<\/p>/g, "</a>");
    html = html.replace(/<div style="height:\s*50px;">\s*<\/div>/g, "");
    html = html.replace(/<div style="height:\s*50px;">/g, "");

    while (/<\/div>\s*<\/div>\s*$/.test(html)) {
      html = html.replace(/<\/div>\s*<\/div>\s*$/, "</div>");
    }

    return html;
  }

  function renderPublicationCard(publication) {
    return [
      '<div class="row publication-row" id="' + publication.id + '">',
      '  <div class="col-md-4">',
      '    <img src="' + publication.image + '" alt="' + publication.alt + '">',
      "  </div>",
      '  <div class="col-md-8 publication-copy">',
      '    <p class="publication-title"><strong>' + publication.title + "</strong></p>",
      normalizePublicationHtml(publication),
      "  </div>",
      "</div>",
    ].join("");
  }

  function renderPublicationsByIds(ids) {
    var publicationMap = getPublicationMap();

    return ids
      .map(function (id) {
        return publicationMap.get(id);
      })
      .filter(Boolean)
      .map(renderPublicationCard)
      .join("");
  }

  function renderSelectedView() {
    var config = window.publicationConfig || {};
    return renderPublicationsByIds(config.selectedOrder || []);
  }

  function renderDateView() {
    return getPublications().map(renderPublicationCard).join("");
  }

  function renderTopicView() {
    var config = window.publicationConfig || {};

    return (config.topicSections || [])
      .map(function (section) {
        return [
          '<section class="publication-topic-section" id="' + section.id + '">',
          '  <h3 class="publication-topic-heading">' + section.title + "</h3>",
          renderPublicationsByIds(section.items || []),
          "</section>",
        ].join("");
      })
      .join("");
  }

  function setActiveView(view) {
    var toggles = document.querySelectorAll("[data-pub-view]");

    toggles.forEach(function (toggle) {
      toggle.classList.toggle("pub-toggle-active", toggle.getAttribute("data-pub-view") === view);
    });
  }

  function renderPublicationView(view) {
    var container = document.getElementById("pubs");

    if (!container) {
      return;
    }

    if (view === "selected") {
      container.innerHTML = renderSelectedView();
    } else if (view === "topic") {
      container.innerHTML = renderTopicView();
    } else {
      container.innerHTML = renderDateView();
    }

    setActiveView(view);
  }

  function attachPublicationToggles(defaultView) {
    var toggles = document.querySelectorAll("[data-pub-view]");

    toggles.forEach(function (toggle) {
      toggle.addEventListener("click", function (event) {
        event.preventDefault();
        renderPublicationView(toggle.getAttribute("data-pub-view"));
      });
    });

    renderPublicationView(defaultView || "date");
  }

  window.initPublicationPage = function (defaultView) {
    attachPublicationToggles(defaultView);
  };
})();
