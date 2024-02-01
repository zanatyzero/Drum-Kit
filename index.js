var Zatoon =document.querySelectorAll(".drum").length;
for(var i =0 ; i<Zatoon ;i++){
document.querySelectorAll(".drum")[i].addEventListener("click" ,function handleclick(){
console.log(this.style.color=("white"))
});


}
document.addEventListener("keypress",function(event){
    console.log(event.key);
    switch (event.key) {
        case "w" :
            var tom1 =new Audio("sounds/tom-1.mp3");
            tom1.play();
            active("w");
            break;
        case("a"):
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            active("a");
            break;
        case("s"):
            var tom3 = new Audio("sounds/tom-3.mp3") 
            tom3.play();
            active("s");
            break;
        case("d"):
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            active("d");
            break;
        case("j"):
            var crash =new Audio("sounds/crash.mp3")
            crash.play();
            active("j");
            break;
        case("k"):
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            active("k");
            break;
        case("i"):
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            active("l");
            break;


    }
})
function active (key) {
var activeButton = document.querySelector("."+key) ;
document.querySelector("."+key).classList.add("pressed")  ;
setTimeout(function () {
    document.querySelector("."+key).classList.remove("pressed")      
},100)
}


/* var audio = new Audio('sounds/tom-1.mp3');
audio.play(); */





