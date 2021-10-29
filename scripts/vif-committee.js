'use strict';

import {addCollapseFunctionality} from "./utility.js";

addCollapseFunctionality('committee', 'committee__block', 'committee__description');

// for the 'name' attribute in <ion-icon>
const githubIonIconName = 'logo-github';
const linkedInIonIconName = 'logo-linkedin';
const personalWebsiteIonIconName = 'person-circle-outline';

const members = [
  // Jackson Spencer
  {
    fullName: 'Jackson Spencer',
    imgSrc: 'imgs/JacksonSpencer-min.jpg',
    role: 'Committee Director',
    description: `Jackson Spencer graduated with a BS in Visualization in 2019 and is currently a graduate student pursuing his MS in Visualization, with a primary focus in Look Development for feature animation. He also works as the Lead Pipeline Technician for the Viz Department, where he manages the campus renderfarm and provides technical support to the major’s animation pipeline. Despite his primarily technical role, he has always had a deep love for art, and strives to bring an artistic perspective to every project he works on.`,
    socialLinks: [
    ],
    rank: 'director'
  },
  // Nkemdi Anyiam
  {
    fullName: 'Nkemdi Anyiam',
    imgSrc: 'imgs/Headshot_Nkemdi-Anyiam-OG-min.png',
    role: 'Website Designer & Developer',
    description: `Nkemdi Anyiam is a senior Computer Science major with minors in Art and Game Design & Development at\
    Texas A&M University. He is focusing on front-end web development and is currently working on multiple\
    projects. He is the one who created the website that you are currently viewing :)`,
    socialLinks: [
      {
        iconName: linkedInIonIconName,
        link: 'https://www.linkedin.com/in/nkemdi-anyiam/'
      },
      {
        iconName: personalWebsiteIonIconName,
        link: 'https://nkemdianyiam.myportfolio.com/'
      },
      {
        iconName: githubIonIconName,
        link: 'https://github.com/NkemdiAnyiam'
      },
    ],
    rank: 'normal'
  },
  // Daniel Arellano
  {
    fullName: 'Daniel Arellano',
    imgSrc: 'imgs/ArellanoDaniel-min.jpg',
    role: 'Social Media',
    description: `Daniel Arellano is a graduate student in the M.S. Visualization program, Daniel is a driven 3D artist who loves to make hard surface models and Look Development. He hopes to one day be a part of the teams over at Treyarch and Infinity Ward in order to contribute in the making of Call of Duty.`,
    socialLinks: [
    ],
    rank: 'normal'
  },
  // Jaime Diaz
  {
    fullName: 'Jaime Diaz',
    imgSrc: 'imgs/diazJaime_profilePicture_01-min.png',
    role: 'Social Media',
    description: `Jaime Diaz is an undergraduate at Texas A&M University studying Visualization within the College of Architecture as well as taking a minor in Game Design and Development. As a 3D Artist,  Jaime is working hard to better himself everyday, expanding his skillset with the tools he currently has and new ones to add under his belt. He has experience in both Animation and Video Game pipelines/workflows.`,
    socialLinks: [
    ],
    rank: 'normal'
  },
  // Weston Jones
  {
    fullName: 'Weston Jones',
    imgSrc: 'imgs/Weston_Jones_Square-min.jpg',
    role: 'Industry Outreach',
    description: `Weston Jones is a Graduate student in the M.S. Visualization program. Becoming a director or studio lead for a games studio is Weston's long term goal; his pathway to this has included a Bachelor's degree in Computer Animation from SHSU and a study of Game Design, C++/# programming, Short Film Layout and Lighting, and more.`,
    socialLinks: [
    ],
    rank: 'normal'
  },
  // Chudi Nwokoma
  {
    fullName: 'Chudi Nwokoma',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
    role: 'Logistical support',
    description: `Chudi Nwokoma is a graduate student in the M.S. Visualization program. With a background in Architecture and a Masters in Environmental Design, Chudi has always had a passion for the artistic side of design and is currently focusing on game and feature animation as well as motion capture. An experienced team player and facilitator, he hopes to collaborate and contribute to the gaming and animation industry in the near future.`,
    socialLinks: [
      {
        iconName: linkedInIonIconName,
        link: 'https://www.linkedin.com/in/chukwudi-nwokoma-b0a2066b/'
      },
      {
        iconName: personalWebsiteIonIconName,
        link: 'https://www.artstation.com/draegnchu'
      },
    ],
    rank: 'normal'
  },
   // Akhilesh Vijaykumar
   {
    fullName: 'Akhilesh Vijaykumar',
    imgSrc: 'imgs/Akhilesh-min.jpg',
    role: ' Industry Outreach',
    description: `Akhilesh Viajykumar is a Graduate student in the Visualization Department at Texas A&M University. He is currently working as a Technical Artist Intern at Electronic Arts (EA).`,
    socialLinks: [
      {
        iconName: linkedInIonIconName,
        link: 'https://www.linkedin.com/in/akhilesh-vijaykumar-35691014a/'
      },
    ],
    rank: 'normal'
  },
  // Mayet Andreassen
  {
    fullName: 'Mayet Andreassen',
    imgSrc: 'imgs/Mayet_Photo_TwistsBG-min.jpg',
    role: 'Faculty Lead Liaison',
    description: `Mayet Andreassen is currently working as a full-time Instructional Assistant Professor and Internship Coordinator in the Visualization Department at Texas A&M University. She is also a member of the TXMPA (Texas Motion Picture Assoc.) Board as the Education Representative. She has over 10 years of teaching experience with a focus in games and animation.  She previously worked as a game and front-end artist, as well as a freelance illustrator and graphics artist, prior to becoming an educator.`,
    socialLinks: [
    ],
    rank: 'faculty'
  },
  // Mayet Andreassen
  {
    fullName: 'Andre Thomas',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
    role: 'Faculty Liaison',
    description: `André Thomas is a graduate of LCAD MFA in Game Design. He founded and serves as the director of the LIVE Lab in the Department of Visualization at Texas A&M University, where he also teaches game design, game development, and interactive graphics techniques. In 2014, he founded Triseum, where he serves as CEO and leads the creation of its academic video games. He is an EdTech Leadership award winner, National Academy of Sciences board member, National Arts Education Association lead instructor, and Chillennium Game Jam chair. André also has been invited to speak at numerous education and technology events both in the U.S. and abroad, including SXSW, TEDx, ASU-GSV, BETT, Chinese Academy of Fine Arts, Austrian Ministry of Education and European Schoolnet. His game-based learning insights and ideas are featured in the Huffington Post, Austin Business Journal, eCampus News, Learning Solutions Magazine, and more.
    With more than 25 years in CGI production, André has worked on video games, live action feature films and commercials. Previously he was Head of Graphics for EA Sports Football games (including NCAA, Head Coach, NFL Tour and Madden. He also created graphics for such films as Men in Black, Con Air, Independence Day, Valiant, Ant Bully, and Tomorrow Never Dies.
    `,
    socialLinks: [
    ],
    rank: 'faculty'
  },
];

