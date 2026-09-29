// ==========================================================================
// The Car Tell — main.js
// ==========================================================================

document.addEventListener("DOMContentLoaded", function () {
  /* ---------- Navbar scroll state ---------- */
  const navbar = document.querySelector(".navbar");
  const toggleNavbarState = () => {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };
  toggleNavbarState();
  window.addEventListener("scroll", toggleNavbarState);

  /* ---------- Hero video ---------- */
  const heroVideo = document.querySelector(".hero-video");
  if (heroVideo) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = navigator.connection && navigator.connection.saveData;
    if (!reduceMotion && !saveData) {
      heroVideo.muted = true;
      heroVideo.src = window.innerWidth < 768 ? heroVideo.dataset.srcSm : heroVideo.dataset.src;
      heroVideo.addEventListener("playing", () => heroVideo.classList.add("is-playing"), { once: true });
      heroVideo.play().catch(() => {});
    }
  }

  /* ---------- Mobile menu ---------- */
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu .nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("active"));
  }

  /* ---------- Back to top ---------- */
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (!question) return;
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      document.querySelectorAll(".faq-item").forEach((el) => el.classList.remove("active"));
      if (!isActive) item.classList.add("active");
    });
  });

  /* ---------- Footer year ---------- */
  document.querySelectorAll(".current-year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Contact form -> WhatsApp / Email ---------- */
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    const waBtn = document.getElementById("send-whatsapp");
    const successBox = document.querySelector(".form-success");

    const buildMessage = () => {
      const name = document.getElementById("cf-name")?.value.trim() || "";
      const phone = document.getElementById("cf-phone")?.value.trim() || "";
      const vehicle = document.getElementById("cf-vehicle")?.value.trim() || "";
      const service = document.getElementById("cf-service")?.value || "";
      const message = document.getElementById("cf-message")?.value.trim() || "";

      let text = `Hi The Car Tell, my name is ${name}.`;
      if (phone) text += ` My contact number is ${phone}.`;
      if (vehicle) text += ` My vehicle: ${vehicle}.`;
      if (service) text += ` I'm enquiring about: ${service}.`;
      if (message) text += ` Message: ${message}`;
      return { text };
    };

    const validate = () => {
      const name = document.getElementById("cf-name");
      const phone = document.getElementById("cf-phone");
      let valid = true;
      [name, phone].forEach((field) => {
        if (field && !field.value.trim()) {
          field.style.borderColor = "#e0ab29";
          valid = false;
        } else if (field) {
          field.style.borderColor = "";
        }
      });
      return valid;
    };

    if (waBtn) {
      waBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (!validate()) return;
        const { text } = buildMessage();
        const url = `https://wa.me/27633393094?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
        if (successBox) successBox.classList.add("show");
      });
    }

  }

  /* ---------- Active nav link ---------- */
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
});
