import Typed from 'typed.js';

const programingLogo = () => {
  const element = document.getElementById('banner-typed-text');
  element.classList.toggle("ruby");
}


const loadDynamicBannerText = () => {
  if (document.getElementById('banner-typed-text')) {



    setInterval(programingLogo, 5000)



    new Typed('#banner-typed-text', {
      strings: ["puts 'Hi there'", "print('Hi there')","console.log('Hi There')"],
      typeSpeed: 50,
      backSpeed: 50,
      smartBackSpace: true,
      startDelay: 1000,
      loop: true
    });
  }
}

export { loadDynamicBannerText };

