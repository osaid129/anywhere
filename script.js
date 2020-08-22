
var para = document.getElementsByTagName("p")[0]

setTimeout(function () {
    para.innerText = para+1
},3000)

var btata = document.getElementById("btat");

setTimeout(function (){
    btata.innerText = "gharabat"
},3000)

let slides = document.querySelectorAll(".part-1");
let counter =0;
setInterval(function(){
    if(counter !== slides.length-1){
        slides[counter].style.display="none";
        slides[counter+1].style.display="block";
        counter++;
    } else{
        slides[counter].style.display = "none";
        slides[0].style.display="block";
        counter=0;
    }
},1000)

let card = document.querySelectorAll("cards");
for(let i=0;i<card.length;i++){
    card[i].onmouseover = function(){
        for(let j=0;j<card.length;j++) card[j].classlist.remove("active");
        card[i].classlist.add("remove");
    }
}