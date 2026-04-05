(function () {
  function renderContacts(contacts) {
    return contacts
      .map(function (contact) {
        if (contact.url) {
          return (
            '<a class="meta-pill" href="' +
            contact.url +
            '" target="_blank" aria-label="' +
            contact.label +
            '">' +
            (contact.html || contact.label) +
            "</a>"
          );
        }

        return '<span class="meta-pill">' + contact.text + "</span>";
      })
      .join("");
  }

  function renderMembers(members) {
    return members
      .map(function (member) {
        return [
          '<article class="member-card">',
          '<img src="' + member.image + '" alt="' + member.name + '">',
          '<h3 class="member-name"><a href="' + member.url + '" target="_blank">' + member.name + "</a></h3>",
          '<p class="member-role">' + member.role + "</p>",
          "</article>",
        ].join("");
      })
      .join("");
  }

  function renderPhotos(photos) {
    return photos
      .map(function (photo) {
        return [
          '<figure class="gallery-card">',
          '<img src="' + photo.src + '" alt="' + photo.alt + '">',
          "</figure>",
        ].join("");
      })
      .join("");
  }

  function renderAlumni(alumni) {
    return alumni
      .map(function (person) {
        return '<li><a href="' + person.url + '" target="_blank">' + person.name + "</a>: " + person.note + "</li>";
      })
      .join("");
  }

  window.initTeamPage = function () {
    var data = window.teamPageData;
    if (!data) {
      return;
    }

    var pi = data.principalInvestigator;
    var piContainer = document.getElementById("principal-investigator");
    var membersContainer = document.getElementById("team-members");
    var photosContainer = document.getElementById("team-photos");
    var alumniContainer = document.getElementById("team-alumni");

    if (piContainer) {
      piContainer.innerHTML = [
        '<div class="profile-layout">',
        '<div><img class="profile-avatar" src="' + pi.image + '" alt="' + pi.name + '"></div>',
        "<div>",
        '<h2 class="section-title"><a href="' + pi.profileUrl + '" target="_blank">' + pi.name + "</a></h2>",
        '<p class="section-subtitle">' + pi.bio + "</p>",
        '<div class="social-row">' + renderContacts(pi.contacts) + "</div>",
        "</div>",
        "</div>",
      ].join("");
    }

    if (membersContainer) {
      membersContainer.innerHTML = renderMembers(data.members || []);
    }

    if (photosContainer) {
      photosContainer.innerHTML = renderPhotos(data.photos || []);
    }

    if (alumniContainer) {
      alumniContainer.innerHTML = renderAlumni(data.alumni || []);
    }
  };
})();
