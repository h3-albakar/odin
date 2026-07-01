const container = document.querySelector("#container");

const content = document.createElement("div");
const p_tag = document.createElement("p");

p_tag.style.font = "red";
p_tag.textContent = "I am a red Paragraph";

content.classList.add("content");
content.textContent = "This is the glorious content";
container.appendChild(content);