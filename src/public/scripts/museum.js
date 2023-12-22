// Combined isInViewport function
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left >= 0 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Combined event listener for scroll event
document.addEventListener('scroll', function () {
  // Handle .reveal, .reveal2, .reveal3, .reveal4, and .treereveal in one loop
  document.querySelectorAll('.reveal, .reveal2, .reveal3, .reveal4, .treereveal').forEach(function (element) {
    if (isInViewport(element)) {
      element.classList.add('active');
    }
  });
});

