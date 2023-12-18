import "destyle.css";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const headerNavToggle = document.getElementById("header-nav-toggle");
const headerNav = document.getElementById("header-nav");
const hamburgerIcon = document.getElementById("icon-hamburger");
const closeIcon = document.getElementById("icon-close");

const toggleHidden = () => {
  headerNav.classList.toggle("hidden");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
};

headerNavToggle.addEventListener("click", (e) => {
  e.preventDefault();
  toggleHidden();
});

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
