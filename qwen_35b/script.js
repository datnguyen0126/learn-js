// Navigation Toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navToggle.classList.toggle("active");
  });
}

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    navToggle.classList.remove("active");
  });
});

// Navbar scroll effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll(".attraction-card, .event-card").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// Contact form handling
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name =
      formData.get("name") || this.querySelector('input[type="text"]').value;
    const email =
      formData.get("email") || this.querySelector('input[type="email"]').value;
    const interest = this.querySelector("select").value;

    // Show success message (in a real app, you'd send data to server)
    alert(
      `Thank you ${name}! We've received your inquiry about ${interest}. We'll contact you at ${email} shortly.`,
    );

    // Reset form
    this.reset();
  });
}

// Image gallery lightbox functionality
const galleryImages = document.querySelectorAll(".gallery-grid img");

if (galleryImages.length > 0) {
  let currentImageIndex = null;

  function openLightbox(index) {
    currentImageIndex = index;
    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.9);
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

    const img = document.createElement("img");
    img.src = galleryImages[index].src;
    img.style.cssText =
      "max-width: 90%; max-height: 90%; border-radius: 10px; box-shadow: 0 10px 40px rgba(0,0,0,0.5);";

    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "✕";
    closeBtn.style.cssText = `
            position: absolute;
            top: 20px;
            right: 30px;
            background: white;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            padding: 0.5rem 1rem;
            border-radius: 50%;
        `;

    overlay.appendChild(img);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);

    // Close on click outside image or close button
    function closeLightbox() {
      document.body.removeChild(overlay);
      document.removeEventListener("click", handleOutsideClick);
    }

    function handleOutsideClick(e) {
      if (e.target === overlay || e.target === closeBtn) {
        closeLightbox();
      }
    }

    overlay.addEventListener("click", handleOutsideClick);
  }

  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
  });
}

// Add CSS for lightbox
const style = document.createElement("style");
style.textContent = `
    .lightbox-overlay {
        animation: fadeIn 0.3s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  if (hero) {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;
    hero.style.backgroundPositionY = `${rate}px`;
  }
});

// Counter animation for statistics (if you add stats section later)
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start).toLocaleString();
    }
  }, 16);
}

// Lazy loading for images
const lazyImages = document.querySelectorAll("img[data-src]");

if (lazyImages.length > 0) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach((img) => imageObserver.observe(img));
}

// Add active class to current section in navigation
const sections = document.querySelectorAll("section[id]");

function highlightCurrentSection() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", highlightCurrentSection);

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  console.log("Paris Tourism Website Loaded Successfully! 🗼");
});
