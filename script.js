let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#resetBtn");
let newGame=document.querySelector("#new-btn");
let msgcontent=document.querySelector(".msg-content");
let msg=document.querySelector("#msg");

let playerO= true;
let count=0;

const patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    playerO=true;
    count=0;
    enableBox();
    msgcontent.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(playerO){
            box.innerHTML="O";
            playerO=false;
        }else{
            box.innerHTML="X";
            box.style.color='#F24333';
            playerO=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count==9&&!isWinner){
            gameDraw();
        }
    });
});

const checkWinner=()=>{
    for (let pattern of patterns) {
        let firstBox=boxes[pattern[0]].innerHTML;
        let secondBox=boxes[pattern[1]].innerHTML;
        let thirdBox=boxes[pattern[2]].innerHTML;

        if(firstBox!=""&& secondBox!=""&&thirdBox!=""){
            if(firstBox===secondBox&& secondBox===thirdBox){
                showWinner(firstBox);
            }
        }
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontent.classList.remove("hide");
    disableBox();
};

const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const gameDraw=()=>{
    msg.innerText="Draw!!";
    msgcontent.classList.remove("hide");
    disableBox();
};

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);