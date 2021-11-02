const sizzleReelData = [
  {
    title: 'TAMU Best of Visualization 2021',
    src: 'https://www.youtube.com/embed/zt7IZRzFEV8',
    url: 'https://youtu.be/zt7IZRzFEV8',
  },
  {
    title: 'TAMU Best of Visualization - UI/UX and Graphic Design',
    src: 'https://www.youtube.com/embed/Ixusv-GMrho',
    url: 'https://youtu.be/V-3NX6AHwnY',
  },
  {
    title: 'TAMU Best of Visualization - Game Design',
    src: 'https://www.youtube.com/embed/U2Fjr0saMUY',
    url: 'https://youtu.be/U2Fjr0saMUY',
  },
  {
    title: 'TAMU Best of Visualization - FX and Technical Direction',
    src: 'https://www.youtube.com/embed/V-3NX6AHwnY',
    url: 'https://youtu.be/Ixusv-GMrho',
  },
];

const generateReelFromTemplate = (reelData) => {
  const {
    title,
    src,
    url
  } = reelData;

  const templateBlockId = "sizzle-reels__reel-container-template";
  const resultTemplate = document.getElementById(templateBlockId);
  const clone = document.importNode(resultTemplate.content, true);
  const iframe = clone.querySelector('iframe');
  const reelContainer = iframe.closest('.sizzle-reels__reel-container'); // same as clone but Element instead of Node
  const loadingNotif = clone.querySelector('.sizzle-reels__loading-notification');
  const loadingTextLink = loadingNotif.querySelector('.link');

  loadingTextLink.href = url;
  loadingTextLink.innerHTML = title;

  // When the video finishes loading, remove the loading notification and allow the reel container to expand
  iframe.onload = () => {
    loadingNotif.remove();
    iframe.classList.remove('sizzle-reels__video--loading');
    reelContainer.classList.remove('sizzle-reels__reel-container--loading');
  };
  iframe.src = src;

  return clone;
};


const generateReels = () => {
  const sizzleReelsContainer = document.querySelector('.sizzle-reels');

  // generate each reel
  sizzleReelData.forEach((reelData) => {
    const reel = generateReelFromTemplate(reelData);
    sizzleReelsContainer.appendChild(reel);
  });

  // remove template block
  const templateId = "sizzle-reels__reel-container-template";
  const resultTemplate = document.getElementById(templateId);
  resultTemplate.remove();
};

generateReels();

