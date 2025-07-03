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