document.addEventListener("DOMContentLoaded", () => {

  // dark mode logic

  
  
  // filter skills logic
  
  const filterButtons = document.querySelectorAll(".filter_buttons button");
  const filterableSkills = document.querySelectorAll(".filterable_skills .skill");

  const filterSkills = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterableSkills.forEach(skill => {
      if (skill.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
        skill.classList.remove("grayscale");
      } else {
        skill.classList.add("grayscale");
      }
    });
  };

  filterButtons.forEach(button => button.addEventListener("click", filterSkills));
});
