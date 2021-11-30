let total = document.querySelector("#total");
total.innerText = `Total: $0`;
let limeCola = document.querySelector("#lime-cola");
let saltedPeanuts = document.querySelector("#salted-peanuts");
let chocolateBar = document.querySelector("#chocolate-bar");
let fruitGummies = document.querySelector("#fruit-gummies");
let sum = 0;

const addLimeCola = (event) => {
    sum += 2.00;
    total.innerText = `Total: $${sum}`;
}

limeCola.addEventListener("click", addLimeCola);

const addSaltedPeanuts = (event) => {
    sum += 3.00;
    total.innerText = `Total: $${sum}`;
}

saltedPeanuts.addEventListener("click", addSaltedPeanuts);

const addChocolateBar = (event) => {
    sum += 4.00;
    total.innerText = `Total: $${sum}`;
}

chocolateBar.addEventListener("click", addChocolateBar);

const addFruitGummies = (event) => {
    sum += 6.00;
    total.innerText = `Total: $${sum}`;
}

fruitGummies.addEventListener("click", addFruitGummies);