// Mobile menu toggle (if applicable)
function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
}

// Scroll behavior for sticky navbar and active link
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Form validation for consultation form
const consultBtn = document.querySelector('.consult-btn');
if (consultBtn) {
  consultBtn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.consultation-box input');
    let isValid = true;
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        input.style.border = '1px solid red';
        isValid = false;
      } else {
        input.style.border = '1px solid #ccc';
      }
    });
    if (isValid) {
      alert('Form submitted successfully!');
    }
  });
}

// Smooth scroll for anchor links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("consultation-form");
  const name = document.getElementById("name");
  const mobile = document.getElementById("mobile");
  const captchaInput = document.getElementById("captcha-input");
  const captchaCode = document.getElementById("captcha-code").textContent;
  const consent = document.getElementById("consent");
  const messageBox = document.getElementById("form-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    messageBox.textContent = "";
    messageBox.style.color = "red";

    if (name.value.trim() === "" || mobile.value.trim() === "") {
      messageBox.textContent = "Please fill in all fields.";
      return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile.value.trim())) {
      messageBox.textContent = "Enter a valid 10-digit mobile number.";
      return;
    }

    if (captchaInput.value.trim() !== captchaCode.trim()) {
      messageBox.textContent = "Captcha is incorrect.";
      return;
    }

    if (!consent.checked) {
      messageBox.textContent = "You must agree to the terms to continue.";
      return;
    }

    // Simulate success
    messageBox.style.color = "green";
    messageBox.textContent = "Form submitted successfully!";

    // Reset form (optional)
    form.reset();
  });
});

document.getElementById('consultation-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const captcha = document.getElementById('captcha-input').value.trim();
  const consent = document.getElementById('consent').checked;
  const captchaCode = document.getElementById('captcha-code').innerText;

  if (!name || !mobile || !captcha) {
    alert("Please fill in all the fields.");
    return;
  }

  if (!/^\d{10}$/.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  if (captcha !== captchaCode) {
    alert("Captcha does not match.");
    return;
  }

  if (!consent) {
    alert("Please agree to the terms and privacy policy.");
    return;
  }

  alert("Appointment successfully booked!");
  // Optionally clear form
  this.reset();
});

