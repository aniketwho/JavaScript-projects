const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);



const form = document.querySelector("#form");
const score = document.querySelector("#score");
const question = document.querySelector("#question");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");


// question.innerText = "What is " + num1 + " multiply by " + num2 + "?";
question.innerText = `What is ${num1}  multiply by ${num2}?`;
let scoreRes = JSON.parse(localStorage.getItem("score"));
const correctAns = num1 * num2;

if (scoreRes < 0) {
    scoreRes = 0;
}

score.innerText = `score: ${scoreRes}`;

form.addEventListener("submit", () => {
    const userAns = +input.value;
    if (userAns == correctAns) {
        scoreRes++
        update()

    } else {
        scoreRes--
        update()
        

    }
})

function update() {
    localStorage.setItem("score", JSON.stringify(scoreRes))
}





