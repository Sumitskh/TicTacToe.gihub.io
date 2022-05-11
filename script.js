console.log("welcome to tic tac toe");
let musicAud = new Audio("sounds/384468__frankum__vintage-elecro-pop-loop.mp3")
let turnAud = new Audio("sounds/270338__littlerobotsoundfactory__open-01.wav")
// let gameoverAud = new Audio("")
let turn = "X"
let gameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

// Function to check for a win
const checkwin = () => {
    let boxtext = document.getElementsByClassName("boxText")
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
    wins.forEach(e =>{
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            // console.log("problem");
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Wons";
            gameover = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '200px';
        }
    })
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
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})
// Add onclick listner to reset button
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxText');
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
        turn = "X";
        gameover = false;
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px';
    })
})