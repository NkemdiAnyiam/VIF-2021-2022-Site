const addCollapseFunctionality = () => {
  const pinnedPostsList = document.querySelector("#profile-posts .profile-post-results");
  pinnedPostsList.addEventListener('click', (e) => {
    const clicked = e.target.closest('.profile-post-btn');
  
    if(!clicked) { return; }
  
    const postCard = clicked.closest('.content-card');
    const post = postCard.querySelector('.post-content');
    post.classList.toggle('collapsed');
    clicked.classList.toggle('expand');
  });
};
addCollapseFunctionality();