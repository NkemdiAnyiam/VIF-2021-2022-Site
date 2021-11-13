const injectBanner = () => {
  const banner = document.querySelector('.banner');
  banner.innerHTML = '';
  banner.insertAdjacentHTML('beforeend', `
    <div class="banner__logo-container">
      <svg class="banner__logo banner__logo--with-triangle" xmlns="http://www.w3.org/2000/svg" width="403.286" height="216"
        viewBox="0 0 403.286 216">
        <path
          class="banner__logo-v"
          d="M403.286,61.432H341.433V26.6h61.853ZM341.433,94.847v29.86h61.853V94.847H341.433M309.8,61.432V26.6H275.314v94.557L184.667,26.6H147.342L309.8,189.4V94.847h31.638V61.432Z"
        />
        <path class="banner__logo-i" d="M309.8,61.432V26.6h31.638V61.432Zm0,33.415V189.4h31.638V94.847Z" />
        <polygon class="banner__logo-triangle" points="0 216 0 0 214.178 216 0 216" />
      </svg>

      <svg class="banner__logo banner__logo--no-triangle" xmlns="http://www.w3.org/2000/svg" width="255.943" height="162.809" viewBox="0 0 255.943 162.809">
        <path
          class="banner__logo-v"
          d="M255.943,34.837H194.09V0h61.853ZM194.09,68.252v29.86h61.853V68.252H194.09M162.453,34.837V0H127.972V94.557L37.325,0H0L162.453,162.808V68.252H194.09V34.837Z"
        />
        <path class="banner__logo-i" d="M162.453,34.837V0H194.09V34.837Zm0,33.415v94.557H194.09V68.252Z" />
      </svg>

    </div>

    <div class="banner__text-container">
      <p class="banner__date">Friday, February 25, 2022</p>
      <p class="banner__fair-text">Visualization Industry Fair</p>
    </div>
  `);
};

export {injectBanner};
