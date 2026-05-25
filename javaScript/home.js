// ================= SAFE INIT =================
document.addEventListener("DOMContentLoaded", () => {

  const errorPage = document.getElementById("errorPage");

  // ================= SHOW 404 =================
  function show404() {

    document.body.style.overflow = "hidden";

    document.querySelectorAll("body > *").forEach(el => {
      if (el.id !== "errorPage") {
        el.style.display = "none";
      }
    });

    if (errorPage) {
      errorPage.style.display = "flex";
    }
  }

  // ================= GO HOME =================
  function goHome() {

    document.body.style.overflow = "auto";

    document.querySelectorAll("body > *").forEach(el => {
      el.style.display = "";
    });

    if (errorPage) {
      errorPage.style.display = "none";
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 🔥 IMPORTANT: make global so HTML / other handlers can access it
  window.show404 = show404;
  window.goHome = goHome;

  // ================= NAVBAR TOGGLE =================
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle?.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // ================= NAV LINKS -> 404 =================
  document.querySelectorAll(".nav-item").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      show404();
    });
  });

  // ================= BUTTONS =================
  document.querySelector(".login-btn")?.addEventListener("click", show404);
  document.querySelector(".hero button")?.addEventListener("click", show404);

  // ================= LOGO CLICK -> HOME (FIXED) =================
  const logo = document.querySelector(".logo");

  logo?.addEventListener("click", (e) => {
    e.preventDefault();
    goHome();
  });

  // ================= COUNTERS =================
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
    ".about-card, .feature-box, .stat-card, .dept-card"
  ).forEach(el => observer.observe(el));

  // ================= DEPARTMENT CAROUSEL =================
  const deptTrack = document.getElementById("deptTrack");

  if (deptTrack) {

    const cards = [...deptTrack.children];

    cards.forEach(card => {
      deptTrack.appendChild(card.cloneNode(true));
    });

    let index = 0;

    const step = () => {
      const card = document.querySelector(".dept-card");
      return card ? card.offsetWidth + 20 : 320;
    };

    setInterval(() => {

      index++;

      deptTrack.style.transition = "transform 0.6s ease-in-out";
      deptTrack.style.transform = `translateX(-${index * step()}px)`;

      if (index >= cards.length) {

        setTimeout(() => {
          deptTrack.style.transition = "none";
          index = 0;
          deptTrack.style.transform = "translateX(0)";
        }, 600);

      }

    }, 2500);

  }

});