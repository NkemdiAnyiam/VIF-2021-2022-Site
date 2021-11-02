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

export {injectFooter};
