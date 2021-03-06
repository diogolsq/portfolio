// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("turbolinks").start()



// External imports
// import "bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

// import '../assets/stylesheets/components/index.css'
import { Banner } from './plugins/bannerBoom';
import { loadDynamicBannerText } from './plugins/banner';
// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener( 'turbolinks:load', () => {

  // var banner = new Banner();
  // banner.initialize("canvas");

  // Call your functions here, e.g:
  AOS.init();
  loadDynamicBannerText();

  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }












});



