function shareLink(link) {
  if (navigator.share) {
    navigator.share({
      title: 'Check this out!',
      url: link
    }).catch((error) => {
      console.error('Error sharing:', error);
    });
  } else {
    // Fallback for unsupported browsers
    navigator.clipboard.writeText(link)
      .then(() => alert('Link copied to clipboard!'))
      .catch(() => alert('Failed to copy link'));
  }
}

function shareSite() {
  const shareData = {
    title: 'Check out my profile!',
    text: 'Take a look at my personal site!',
    url: window.location.href
  };

  if (navigator.share) {
    navigator.share(shareData).catch((err) => {
      console.log('Sharing failed:', err);
    });
  } else {
    // Fallback: copy link to clipboard
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert("Link copied to clipboard!");
    });
  }
}

function toggleQR() {
  const overlay = document.getElementById("qrOverlay");
  overlay.classList.toggle("show");
}

function copyLink() {
  const linkText = document.getElementById("qrText").textContent;
  navigator.clipboard.writeText(linkText)
    .then(() => alert("Link copied to clipboard!"))
    .catch(() => alert("Failed to copy link."));
}

let hasInteracted = false;
function toggleMusic() {
  const audio = document.getElementById("bgMusic");
  const button = document.getElementById("musicButton");

  if (audio.paused) {
    audio.play();
    button.classList.add("playing");
  } else {
    audio.pause();
    button.classList.remove("playing");
  }
}

// Start music on first interaction anywhere
document.addEventListener("click", () => {
  if (!hasInteracted) {
    const audio = document.getElementById("bgMusic");
    const button = document.getElementById("musicButton");

    audio.play();
    button.classList.add("playing");
    hasInteracted = true;
  }
});

const profilePhoto = document.getElementById("profilePhoto");
const landingPage = document.getElementById("landingPage");
const mainPage = document.getElementById("mainPage");
const mainProfilePic = document.getElementById("mainProfilePic");

profilePhoto.addEventListener("click", () => {
  // Get viewport width to center the image
  const viewportWidth = window.innerWidth;
  const targetX = (viewportWidth / 2) - (profilePhoto.offsetWidth / 2);
  const targetY = 60; // Adjust based on where you want it (top center)

  const currentRect = profilePhoto.getBoundingClientRect();
  const currentX = currentRect.left;
  const currentY = currentRect.top;

  const deltaX = targetX - currentX;
  const deltaY = targetY - currentY;

  // Set fixed position for the profile photo
  profilePhoto.style.position = "fixed";
  profilePhoto.style.left = `${currentX}px`;
  profilePhoto.style.top = `${currentY}px`;
  profilePhoto.style.zIndex = "9999";
  profilePhoto.style.transition = "transform 1.2s ease-in-out";

  // Move it to top center
  requestAnimationFrame(() => {
    profilePhoto.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  });

  // Transition after animation
  setTimeout(() => {
    landingPage.style.opacity = "0";

    setTimeout(() => {
      landingPage.style.display = "none";
      mainPage.style.display = "flex";
      mainPage.style.opacity = "0";

      setTimeout(() => {
        mainPage.style.transition = "opacity 0.6s ease-in-out";
        mainPage.style.opacity = "1";
        mainProfilePic.style.visibility = "visible";
        profilePhoto.style.display = "none";
      }, 50);
    }, 400);
  }, 1200);
});
