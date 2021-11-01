const companies = [
  "Aggieland Outfitters",
  "Texas Film Commission",
  "Texas Moving Picture Alliance (TXMPA)",
  "Electronic Arts",
  "NOKIA",
  "N3D Studios Incorporated ",
  "Powerhouse Animation",
  "SunSpear Games",
  "Pumps & Pipes",
  "Houston Methodist Institute for Technology, Innovation and Education",
  "Gearbox Software",
  "Aquifer",
  "Digital Seat Media",
  "Enduring Games",
  "C.C. Creations",
  "Booz Allen Hamilton, Inc.",
  "Cloud Imperium Games",
];

companies.sort();

const fillPastCompaniesList = () => {
  const companiesList = document.querySelector('.companies-list');
  companiesList.innerHTML = '';
  companies.forEach((companyName) => {
    companiesList.insertAdjacentHTML('beforeend', `
      <li class="companies-list__item">${companyName}</li>
    `);
  });
};
fillPastCompaniesList();