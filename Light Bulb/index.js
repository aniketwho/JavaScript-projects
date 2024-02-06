 
const bulb = document.querySelector("#bulb");
const buttonOn = document.querySelector("#buttonOn");
const buttonOff = document.querySelector("#buttonOff");

const lights = [
    {
        color: 'Yellow'
    },
    {
        color: 'Black'
    }
];


buttonOn.onclick = Bulbon;
buttonOff.onclick = Bulboff;


function update(colour) {
    bulb.style.backgroundColor = colour.color
}


function Bulbon() {
    update(lights[0]);      
}

function Bulboff() {
    update(lights[1]);    
}

