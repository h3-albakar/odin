const btn = document.querySelector("button");
const list = document.querySelector("ul");
const input = document.querySelector("#item");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    let newItem = document.createElement("li");
    // newItem.textContent = input.value;
    let sp = document.createElement("span");
    let btn = document.createElement("button");

    sp.textContent = input.value;
    input.value = "";
    btn.textContent = "Delete";
    newItem.appendChild(sp);
    newItem.appendChild(btn);
    list.appendChild(newItem);
});