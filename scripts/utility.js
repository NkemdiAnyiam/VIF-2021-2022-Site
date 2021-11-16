const addCollapseFunctionality = (containerClass, blockClass, controlClass, collapsibleClass) => {
  const container = document.querySelector(`.${containerClass}`);

  container.addEventListener('click', (e) => {
    const clicked = e.target.closest(`.${controlClass}`);
  
    if(!clicked) { return; }
  
    const block = clicked.closest(`.${blockClass}`);
    const button = block.querySelector('.expand-btn');
    const collapsible = block.querySelector(`.${collapsibleClass}`);

    // if not expanded, add 'expanded' and remove 'collapsed'
    if(!collapsible.classList.contains('expanded')) {
      collapsible.classList.add('expanded');
      collapsible.classList.remove('collapsed');
    }
    // otherwise, do the reverse
    else {
      collapsible.classList.add('collapsed');
      collapsible.classList.remove('expanded');
    }
    // toggle button class state
    button.classList.toggle('expand');
  });
};

export { addCollapseFunctionality };
