onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  // After flower animation finishes
setTimeout(() => {
  // Show background
  const bg = document.getElementById("bgAfter");
  if (bg) bg.classList.add("show");

  // Remove flowers completely
  const flowers = document.querySelector(".flowers");
  if (flowers) {
    flowers.style.display = "none";
  }

  // Optional: remove title text too
  const night = document.querySelector(".night");
  if (night) {
    night.style.display = "none";
  }

}, 8500); // 👈 timing (recommended)
