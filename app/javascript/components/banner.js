import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Turning your schedule into actionables", "Launching soon", "Sign up to for more info"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