const generateCommitteeBlock = (memberData) => {
  const {
    fullName,
    imgSrc,
    role,
    description,
    socialLinks,
    rank
  } = memberData;

  const templateBlockId = "committee__block-template";
  const resultBlockTemplate = document.getElementById(templateBlockId);
  const cloneBlock = document.importNode(resultBlockTemplate.content, true);
  const blockHeaderNode = cloneBlock.querySelector('.committee__block-header');
  const photoNode = cloneBlock.querySelector('.committee__photo');
  const nameNode = cloneBlock.querySelector('.committee__name');
  const roleNode = cloneBlock.querySelector('.committee__role');
  const descriptionNode = cloneBlock.querySelector('.committee__description');
  const socialLinksNode = cloneBlock.querySelector('.committee__social-links');

  photoNode.src = imgSrc;
  photoNode.alt = fullName;
  nameNode.innerHTML = fullName;
  roleNode.innerHTML = role;
  descriptionNode.innerHTML = `<p>${description}</p>`;

  // create social link elements for each social link the member has
  socialLinksNode.innerHTML = ''; // clear out template links
  socialLinks.forEach(({link, iconName}) => {
    const socialLinkString = `
      <a href="${link}" target="_blank"
        class="committee__social-link">
        <ion-icon name="${iconName}" class="committee__social-icon"></ion-icon>
      </a>`;

    socialLinksNode.insertAdjacentHTML('beforeend', socialLinkString);
  });

  // Changes color of the block depending on the rank of the member
  blockHeaderNode.classList.add(`committee__block-header--${rank}`);
  descriptionNode.classList.add(`committee__description--${rank}`);
  socialLinksNode.classList.add(`committee__social-links--${rank}`);

  return cloneBlock;
};

const generateCommitteeBlocksFromTemplate = (members) => {
  // get container of all the committee member blocks
  const committeeBlocks = document.querySelector('.committee__blocks');

  // generate a block using each member's data
  members.forEach((member) => {
    const committeeBlock = generateCommitteeBlock(member);
    committeeBlocks.appendChild(committeeBlock);
  });

  // remove template block
  const templateBlockId = "committee__block-template";
  const resultBlockTemplate = document.getElementById(templateBlockId);
  resultBlockTemplate.remove();
};

generateCommitteeBlocksFromTemplate(members);
