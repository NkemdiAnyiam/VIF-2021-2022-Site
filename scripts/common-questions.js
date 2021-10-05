const addCollapseFunctionality = () => {
  const questions = document.querySelector(".questions");
  questions.addEventListener('click', (e) => {
    const clicked = e.target.closest('.expand-btn');
  
    if(!clicked) { return; }
  
    const qaBlock = clicked.closest('.questions__qa-block');
    const question = qaBlock.querySelector('.questions__answer');
    question.classList.toggle('collapsed');
    question.classList.toggle('expanded');
    clicked.classList.toggle('expand');
  });
};
addCollapseFunctionality();