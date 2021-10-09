const addCollapseFunctionality = () => {
  const questions = document.querySelector(".questions");

  questions.addEventListener('click', (e) => {
    const clicked = e.target.closest('.expand-btn');
  
    if(!clicked) { return; }
  
    const qaBlock = clicked.closest('.questions__qa-block');
    const question = qaBlock.querySelector('.questions__answer');

    // if not expanded, add 'expanded' and remove 'collapsed'
    if(!question.classList.contains('expanded')) {
      question.classList.add('expanded');
      question.classList.remove('collapsed');
    }
    // otherwise, do the reverse
    else {
      question.classList.add('collapsed');
      question.classList.remove('expanded');
    }
    // toggle button class state
    clicked.classList.toggle('expand');
  });
};
addCollapseFunctionality();