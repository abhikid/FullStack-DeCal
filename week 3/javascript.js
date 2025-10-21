// console log output
console.log("Hello, World!");
const message = "Hi there!";
console.log(message);

// click counter
let count = 0;
const clickBtn = document.getElementById("click-btn");
const countDisplay = document.getElementById("count");
clickBtn.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});

// greeting form
const nameInput = document.getElementById("name-input");
const greetBtn = document.getElementById("greet-btn");
const greetingDisplay = document.getElementById("greeting");
greetBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (name) {
        greetingDisplay.textContent = `Hello, ${name}!`;
    } else {
        greetingDisplay.textContent = "Please enter your name.";
    }
});

// dynamic list
const itemInput = document.getElementById("item-input");
const addItemBtn = document.getElementById("add-item-btn");
const itemList = document.getElementById("item-list");
addItemBtn.addEventListener("click", () => {
    const item = itemInput.value.trim();
    if (item){
        const li = document.createElement("li");
        li.textContent = item;
        itemList.appendChild(li);
        itemInput.value = "";
    }
});