console.log('Welcome to Tic Tac Toe')
let music = new Audio("Unforgettable.mp3")
let nigga = new Audio("nigga.mp3")
let youwin = new Audio("youwin.mp3")
let ting = new Audio("ting.mp3")
let turnn = "X"
let gameover = false



//Function To Change the turn
const changeTurn = () =>
{
    return turnn === "X" ? "0":"X"
}

// Function to check for a win
const checkWin = () =>
{
    let boxtexts = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3 ,4 ,5, 5, 15, 0],
        [6 ,7 ,8, 5, 25, 0],
        [0 ,3 ,6, -5, 15, 90],
        [1 ,4 ,7, 5, 15, 90],
        [2 ,5 ,8, 15, 15, 90],
        [0 ,4 ,8, 5, 15, 46],
        [2 ,4 ,6, 5, 15, 314],
    ]
    wins.forEach(e => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== ''))
        {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
            gameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            document.querySelector('.line').style.width='20vw' 
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            setTimeout(function(){
                youwin.play()
            },2000)
        }
        
    })
}

//Logic
function playAudio(){
    music.play();
}
function pauseAudio(){
    music.pause();
}
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '')
        {
            boxtext.innerText = turnn
            turnn = changeTurn()
            if(turnn=='0'){
                nigga.play()
            }
            else{
                ting.play()
            }
            checkWin();
            if(!gameover){   //If gameover is false this is executed
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turnn;
            }
        }
    })
})

reset.addEventListener('click',() => {
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turnn = "X"
    gameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turnn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"  
    document.querySelector('.line').style.width='0vw' 
})