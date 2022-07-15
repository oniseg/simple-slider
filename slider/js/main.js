var imgs =Array.from(document.getElementsByClassName("img-fluid")) ;
var lightBoxCont=document.getElementById("lightBoxContainer");

var lightBoxItem = document.getElementById("lightBoxItem")
var closeIcon =document.querySelector("#close")
var nextIcon =document.getElementById("next");
var prevIcon = document.getElementById("prev");
var currentIndex = 0 ;

for(i=0;i<imgs.length;i++){
    imgs[i].addEventListener("click",function(eventInfo){
        
        var imgSrc = eventInfo.target.src;
        lightBoxItem.style.backgroundImage=`url(${imgSrc})`
        lightBoxCont.style.display="flex"
    })
}

closeIcon.addEventListener("click", closeSlider)
function closeSlider(){
    lightBoxCont.style.display="none"
}

nextIcon.addEventListener("click", getNextSlider)
function getNextSlider(){
    currentIndex++;
    if(currentIndex==imgs.length){
        currentIndex=0
    }
    var imgSrc=imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`
}

prevIcon.addEventListener("click", getPrevSlider)

    function getPrevSlider(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=imgs.length-1
    }
    var imgSrc = imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`
}

document.addEventListener("keydown",function(e){
    if(e.keyCode==27){
        closeSlider();
    }else if(e.keyCode==39){
        getNextSlider();
    }else if(e.keyCode==37){
        getPrevSlider();
    }
})
