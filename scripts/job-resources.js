import { SVG_String_newTabIcon } from "./SVG-strings.js";

const listDetailed = [
  {
    content: `There's a Linkedin Jobs page via the Viz Industry Fair. Ask to be invited to it and you'll get access to a lot of job postings, especially internships!`,
    url: `https://www.linkedin.com/groups/13994921/`,
  },
  {
    content: `A lot of internships, and jobs, are posted on the VIZA-VIST Job page on Facebook.`,
  },
  {
    content: `Join the Women in Animation on campus group (WIA). They have a Discord channel where they post jobs.`,
  },
  {
    content: `ATX Game Makers website (you can get access to their Discord through their website).`,
    url: `https://atxgamemakers.com/`,
  },
  {
    content: `The VIZ Career Fair has a number of companies that look for interns. You should go in February!`,
    url: `https://vizindustryfair.com/`,
  },
  {
    content: `Join the Viz SIGGRAPH chapter. They get in speakers and have job leads.`,
  },
  {
    content: `There is the ADJ Austin (Austin Digital Jobs) group on Facebook.`,
  },
  {
    content: `The news, for example, Tesla is/was hiring in the Austin and central Texas area. KVUE had an article. Some of the jobs were in Game Dev.`,
  },
  {
    content: `Look on company websites, etc.`,
  },
  {
    content: `TAMU Career Services - They have resources and company lists. Companies often contact them to post internships and jobs.`,
  },
  {
    content: `Live Industry Job Postings spreadsheet.`,
    url: `https://docs.google.com/spreadsheets/u/0/d/1eR2oAXOuflr8CZeGoz3JTrsgNj3KuefbdXJOmNtjEVM/htmlview`
  },
  {
    content: `Live Remote Jobs list spreadsheet`,
    url: `https://docs.google.com/spreadsheets/d/e/2PACX-1vRnGWwEeYo7LEKiGMaRI7vGtz-CS9aTg4r6c8gsaNM_gMfK2wxZwynT-MTdZHLegMqMwNj0VugftnvM/pubhtml`,
  },
  {
    content: `www.Creativeheads.net`,
    url: `https://www.Creativeheads.net`,
  },
  {
    content: `www.AWN.com (Animation World Network)`,
    url: `https://www.AWN.com`,
  },
  {
    content: `www.Gamasutra.com (Games focused)`,
    url: `https://www.Gamasutra.com`,
  },
  {
    content: `If you're interested in games, here's a handy map of all of the game companies on the planet, and their URLs by location.`,
    url: `https://www.gamedevmap.com/`,
  },
  {
    content: `AnimatedJobs.com`,
    url: `https://animatedjobs.com/?ct=t%2820210427%29`,
  },
  {
    content: `EntertainmentCareers.net`,
    url: `https://www.entertainmentcareers.net/women-in-animation/?ct=t(20210427)`,
  },

  {
    content: `Texas Film Commision.net`,
    url: `https://gov.texas.gov/film/hotline`,
  },
  {
    content: `Internships listed on this site`,
    url: `http://www.looksharp.com`,
  },
  {
    content: `Job site`,
    url: `http://www.simplyhired.com/`,
  },
  {
    content: `Austin Film Society`,
    url: `https://www.austinfilm.org/internship-faqs/`,
  },
  {
    content: `Texas Commission on the Arts - Has job postings`,
    url: `https://www.arts.texas.gov/`,
  },
  {
    content: `Vitamin T is a temp agency for creatives`,
    url: `https://vitamintalent.com/`,
  },
  {
    content: `Nickelodean Internships`,
    url: `https://www.nickanimation.com/programs/internship-program/`,
  },
  {
    content: `Game job site`,
    url: `https://gamejobhunter.com/`,
  },
  {
    content: `The Creative Group - temp agency for creatives`,
    url: `https://www.roberthalf.com/employers/creativegroup`,
  },
  {
    content: `Internship-finder website`,
    url: `http://www.internshipfinder.com/`,
  },
  {
    content: `The American Institute of Graphic Arts official website has an entire Careers section. This includes a tab exclusively for Internships`,
    url: `https://www.aiga.org/`,
  },
  {
    content: `Game Job List`,
    url: `https://docs.google.com/document/d/1CU1H-8ZQWUPIBrT3VaUjjSMpOrarfpfhI86q8Bkpr_8/edit?fbclid=IwAR3qWkGD7u0l5WzEi5JWCnE6Gg6Q3vSTQaInGhv1jQiTT0PVC_eEAg2_24w`,
  },
  {
    content: `Texas Film Commission Job Postings Page (This includes jobs from companies all over the state, that are not necessarily associated with the Texas Film Commission).`,
    url: `https://gov.texas.gov/film/hotline`,
  },
];

const fillList = (listClass, list) => {
  const jobResourcesList = document.querySelector(`.${listClass}`);
  jobResourcesList.innerHTML = "";
  list.forEach(({ content, url }) => {
    jobResourcesList.insertAdjacentHTML(
      "beforeend",
      `
      <li class="job-resources-list__item${url ? ' job-resources-list__item--has-URL' : ''}">
        ${
          url
          ? `<a href="${url}" class="job-resources-list__link" target="_blank">`
          : ''
        }
        ${
          url
          ? `${SVG_String_newTabIcon('new-tab-icon')}`
          : ''
        }
          <span>${content}</span>
        ${url ? '</a>' : ''}
      </li>
    `
    );
  });
};
fillList("job-resources-list--detailed", listDetailed);

const filterJobResources = (listClass, list, e) => {
  const filterString = e.target.value; // string the user entered into input bar

  const newList = list
    .filter((jobResource) => {
      // new map should contain items that contain the filter substring
      return (
        jobResource.content
          .toLowerCase()
          .includes(filterString.toLowerCase())
      );
    })
    .map(({ content, url }) => {
      const regExp = new RegExp(filterString, "gi"); // regular expression for selecting all instances of the substring, case-insensitive
      // <mark></mark> highlights the substring(s)
      const newContent = content.replace(
        regExp,
        (match) => `<mark>${match}</mark>`
      );
      return url ? { content: newContent, url } : { content: newContent };
    });
    console.log(newList);

  fillList(listClass, newList); // refill the companies list with the subset of companies and with added highlights
};

const filterBar = document.querySelector(".filter-bar");
filterBar.addEventListener(
  "input",
  filterJobResources.bind(null, "job-resources-list--detailed", listDetailed)
);
