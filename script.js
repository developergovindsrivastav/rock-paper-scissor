var choices = document.querySelectorAll(".choices1");
var winpara = document.querySelector("#turn")
var display = document.getElementById("display-board");
var userscore = 0;
var comptscore = 0;
var userpar = document.querySelector("#userscore");
var computpara = document.querySelector("#compscore");
let lose = document.querySelector("#losing");
var sucess = document.querySelector("#sucess");
let draw = document.querySelector("#draw");
var body = document.querySelector("#main")
var btn = document.querySelector(".reset");
let chances = 20;
let lifeimg = 6;
let lifeshow = document.querySelector(".nmber");
let chancesremain = document.querySelector(".chancesremain");
let remainlife = document.querySelector(".remainlife");
 var resetbtn = document.querySelector(".newgame");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        var userput = choice.getAttribute("id")
        abc(userput);
        chances--;
        chancesremain.innerHTML = chances;
        showchances();
        chanceandlife();
        showwinner2(choice);
    });
});
function showwinner(userWin, userput, computchance) {
    if (userWin) {
        display.innerHTML = `youwin ${computchance} beats ${userput}`;
        sucess.play();
        userscore++
        userpar.innerHTML = userscore;
        display.style.backgroundColor = "green";
        lifeimg++;
        lifeshow.innerHTML = lifeimg;



    }
    else {
        display.innerHTML = `you lose ${userput} beats ${computchance}`

        lose.play();
        comptscore++
        computpara.innerHTML = comptscore
        display.style.backgroundColor = "red";
        lifeimg--;
        lifeshow.innerHTML = lifeimg;

    }
}



function abc(userput) {
    var computchance = compput();
    console.log(computchance, userput);
    if (computchance === userput) {
        draw.play();
        display.innerHTML = "game drawn!";
        display.style.backgroundColor = "black";

    }
    else {
        let userWin = true;
        if (userput === "rock") {
            //scissors, paper
            userWin = computchance === "paper" ? false : true;
        } else if (userput === "paper") {
            //rock, scissors
            userWin = computchance === "scissor" ? false : true;
        }
        else {
            //rock, paper
            userWin = computchance === "rock" ? false : true;
        }

        showwinner(userWin, computchance, userput);

    }


}
const compput = () => {
    let compchance = ["rock", "paper", "scissor"]
    let ranidx = Math.floor(Math.random() * 3)
    return compchance[ranidx]

}
function showchances() {
    if (lifeimg === 0 && chances > 0) {
        console.log("mar gaye")
        body.innerText = "you life 0 before chance"
        body.classList.add("style")
              btn.style.visibility = "visible"


    }


}
function chanceandlife() {
    if (lifeimg === 0) {
        body.innerText = "game over"
        body.classList.add("style")
        btn.style.visibility = "visible"





    }
}
function showwinner2() {
    if (chances === 0 && comptscore > userscore) {
        body.innerHTML = `you lost  <br> your score = ${userscore} <br> computer score = ${comptscore}`
        body.classList.add("ram")
        btn.style.visibility = "visible"


    }
    else if (chances === 0 && comptscore < userscore) {
        body.innerHTML = `you won  <br> your score = ${userscore} <br> computer score = ${comptscore}`
        body.classList.add("ram")
        body.classList.add("green")
              btn.style.visibility = "visible"



    }
    else if(chances ===0 && comptscore === userscore){
        body.innerHTML = `game draw  <br> your score = ${userscore} <br> computer score = ${comptscore}`
        body.classList.add("ram")
        body.classList.add("black")
        btn.style.visibility = "visible"

    }
}
btn.addEventListener("click", function(){
    window.location.reload();
})
resetbtn.addEventListener("click", function(){
    if(confirm("Are you sure you want to reset your game")=== true){
        window.location.reload();
        
    }else{
        return false
    }
});