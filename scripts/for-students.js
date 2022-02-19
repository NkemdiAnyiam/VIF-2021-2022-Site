const companiesPresent = [
  {companyName: "Jacobs", focus: "Animation", url: "http://www.jacobs.com/"},
  {companyName: "IMG Studio", focus: "Animation", url: "https://theimgstudio.com/"},
  {companyName: "K2Share", focus: "Graphic Design", url: "https://www.k2share.com/"},
  {companyName: "Blur Studio Inc", focus: "Animation", url: "http://blur.com/"},
  {companyName: "BonusXP", focus: "Game Development", url: "https://bonusxp.com/"},
  {companyName: "Credera", focus: "Web UI/UX", url: "https://credera.com/"},
  {companyName: "Cloud Imperium Games", focus: "Game Development", url: "https://cloudimperiumgames.com/"},
  {companyName: "900lbs", focus: "Animation | Graphic Design | Game Development | VFX", url: "https://900lbs.com/"},
  {companyName: "Click Here Labs - TRG", focus: "Animation", url: "https://clickherelabs.com/"},
  {companyName: "Vytal Studios", focus: "Metaverse Platform Creation", url: "https://vytalstudios.com/"},
  {companyName: "The Third Floor, Inc.", focus: "Film | TV | VR | Games", url: "https://thethirdfloorinc.com/"},
  {companyName: "Mighty Coconut", focus: "Game Development", url: "https://www.mightycoconut.com/"},
  {companyName: "DreamWorks Animation", focus: "Animation", url: "https://www.dreamworks.com/"},
  {companyName: "VIBE", focus: "Architecture Visualization", url: "https://viberenders.com/"},
  {companyName: "Electronic Arts", focus: "Game Development", url: "https://www.ea.com/"},
  {companyName: "TRG", focus: "Interactive Design", url: "https://richards.com/"},
  {companyName: "Cockram Scenario", focus: "Themed Entertainment", url: "https://www.teaconnect.org/Members/Member-Directory/index.cfm?membercode=8255"},
  {companyName: "Virtuix Inc.", focus: "Game Development", url: "https://www.virtuix.com/"},
  {companyName: "Proteus Games", focus: "Game Development", url: "https://proteusgames.com/"},
  {companyName: "Sandshark Games", focus: "Game Development", url: "https://www.sandsharkgames.com/"},
  {companyName: "Six Foot", focus: "Game Development", url: "https://6ft.com/"},
  {companyName: "AEM Creations", focus: "Animation", url: "https://www.aem2create.com/"},
  {companyName: "Game Worlds", focus: "Game Development", url: "https://gameworldscamp.com/"},
];

const companiesPast = [
  {companyName: "Aggieland Outfitters"},
  {companyName: "Texas Film Commission"},
  {companyName: "Texas Moving Picture Alliance (TXMPA)"},
  {companyName: "Electronic Arts"},
  {companyName: "NOKIA"},
  {companyName: "N3D Studios Incorporated"},
  {companyName: "Powerhouse Animation"},
  {companyName: "SunSpear Games"},
  {companyName: "Pumps & Pipes"},
  {companyName: "Houston Methodist Institute for Technology, Innovation and Education"},
  {companyName: "Gearbox Software"},
  {companyName: "Aquifer"},
  {companyName: "Digital Seat Media"},
  {companyName: "Enduring Games"},
  {companyName: "C.C. Creations"},
  {companyName: "Booz Allen Hamilton, Inc."},
  {companyName: "Cloud Imperium Games"},
];

const companiesNameSortComparator = (company1, company2) => {
  return (company1.companyName <= company2.companyName) ? -1 : 1;
}

companiesPast.sort(companiesNameSortComparator);
companiesPresent.sort(companiesNameSortComparator);

const fillCompaniesList = (listClass, list) => {
  const companiesList = document.querySelector(`.${listClass}`);
  companiesList.innerHTML = '';
  list.forEach(({companyName, focus, url}) => {
    companiesList.insertAdjacentHTML('beforeend', `
      <li class="companies-list__item">
        ${url ? `<a href="${url}" class="link" target="_blank">` : ''}<span class="companies-list__name">${companyName}</span>${url ? `</a>` : ''}
        ${focus ? `<span class="companies-list__focus">${focus}</span>` : ''}
      </li>
    `);
  });
};
fillCompaniesList('companies-list--current', companiesPresent);
fillCompaniesList('companies-list--past', companiesPast);


const filterCompanies = (listClass, list, e) => {
  const filterString = e.target.value; // string the user entered into input bar

  const newList = list.filter(company => 
  {
    // new map should contain items that contain the filter substring
    return company.companyName.toLowerCase().includes(filterString.toLowerCase()) || company.focus.toLowerCase().includes(filterString.toLowerCase());
  })
  .map(({companyName, focus, url}) => {
    const regExp = new RegExp(filterString, 'gi'); // regular expression for selecting all instances of the substring, case-insensitive
    // <mark></mark> highlights the substring(s)
    const newCompanyName = companyName.replace(regExp, match => `<mark>${match}</mark>`);
    const newFocus = focus.replace(regExp, match => `<mark>${match}</mark>`);
    return { companyName: newCompanyName, focus: newFocus, url: url }
  });
  
  fillCompaniesList(listClass, newList); // refill the companies list with the subset of companies and with added highlights
}

const filterBar = document.querySelector('.filter-bar');
filterBar.addEventListener('input', filterCompanies.bind(null, 'companies-list--current', companiesPresent));
