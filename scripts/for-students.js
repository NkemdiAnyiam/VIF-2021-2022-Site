const companiesPresent = [
  {companyName: "Jacobs", focus: "Animation"},
  {companyName: "IMG Studio", focus: "Animation"},
  {companyName: "K2Share", focus: "Graphic Design"},
  {companyName: "Blur Studio Inc", focus: "Animation"},
  {companyName: "BonusXP", focus: "Game Development"},
  {companyName: "Credera", focus: "Web UI/UX"},
  {companyName: "Cloud Imperium Games", focus: "Game Development"},
  {companyName: "900lbs", focus: "Animation | Graphic Design | Game Development | VFX"},
  {companyName: "Click Here Labs - TRG", focus: "Animation"},
  {companyName: "Vytal Studios", focus: "Metaverse Platform Creation"},
  {companyName: "The Third Floor, Inc.", focus: "Film | TV | VR | Games"},
  {companyName: "Mighty Coconut", focus: "Game Development"},
  {companyName: "DreamWorks Animation", focus: "Animation"},
  {companyName: "VIBE", focus: "Architecture Visualization"},
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
  list.forEach(({companyName, focus}) => {
    companiesList.insertAdjacentHTML('beforeend', `
      <li class="companies-list__item">
        <span class="companies-list__name">${companyName}</span>
        ${focus ? `<span class="companies-list__focus">${focus}</span>` : ''}
      </li>
    `);
  });
};
fillCompaniesList('companies-list--current', companiesPresent);
fillCompaniesList('companies-list--past', companiesPast);
