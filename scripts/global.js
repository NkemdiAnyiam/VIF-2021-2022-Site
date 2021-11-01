'use strict';

const injectBanner = () => {
  const banner = document.querySelector('.banner');
  banner.innerHTML = '';
  banner.insertAdjacentHTML('beforeend', `
    <div class="banner__logo-container">
      <svg class="banner__logo" xmlns="http://www.w3.org/2000/svg" width="403.286" height="216"
        viewBox="0 0 403.286 216">
        <path
          d="M403.286,61.432H341.433V26.6h61.853ZM341.433,94.847v29.86h61.853V94.847H341.433M309.8,61.432V26.6H275.314v94.557L184.667,26.6H147.342L309.8,189.4V94.847h31.638V61.432Z"
          fill="#32999d" />
        <path d="M309.8,61.432V26.6h31.638V61.432Zm0,33.415V189.4h31.638V94.847Z" fill="#ceeeef" />
        <polygon points="0 216 0 0 214.178 216 0 216" fill="#32999d" />
      </svg>
    </div>

    <div class="banner__text-container">
      <p class="banner__date">Friday, February 25, 2022</p>
      <p class="banner__fair-text">Visualization Industry Fair</p>
    </div>
  `);
};
injectBanner();

const injectFooter = () => {
  const footer = document.querySelector('.footer');
  footer.innerHTML = '';
  footer.insertAdjacentHTML('beforeend', `
    <ul class="footer__links">
      <li class="footer__item">
        <a href="https://twitter.com/tamuviz?t=GzuSJdHsO5U7NpkGwtHXBA&s=09" target="_blank" class="footer__link">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
      </li>

      <li class="footer__item">
        <a href="https://youtube.com/c/TexasAMDepartmentofVisualization" target="_blank" class="footer__link">
          <ion-icon name="logo-youtube"></ion-icon>
        </a>
      </li>
      
      <li class="footer__item">
        <a href="https://instagram.com/tamu_vizindustryfair?utm_medium=copy_link" target="_blank" class="footer__link">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </li>

      <li class="footer__item">
        <a href="https://www.linkedin.com/company/texas-a-m-visualization-industry-fair" target="_blank" class="footer__link">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </li>
    </ul>
  `);
};
injectFooter();

// const injectNav = () => {
//   const navigation = document.querySelector('.nav');
//   const pathSubstring = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
//   navigation.insertAdjacentHTML('beforeend', `
//     <ul class="nav__list">
//       <li class="nav__item"><a href="index.html" class="nav__link nav__link--current">Welcome</a></li>
//       <li class="nav__item"><a href="about-vif.html" class="nav__link">About VIF</a></li>
//       <li class="nav__item"><a href="for-industry.html" class="nav__link">For Industry</a></li>
//       <li class="nav__item"><a href="common-questions.html" class="nav__link">Common Questions</a></li>
//       <li class="nav__item"><a href="about-viz.html" class="nav__link">About Viz</a></li>
//       <li class="nav__item"><a href="vif-committee.html" class="nav__link">VIF Committee</a></li>
//     </ul>
//   `);
//   const currentLink = navigation.querySelector(`.nav__link[href="${pathSubstring}"]`);
//   currentLink.classList.add('nav__link--current');
// }
// injectNav();
