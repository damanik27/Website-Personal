const typingElement = document.querySelector(".typing");
const text = "Wilson Pradana Damanik";
let index = 0;

function typeText() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 150); // kecepatan ketik
  }
}

window.onload = typeText;

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  
  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove("active"));
      // Add active to clicked button
      button.classList.add("active");

      // Hide all tab contents
      tabContents.forEach(content => content.classList.add("hidden"));

      // Show the selected tab
      const tabId = button.getAttribute("data-tab");
      document.getElementById(tabId).classList.remove("hidden");
    });
  });
});


// script.js
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

document.getElementById("wa-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const whatsappNumber = "6281234567890"; // Ganti dengan nomor WA kamu
  const text = `Halo, saya ${name} (${email}) ingin menghubungi Anda.\nPesan:\n${message}`;
  const encodedText = encodeURIComponent(text);
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  window.open(waUrl, "_blank");
});

