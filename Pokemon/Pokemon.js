const formEl = document.querySelector("#form")
const inputEl = document.querySelector("#input");
const btnEl = document.querySelector("#btn");
const imageEl = document.querySelector("#image");
const nameEl = document.querySelector("#name");
const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#weight");




async function fetchpoki(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    let pokival = inputEl.value;
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokival.toLowerCase()}`);
        if (!response.ok) {
            //Text changes Begin
            inputEl.value = "";
            inputEl.placeholder = "Not a Pokimon Dude!...";
            inputEl.style.backgroundColor = "white";
            // inputEl.disabled = true;
            inputEl.style.border = "0px";
            //Text changes Begin
            imageEl.src = "NAPoki.jpg";     //Image changess
            imageEl.style.display = "block";
            imageEl.style.margin = "auto";
            //Iformation Text Changes Begin
            nameEl.innerText = "Better Luck Next Time...";
            heightEl.innerText = "";
            weightEl.innerText = "";
            //Iformation Text Changes Ends
        } else {
            const data = await response.json();
            console.log(data.type)
            const pokiimg = data.sprites.front_default;
            
            const pokiname = data.name;
            // const pokitype = data.types.type.name;
            const pokiheight = data.height;
            const pokiweight = data.weight;
            imageEl.src = pokiimg;     //Image changess
            imageEl.style.display = "block";
            imageEl.style.margin = "auto";
            nameEl.innerText = `Name: ${pokiname}`;
            heightEl.innerText = `Height: ${pokiheight}`;
            weightEl.innerText = `Weight: ${pokiweight}`;

        }
    } catch (error) {
        console.error(error);
    }
}

formEl.addEventListener("submit", fetchpoki);








