const leftscr=document.querySelector("#left");
const rightscr=document.querySelector("#right");
const startbtn=document.querySelector("#start");
const stopbtn=document.querySelector("#stop");

startbtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handledown);
    document.addEventListener("keyup",handleup);
    startbtn.disabled=true;
    stopbtn.disabled=false;
})

stopbtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handledown);
    document.removeEventListener("keyup",handleup);
    leftscr.textContent="";
    rightscr.textContent="";
    startbtn.disabled=false;
    stopbtn.disabled=true;
})

function handledown(e){
    leftscr.textContent=`key ${e.key} pressed down`;
    rightscr.textContent="Key pressed down";
}

function handleup(e){
    leftscr.textContent=`key ${e.key} pressed up`;
    rightscr.textContent="Key pressed up";
}
