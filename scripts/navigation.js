const injectNav = () => {
  const navigation = document.querySelector('.nav');
  navigation.innerHTML = '';
  navigation.insertAdjacentHTML('beforeend', `
    <ul class="nav__list">
      <li class="nav__item"><a href="index.html" class="nav__link">Welcome</a></li>
      <!--<li class="nav__item"><a href="schedule.html" class="nav__link">Schedule</a></li>-->
      <li class="nav__item"><a href="for-students.html" class="nav__link">For Students</a></li>
      <li class="nav__item"><a href="for-industry.html" class="nav__link">For Industry</a></li>
      <li class="nav__item"><a target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSmbNtzCzrGDnewYitCM4Xw4ldS6FuY_LNPT_gETyTKPHbd9HT5nQMqCGuvgbtYwPihwNe1A-4FrEJ7/pubhtml?gid=1199561687&single=true" class="nav__link">Schedule</a></li>
      <li class="nav__item"><a href="common-questions.html" class="nav__link">Common Questions</a></li>
      <li class="nav__item"><a href="about-viz.html" class="nav__link">About Viz</a></li>
      <li class="nav__item"><a href="vif-committee.html" class="nav__link">VIF Committee</a></li>
      <li class="nav__item"><a href="job-resources.html" class="nav__link">Job Resources</a></li>
    </ul>
  `);

  // Use the last part of the URL to determine which link is the "current" link
  const pathSubstring = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
  // Get the <a> whose href matches the ending of the pathname. If not found, default to index.html
  const currentLink = navigation.querySelector(`.nav__link[href="${pathSubstring}"]`)
    ?? navigation.querySelector('.nav__link[href="index.html"]');
  currentLink.classList.add('nav__link--current');

  // Inject nav button
  navigation.insertAdjacentHTML('beforebegin', `
    <button class="nav__btn">
      <div></div>
      <div></div>
      <div></div>
    </button>
  `);

  watchResizeForNav();
  watchNavButton();
};

const watchResizeForNav = () => {
  window.addEventListener('resize', () => {
    // If the viewport is wide enough, remove classes associated with the alternate nav
    if (window.innerWidth >= 768) {
      const navigation = document.querySelector('.nav');
      const navButton = document.querySelector('.nav__btn');

      navigation.classList.remove('nav--expanded');
      navigation.classList.remove('nav--collapsed');
      navButton.classList.remove('nav__btn--expanded');
    }
  });
};

const watchNavButton = () => {
  const navButton = document.querySelector('.nav__btn');
  navButton.addEventListener('click', () => {
    const navigation = document.querySelector('.nav');
    const navButton = document.querySelector('.nav__btn');
  
    // if not expanded, add 'expanded' and remove 'collapsed'
    if(!navigation.classList.contains('nav--expanded')) {
      navigation.classList.add('nav--expanded');
      navigation.classList.remove('nav--collapsed');
      navButton.classList.add('nav__btn--expanded');
    }
    // otherwise, do the reverse
    else {
      navigation.classList.add('nav--collapsed');
      navigation.classList.remove('nav--expanded');
      navButton.classList.remove('nav__btn--expanded');
    }
  });
}

export {injectNav};
