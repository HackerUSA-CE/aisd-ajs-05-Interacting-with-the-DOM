// Using getElementById to change the main title text after 1 second
setTimeout(() => {
  const mainTitle = document.getElementById("main-title");
  mainTitle.style.color = "#ff6b6b";
}, 1000);

// Using getElementsByClassName to style the tagline and loop through languages
const taglines = document.getElementsByClassName("tagline");
Array.from(taglines).forEach((tagline) => {
  tagline.style.color = "yellow";
  tagline.style.fontStyle = "italic";
});

const languages = document.getElementsByClassName("language");
Array.from(languages).forEach((language, index) => {
  setTimeout(() => {
    language.style.color = "darkgreen";
    language.style.fontWeight = "bold";
  }, 500 * index); // Gradually highlights each language
});

// Using getElementsByTagName to update all section titles
const sectionTitles = document.getElementsByTagName("h2");
Array.from(sectionTitles).forEach((title, index) => {
  setTimeout(() => {
    title.style.color = "#0056b3";
    title.style.textDecoration = "underline";
  }, 700 * index);
});

// Using querySelector to select and modify a single element with ID
setTimeout(() => {
  const reasons = document.querySelector("#reasons");
  reasons.style.backgroundColor = "#f0f8ff";
  reasons.style.padding = "10px";
}, 2000);

// Using querySelectorAll to loop through skills and apply styles
const skills = document.querySelectorAll(".skill");
skills.forEach((skill, index) => {
  setTimeout(() => {
    skill.style.backgroundColor = "#e0e4e8";
    skill.style.padding = "5px";
    skill.style.borderRadius = "4px";
  }, 300 * index);
});

// Additional practice: Selecting items with class "language" again to change text and color
const items = document.getElementsByClassName("language");
Array.from(items).forEach((item, index) => {
  setTimeout(() => {
    item.style.color = index % 2 === 0 ? "purple" : "teal";
    item.style.fontSize = "1.1em";
  }, 1500 + 300 * index); // Adds delay to each item for a staggered effect
});
