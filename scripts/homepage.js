import { SVG_String_forStudents, SVG_String_forIndustry } from "./SVG-strings.js";

const forS = document.querySelector(".graphic-links__link--for-students");
forS.insertAdjacentHTML(
  "afterbegin",
  `${SVG_String_forStudents('graphic-links__icon')}`
);
const forI = document.querySelector(".graphic-links__link--for-industry");
forI.insertAdjacentHTML(
  "afterbegin",
  `${SVG_String_forIndustry('graphic-links__icon')}`
);
