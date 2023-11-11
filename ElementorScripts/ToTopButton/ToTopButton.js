<script>
document.addEventListener("DOMContentLoaded", function() {
  var toTopButton = document.createElement("button");
  toTopButton.id = "toTop";

  var chevronUpIcon = document.createElement("i");
  chevronUpIcon.className = "fas fa-chevron-up arrow-up-icon";

  toTopButton.appendChild(chevronUpIcon);
  document.body.appendChild(toTopButton);

  toTopButton.style.opacity = "0";
  toTopButton.style.visibility = "hidden";

  window.addEventListener("scroll", function() {
    if (window.scrollY >= 100) {
      toTopButton.style.opacity = "1";
      toTopButton.style.visibility = "visible";
    } else {
      toTopButton.style.opacity = "0";
      toTopButton.style.visibility = "hidden";
    }
  });

  // Smooth scroll to the top when button is clicked
  toTopButton.addEventListener("click", function() {
    scrollToTop();
  });

  function scrollToTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentScroll - currentScroll / 10);
    }
  }
});

</script>
