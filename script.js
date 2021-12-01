///////////////////////Vending Machine/////////////////////////////////////
{
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
}
///////////////////////////////Money Maker/////////////////////////////////

{
    let moneys = document.querySelector("#moneyForm");
    let coinBox = document.querySelector("#coinBox");
    let theCoin = document.querySelector("#coinChoice");
    let numCoins = document.querySelector("#numCoins");


    moneys.addEventListener("submit", (event) => {
        event.preventDefault();
        if (theCoin.value === "Penny") {
            for (let i = 0; i < numCoins.value; i++) {
                const penny = document.createElement("div");
                const pennyText = document.createElement("p");
                pennyText.innerText = "Penny";
                penny.appendChild(pennyText);
                penny.style.display = "block";
                penny.style.width = "fit-content";
                penny.style.height = "fit-content";
                penny.style.backgroundColor = "brown";
                penny.style.borderRadius = "50px";
                penny.style.padding = "10px";
                penny.style.paddingInline = "15px";
                
                coinBox.appendChild(penny);
            }        
        }
        if (theCoin.value === "Nickel") {
            for (let i = 0; i < numCoins.value; i++) {
                const nickel = document.createElement("div");
                const nickelText = document.createElement("p");
                nickelText.innerText = "nickel";
                nickel.appendChild(nickelText);
                nickel.style.display = "block";
                nickel.style.width = "fit-content";
                nickel.style.height = "fit-content";
                nickel.style.backgroundColor = "silver";
                nickel.style.borderRadius = "50px";
                nickel.style.padding = "15px";
                nickel.style.paddingInline = "23px";
                
                coinBox.appendChild(nickel);
            }        
        }
        if (theCoin.value === "Dime") {
            for (let i = 0; i < numCoins.value; i++) {
                const dime = document.createElement("div");
                const dimeText = document.createElement("p");
                dimeText.innerText = "dime";
                dime.appendChild(dimeText);
                dime.style.display = "block";
                dime.style.width = "fit-content";
                dime.style.height = "fit-content";
                dime.style.backgroundColor = "silver";
                dime.style.borderRadius = "50px";
                dime.style.padding = "5px";
                dime.style.paddingInline = "15px";
                
                coinBox.appendChild(dime);
            }        
        }
        if (theCoin.value === "Quarter") {
            for (let i = 0; i < numCoins.value; i++) {
                const quarter = document.createElement("div");
                const quarterText = document.createElement("p");
                quarterText.innerText = "quarter";
                quarter.appendChild(quarterText);
                quarter.style.display = "block";
                quarter.style.width = "fit-content";
                quarter.style.height = "fit-content";
                quarter.style.backgroundColor = "silver";
                quarter.style.borderRadius = "75px";
                quarter.style.padding = "30px";
                quarter.style.paddingInline = "35px";
                coinBox.appendChild(quarter);
            }        
        }
    });
}

//////////////////Light Bulb///////////////////////////////////////////

let lightBulb = document.querySelector("#lightBulb");
let onButton = document.querySelector("#onButton");
let offButton = document.querySelector("#offButton");
let toggleButton = document.querySelector("#toggleButton");
let endButton = document.querySelector("#endButton");
let lightBulbDiv = document.querySelector("#lightBulbDiv");


onButton.addEventListener("click", (event) => {
    lightBulb.classList.add("on");
    lightBulb.classList.remove("off"); 
});

offButton.addEventListener("click", (event) => {
    lightBulb.classList.add("off");
    lightBulb.classList.remove("on");
});
toggleButton.addEventListener("click", (event) => {
    if (lightBulb.classList.contains("on")) {
        lightBulb.classList.remove("on");
        lightBulb.classList.add("off");
    } else if (lightBulb.classList.contains("off")){
        lightBulb.classList.remove("off"); 
        lightBulb.classList.add("on");
    }
});
endButton.addEventListener("click", (event) => {
    lightBulbDiv.removeChild(lightBulb);
    onButton.setAttribute("disabled", "true");
    offButton.setAttribute("disabled", "true");
    toggleButton.setAttribute("disabled", "true");
    endButton.setAttribute("disabled", "true");

});