import { SVG_String_forStudents, SVG_String_forIndustry } from "./SVG-strings.js";

(() => {
  const forStudentsLink = document.querySelector(".graphic-links__link--for-students");
  forStudentsLink.insertAdjacentHTML(
    "afterbegin",
    `${SVG_String_forStudents('graphic-links__icon')}`
  );

  const forIndustryLink = document.querySelector(".graphic-links__link--for-industry");
  forIndustryLink.insertAdjacentHTML(
    "afterbegin",
    `${SVG_String_forIndustry('graphic-links__icon')}`
  );
})();
