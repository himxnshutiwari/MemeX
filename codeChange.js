const memeBtn=document.getElementById('memeBtn')

const bg=["#ff3381","#93f","#f56","eeff00","#003cff"];
const fg=["#111","#fff","111","111","#fff"]

function colorChange() {
    let limit=bg.length
    let index=Math.floor(Math.random()*limit);
    memeBtn.style.background=bg[index]
    memeBtn.style.color=fg[index]
}


