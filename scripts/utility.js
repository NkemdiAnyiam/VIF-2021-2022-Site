const addCollapseFunctionality = (containerClass, blockClass, collapsableClass) => {
  const container = document.querySelector(`.${containerClass}`);

  container.addEventListener('click', (e) => {
    const clicked = e.target.closest('.expand-btn');
  
    if(!clicked) { return; }
  
    const block = clicked.closest(`.${blockClass}`);
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
    clicked.classList.toggle('expand');
  });
};

export { addCollapseFunctionality };
