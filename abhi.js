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