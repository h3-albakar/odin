const container = document.querySelector("#container");

const head = document.createElement("h3");
head.textContent = "I'm a blue h3";
head.style.color = "blue";
container.appendChild(head);

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious content";
container.appendChild(content);

const p_tag = document.createElement("p");
p_tag.style.color = "red";
p_tag.textContent = "I am a red Paragraph";
container.appendChild(p_tag);

const hw_div = document.createElement('div');
hw_div.style.border = "2px solid black";
hw_div.style.backgroundColor = "pink";

const head_inner = document.createElement('h1');
head_inner.textContent = "I am in a div";
hw_div.appendChild(head_inner);

const p_inner = document.createElement('p');
p_inner.textContent = "ME TOO!";
hw_div.append(p_inner);

container.appendChild(hw_div);
