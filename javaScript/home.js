// ================= SAFE INIT =================
document.addEventListener("DOMContentLoaded", () => {

  // ================= NAVBAR TOGGLE =================
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle?.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // ================= 404 SYSTEM =================

  function show404() {

    document.body.style.overflow = "hidden";

    document.querySelectorAll("body > *").forEach(el => {
      if (el.id !== "errorPage") {
        el.classList.add("hidden-page");
      }
    });

    const errorPage = document.getElementById("errorPage");
    if (errorPage) errorPage.style.display = "flex";
  }

  function goHome() {

    document.body.style.overflow = "auto";

    document.querySelectorAll(".hidden-page").forEach(el => {
      el.classList.remove("hidden-page");
    });

    const errorPage = document.getElementById("errorPage");
    if (errorPage) errorPage.style.display = "none";
  }

  window.goHome = goHome; // IMPORTANT (so HTML button can access it)

  function trigger404(e) {
    e.preventDefault();
    show404();
  }

  // ================= NAV + BUTTON EVENTS =================
  document.querySelectorAll(".nav-item").forEach(link => {
    link.addEventListener("click", trigger404);
  });

  document.querySelector(".login-btn")?.addEventListener("click", show404);
  document.querySelector(".hero button")?.addEventListener("click", show404);

  // ================= COUNTER ANIMATION =================
  const counters = document.querySelectorAll(".stat-card h3");

  counters.forEach(counter => {

    let start = 0;
    const target = parseInt(counter.innerText);

    const update = () => {

      if (start < target) {
        start += Math.ceil(target / 50);
        counter.innerText = start + "+";
        setTimeout(update, 20);
      } else {
        counter.innerText = target + "+";
      }

    };

    update();

  });

  // ================= NEWS HOVER =================
  document.querySelectorAll(".news-card").forEach(card => {

    card.addEventListener("mouseenter", () => {
      card.classList.add("active");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("active");
    });

  });

  // ================= FOOTER YEAR =================
  const footer = document.querySelector("footer p");
  if (footer) {
    footer.innerText = `© ${new Date().getFullYear()} Employee Portal. All Rights Reserved.`;
  }

  // ================= SCROLL EFFECT =================
  window.addEventListener("scroll", () => {
    document.body.style.backgroundColor =
      window.scrollY > 100 ? "#eef2ff" : "#f4f7fc";
  });

  // ================= INTERSECTION OBSERVER =================
  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });

  }, { threshold: 0.2 });

  document.querySelectorAll(
    ".about h2, .about-intro, .about-card, .feature-box, .stat-card, .dept-card, .departments h2, .dept-subtitle"
  ).forEach(el => observer.observe(el));

  // ================= DEPARTMENT CAROUSEL =================
  const deptTrack = document.getElementById("deptTrack");

  if (deptTrack) {

    const cards = [...deptTrack.children];

    cards.forEach(card => {
      deptTrack.appendChild(card.cloneNode(true));
    });

    let index = 0;

    const getStep = () => {
      const card = document.querySelector(".dept-card");
      return card.offsetWidth + 25;
    };

    setInterval(() => {

      index++;

      deptTrack.style.transition = "transform 0.6s ease-in-out";
      deptTrack.style.transform = `translateX(-${index * getStep()}px)`;

      if (index >= cards.length) {

        setTimeout(() => {
          deptTrack.style.transition = "none";
          index = 0;
          deptTrack.style.transform = "translateX(0)";
        }, 600);

      }

    }, 2000);

  }

  // ================= TESTIMONIAL SYSTEM =================
  const miniCards = document.querySelectorAll(".mini-card");
  const reviewText = document.getElementById("reviewText");
  const reviewName = document.getElementById("reviewName");
  const reviewRole = document.getElementById("reviewRole");

  const reviews = [
    {
      text: "This portal made HR work extremely smooth.",
      name: "John Smith",
      role: "HR Executive"
    },
    {
      text: "Payroll and attendance tracking is now effortless.",
      name: "Sarah Lee",
      role: "Finance Team"
    },
    {
      text: "Clean UI and very fast system performance.",
      name: "Michael Roy",
      role: "Developer"
    }
  ];

  function setActive(i) {

    miniCards.forEach(c => c.classList.remove("active"));
    miniCards[i].classList.add("active");

    reviewText.textContent = reviews[i].text;
    reviewName.textContent = reviews[i].name;
    reviewRole.textContent = reviews[i].role;

  }

  miniCards.forEach((card, i) => {
    card.addEventListener("click", () => setActive(i));
  });

  let tIndex = 0;

  setInterval(() => {
    tIndex = (tIndex + 1) % reviews.length;
    setActive(tIndex);
  }, 4000);

});