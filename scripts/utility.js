const addCollapseFunctionality = (containerClass, blockClass, controlClass, collapsableClass) => {
  const container = document.querySelector(`.${containerClass}`);

  container.addEventListener('click', (e) => {
    const clicked = e.target.closest(`.${controlClass}`);
  
    if(!clicked) { return; }
  
    const block = clicked.closest(`.${blockClass}`);
    const button = block.querySelector('.expand-btn');
    const collapsable = block.querySelector(`.${collapsableClass}`);

    // if not expanded, add 'expanded' and remove 'collapsed'
    if(!collapsable.classList.contains('expanded')) {
      collapsable.classList.add('expanded');
      collapsable.classList.remove('collapsed');
    }
    // otherwise, do the reverse
    else {
      collapsable.classList.add('collapsed');
      collapsable.classList.remove('expanded');
    }
    // toggle button class state
    button.classList.toggle('expand');
  });
};

export { addCollapseFunctionality };
