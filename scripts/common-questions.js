const addCollapseFunctionality = () => {
  const questions = document.querySelector(".questions");
  questions.addEventListener('click', (e) => {
    const clicked = e.target.closest('.expand-btn');
  
    if(!clicked) { return; }
  
    const qaBlock = clicked.closest('.questions__question-block');
    const question = qaBlock.querySelector('.questions__answer');
    question.classList.toggle('collapsed');
    clicked.classList.toggle('expand');
  });
};
addCollapseFunctionality();