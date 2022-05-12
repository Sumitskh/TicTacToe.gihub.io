console.log("welcome to tic tac toe");
let musicAud = new Audio("sounds/384468__frankum__vintage-elecro-pop-loop.mp3");
let turnAud = new Audio("sounds/270338__littlerobotsoundfactory__open-01.wav");
let gameoverAud = new Audio("sounds/270330__littlerobotsoundfactory__jingle-achievement-01.wav");
let turn = "X"
let gameover = false;
let winScore;
musicAud.loop = true;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

// Function to check for a win
const checkwin = () => {
    let boxtext = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            // console.log("problem");
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Wons";
            winScore = boxtext[e[0]].innerText;
            gameover = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '150px';
            // document.querySelector('.imgBox2').getElementsByTagName('img')[0].style.width = '100px';
            // document.querySelector('.imgBox3').getElementsByTagName('img')[0].style.width = '100px';
        }
    })
}
// Function to check Draw
const checkDraw = () => {
    let boxtext = document.getElementsByClassName("boxText");
    let draw = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8]
    ]
    draw.forEach(e => {
        if ((!gameover) && (boxtext[e[0]].innerText !== "") && (boxtext[e[1]].innerText !== "") && (boxtext[e[2]].innerText !== "") && (boxtext[e[3]].innerText !== "") && (boxtext[e[4]].innerText !== "") && (boxtext[e[5]].innerText !== "") && (boxtext[e[6]].innerText !== "") && (boxtext[e[7]].innerText !== "") && (boxtext[e[8]].innerText !== "")) {
            // console.log("draw match");
            document.querySelector('.info').innerText = "Game Draw";
            gameover = true;
        }
    })
}
// ScoreBoard
const updateScores = ()=>{
    let xScore = parseInt(document.getElementById("scoreX").innerText);
    let oScore = parseInt(document.getElementById("scoreO").innerText);
    let winner = document.querySelector('.info').innerText;
    // console.log(winner);
    if (winner === "X Wons") {
        xScore++;
        document.getElementById("scoreX").innerText = xScore;
    } else if(winner === "O Wons"){
        oScore++;
        document.getElementById("scoreO").innerText = oScore;
    }
    if (xScore > oScore) {
        console.log("ok");
        document.querySelector('.imgBox2').getElementsByTagName('img')[0].style.width = '100px';
        document.querySelector('.imgBox3').getElementsByTagName('img')[1].style.width = '100px';
    } else if(oScore > xScore){
        document.querySelector('.imgBox2').getElementsByTagName('img')[1].style.width = '100px';
        document.querySelector('.imgBox3').getElementsByTagName('img')[0].style.width = '100px';
    }
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            musicAud.play();
            turnAud.play();
            checkwin();
            checkDraw();
            updateScores();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            // Game over events
            if (gameover) {
                setTimeout(function () { document.getElementById("reset").click() }, 2000);
                gameoverAud.play().loop = true;
            }
        }
    })
})
// Add onclick listner to reset button
reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxText');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
        turn = "X";
        gameover = false;
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px';
        document.querySelector('.imgBox2').getElementsByTagName('img')[0].style.width = '0px';
        document.querySelector('.imgBox2').getElementsByTagName('img')[1].style.width = '0px';
        document.querySelector('.imgBox3').getElementsByTagName('img')[0].style.width = '0px';
        document.querySelector('.imgBox3').getElementsByTagName('img')[1].style.width = '0px';
    })
})