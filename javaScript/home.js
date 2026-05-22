// ===== HERO BUTTON =====

const heroButton = document.querySelector(".hero button");

heroButton.addEventListener("click", () => {
  show404();
});


// ===== FEATURES HOVER EFFECT =====

const featureBoxes = document.querySelectorAll(".feature-box");

featureBoxes.forEach((box) => {

  box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "#dbeafe";
  });

  box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "white";
  });

});


// ===== COUNTER ANIMATION =====

const counters = document.querySelectorAll(".stat-card h3");

counters.forEach((counter) => {

  let start = 0;

  const target = parseInt(counter.innerText);

  const updateCounter = () => {

    if(start < target){

      start += 5;

      counter.innerText = start + "+";

      setTimeout(updateCounter, 30);

    }
    else{

      counter.innerText = target + "+";

    }

  };

  updateCounter();

});


// ===== NEWS SECTION =====

const newsCards = document.querySelectorAll(".news-card");

newsCards.forEach((news) => {

  news.addEventListener("mouseover", () => {

    news.style.transform = "scale(1.03)";
    news.style.transition = "0.3s";

  });

  news.addEventListener("mouseout", () => {

    news.style.transform = "scale(1)";

  });

});


// ===== SCROLL EFFECT =====

window.addEventListener("scroll", () => {

  const scrollPosition = window.scrollY;

  if(scrollPosition > 100){

    document.body.style.backgroundColor = "#eef2ff";

  }
  else{

    document.body.style.backgroundColor = "#f4f7fc";

  }

});


// ===== PAGE LOAD MESSAGE =====

window.addEventListener("load", () => {

  console.log("Employee Portal Home Page Loaded Successfully");

});


// ===== DYNAMIC DATE =====

const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerText = `© ${year} Employee Portal. All Rights Reserved.`;


// ===== NAVBAR TOGGLE =====

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


// ===== ANIMATION OBSERVER =====

function animateCounter(el, target) {

  let count = 0;
  let speed = target / 100;

  let interval = setInterval(() => {

    count += speed;

    if (count >= target) {

      el.textContent = target;
      clearInterval(interval);

    } else {

      el.textContent = Math.floor(count);

    }

  }, 20);

}


const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

      if (entry.target.classList.contains("stat-card")) {

        let value = entry.target.querySelector("h3");
        let target = parseInt(value.textContent);

        animateCounter(value, target);

      }

    }

  });

}, {
  threshold: 0.2
});


// ===== OBSERVE ELEMENTS =====

document.querySelectorAll(".about h2, .about-intro, .about-card")
.forEach(el => observer.observe(el));

document.querySelectorAll(".feature-box")
.forEach(el => observer.observe(el));

document.querySelectorAll(".stat-card")
.forEach(el => observer.observe(el));

document.querySelectorAll(".dept-card, .departments h2, .dept-subtitle")
.forEach(el => observer.observe(el));


// ===== DEPARTMENT AUTO CAROUSEL =====

const deptTrack = document.getElementById("deptTrack");

if (deptTrack) {

  const cards = Array.from(deptTrack.children);

  // clone cards
  cards.forEach(card => {

    const clone = card.cloneNode(true);
    deptTrack.appendChild(clone);

  });

  let carouselIndex = 0;

  function getStep() {

    const card = document.querySelector(".dept-card");
    const gap = 25;

    return card.offsetWidth + gap;

  }

  function moveCarousel() {

    const step = getStep();

    carouselIndex++;

    deptTrack.style.transition = "transform 0.6s ease-in-out";

    deptTrack.style.transform =
      `translateX(-${carouselIndex * step}px)`;

    if (carouselIndex >= cards.length) {

      setTimeout(() => {

        deptTrack.style.transition = "none";

        carouselIndex = 0;

        deptTrack.style.transform = "translateX(0)";

      }, 600);

    }

  }

  setInterval(moveCarousel, 2000);

}


// ===== TESTIMONIAL SWITCH SYSTEM =====

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

function setActive(index) {

  miniCards.forEach(card => {
    card.classList.remove("active");
  });

  miniCards[index].classList.add("active");

  reviewText.textContent = reviews[index].text;
  reviewName.textContent = reviews[index].name;
  reviewRole.textContent = reviews[index].role;

}


// click switch
miniCards.forEach((card, i) => {

  card.addEventListener("click", () => {

    setActive(i);

  });

});


// auto switch
let testimonialIndex = 0;

setInterval(() => {

  testimonialIndex =
    (testimonialIndex + 1) % reviews.length;

  setActive(testimonialIndex);

}, 4000);


// ===== ERROR PAGE =====

function show404(){

  document.body.style.overflow = "hidden";

  document.querySelector(".navbar").style.display = "none";

  document.querySelector(".hero").style.display = "none";
  document.querySelector(".about").style.display = "none";
  document.querySelector(".features").style.display = "none";
  document.querySelector(".stats").style.display = "none";
  document.querySelector(".departments").style.display = "none";
  document.querySelector(".services").style.display = "none";
  document.querySelector(".testimonials").style.display = "none";
  document.querySelector(".news").style.display = "none";
  document.querySelector(".contact-section").style.display = "none";

  document.querySelector("footer").style.display = "none";

  document.getElementById("errorPage").style.display = "flex";

}


// ===== GO HOME =====

function goHome(){

  location.reload();

}


// ===== LOGIN BUTTON =====

const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", () => {

  show404();

});


// ===== NAV LINKS =====

document.querySelectorAll(".nav-links a")
.forEach(link => {

  link.addEventListener("click", function(e){

    e.preventDefault();

    show404();

  });

});