const buttonRed = document.getElementById("btn-red");
const buttonPurple = document.getElementById("btn-purple");
const buttonYellow = document.getElementById("btn-yellow");


buttonRed.addEventListener("click",()=>{
    document.body.style.background = "red";
    localStorage.setItem("bg","red");
});

buttonPurple.addEventListener("click",()=> {
    document.body.style.background = "purple";
    localStorage.setItem("bg","purple");
});

buttonYellow.addEventListener("click",()=> {
    document.body.style.background = "yellow";
    localStorage.setItem("bg","yellow");
});

function storageBackground(){
    if(localStorage.getItem("bg")!=""){
        document.body.style.background = localStorage.getItem("bg");
    }else {
        return true;
    }
}

storageBackground();

