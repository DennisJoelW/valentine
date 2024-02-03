
const gambar = document.getElementById("gambar");

const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const no1 = document.querySelector(".no1");
const nono = document.getElementById("nono");

var w = 150
var h = 38

function jikaNo(){

    var n = Math.random();
    n = n * 70;
    n = Math.floor(n) + 1;

    var n2 = Math.random();
    n2 = n2 * 70;
    n2 = Math.floor(n2) + 1;

    no1.style.top = `${n}%`;
    no1.style.left = `${n2}%`;

    w=w+10;
    h=h+5;

    if (w<200) {
        yes.style.width = `${w}px`
        yes.style.height = `${h}px`
    }   


}


var clickTimes = 0;

function jikaYes(){
    gambar.src = "images/melodyhappy.gif"
}

no.addEventListener("click", function(){
    jikaNo();

    clickTimes+=1;

    if(clickTimes === 3){
        no.innerHTML = "Actually No";
    }
    else if(clickTimes > 3){
        gambar.src = "images/sadcat.gif"
        no.innerHTML = "PARAHHH";
        document.querySelector(".text").textContent = "PARAHHH"
    }
    

})

yes.addEventListener("click", function(){
    jikaYes();

    document.querySelector(".text").textContent = "YEEEYYY"
    no.innerHTML = "No";
})