const btn = document.querySelector("button");
const list = document.querySelector("ul");
const input = document.querySelector("#item");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    let newItem = document.createElement("li");
    // newItem.textContent = input.value;
    let sp = document.createElement("span");
    let btn1 = document.createElement("button");

    sp.textContent = input.value;
    input.value = "";
    btn1.textContent = "Delete";
    newItem.appendChild(sp);
    newItem.appendChild(btn1);
    list.appendChild(newItem);
    btn1.addEventListener("click",function() {
        alert(`item ${newItem.textContent} removed`)
        newItem.remove();
    })

});