// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("turbolinks").start()



// External imports
// import "bootstrap";
import AOS from 'aos';

// import '../assets/stylesheets/components/index.css'
import { Banner } from './plugins/bannerBoom';
import { loadDynamicBannerText } from './plugins/banner';
// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener( 'turbolinks:load', () => {

  // var banner = new Banner();
  // banner.initialize("canvas");
  loadDynamicBannerText();

  // Call your functions here, e.g:
  // initSelect2();
  // initMapbox();
  AOS.init();

});



