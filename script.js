function makeBubble(){
let clutter = "";
for(let i=1; i<=126; i++){
    let rn = Math.floor(Math.random()*10);
    clutter += `<div id="number">${rn}</div>`;
    document.querySelector("#pbtm").innerHTML = clutter;
}
}

makeBubble();


let timer = 10;
    let timeint = setInterval(()=>{
        if(timer>0){
            timer--;
            document.querySelector("#timeval").textContent = timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1><p>Your Score is ${score}</p>`
            document.querySelector("#pbtm").style.display = "block"
            document.querySelector("#pbtm").style.textAlign = "center"
             document.querySelector("#pbtm").style.marginTop = "15%"
        }
        
    },1000)
    let score = 0;
    function increasescore(){
        score +=10;
        document.querySelector("#scoreval").textContent = score;
    }

let hitrn;
function hitnumber(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

hitnumber();

function checknum(){
    document.querySelector("#pbtm").addEventListener("click",(dets)=>{
        let clicked = Number(dets.target.textContent);
        if(clicked === hitrn){
        increasescore();
        hitnumber();
        makeBubble();
        }
        })
}

checknum();

    
   
    





