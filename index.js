// Using getElementById to style the main title
const mainTitle = document.getElementById("main-title");
mainTitle.style.color = "#ff6b6b";

// Using getElementsByClassName to style the tagline
const tagline = document.querySelector(".tagline");
tagline.style.color = "yellow";
tagline.style.fontStyle = "italic";

// Now and loop languages
const languages = document.getElementsByClassName("language");
Array.from(languages).forEach((language, index) => {
  setTimeout(() => {
    language.style.color = "darkgreen";
    language.style.fontWeight = "bold";
  }, 500 * index); // Gradually highlights each language
});

// Using getElementsByTagName to uderline all section titles
const sectionTitles = document.getElementsByTagName("h2");
Array.from(sectionTitles).forEach((title, index) => {
  setTimeout(() => {
    title.style.color = "#0056b3";
    title.style.textDecoration = "underline";
  }, 700 * index);
});

// Using querySelector to select and modify a single element with ID
const reasons = document.querySelector("#reasons");
reasons.style.backgroundColor = "#f0f8ff";
reasons.style.padding = "10px";

// Using querySelectorAll to loop through skills and apply styles
const skills = document.querySelectorAll(".skill");
skills.forEach((skill, index) => {
  setTimeout(() => {
    skill.style.backgroundColor = "#e0e4e8";
    skill.style.padding = "5px";
    skill.style.borderRadius = "4px";
  }, 300);
});

// Applying alternating colors and font size to language items
const items = document.getElementsByClassName("language");
Array.from(items).forEach((item, index) => {
  item.style.color = index % 2 === 0 ? "purple" : "teal";
  item.style.fontSize = "1.1em";
});
