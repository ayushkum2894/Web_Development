let choice = document.getElementById("choice")
let rock1 = document.getElementById("rock");
let result = document.getElementById("result");
let score1 = document.getElementById("score")
let comp_score = document.getElementById("comp_score")
let score = { value: 0 }
let cscore = { value: 0 }
function rock() {
    let ran = Math.ceil(Math.random() * 3);

    if (ran == 1) {

        choice.innerHTML = "computer choose rock"
        result.innerHTML = "Match Drawn"
        result.style.left = "15%"
    }
    if (ran == 2) {
        choice.innerHTML = "computer choose paper"
        result.innerHTML = "You lose"
        cscore.value = cscore.value + 1;
        comp_score.innerHTML = cscore.value;
        result.style.left = "25%"
    }
    if (ran == 3) {
        score.value = score.value + 1;
        console.log(score.value);
        choice.innerHTML = "computer choose scissor"
        result.innerHTML = "You won"
        score1.innerHTML = score.value;
        result.style.left = "25%"
    }
}
function paper() {
    let ran = Math.ceil(Math.random() * 3);
    if (ran == 1) {
        score.value = score.value + 1;
        choice.innerHTML = "computer choose rock"
        result.innerHTML = "You won"
        score1.innerHTML = score.value;
        result.style.left = "25%"
    }
    if (ran == 2) {
        choice.innerHTML = "computer choose paper"
        result.innerHTML = "Match Drawn"
        result.style.left = "15%"
    }
    if (ran == 3) {
        choice.innerHTML = "computer choose scissor"
        result.innerHTML = "You lose"
        cscore.value = cscore.value + 1;
        comp_score.innerHTML = cscore.value;
        result.style.left = "25%"
    }
}
function scissor() {
    let ran = Math.ceil(Math.random() * 3);
    if (ran == 1) {
        choice.innerHTML = "computer choose rock"
        result.innerHTML = "You lose"
        cscore.value = cscore.value + 1;
        comp_score.innerHTML = cscore.value;
        result.style.left = "25%"
    }
    if (ran == 2) {
        score.value = score.value + 1;
        choice.innerHTML = "computer choose paper"
        result.innerHTML = "You won"
        score1.innerHTML = score.value;
        result.style.left = "25%"
    }
    if (ran == 3) {
        choice.innerHTML = "computer choose Scissor"
        result.innerHTML = "Match Drawn"
        result.style.left = "15%"
    }
}
function reset() {
    score.value = 0;
    cscore.value = 0;
    comp_score.innerHTML = cscore.value;
    score1.innerHTML = score.value;
    choice.innerHTML = ""
    result.innerHTML = ""
}

