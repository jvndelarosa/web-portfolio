document.addEventListener("DOMContentLoaded", () => {
  const roles = ["Backend Developer", "Apigee Developer"];
  const typedText = document.getElementById("typed-text");
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentRole = roles[roleIndex];
    const currentText = currentRole.substring(0, charIndex);
    typedText.textContent = currentText;

    if (!isDeleting && charIndex < currentRole.length) {
      charIndex++;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      isDeleting = !isDeleting;

      if (!isDeleting) {
        roleIndex = (roleIndex + 1) % roles.length;
      }

      setTimeout(typeEffect, 1000);
    }
  }

  typeEffect();


});