
function firstImg(){
    const firstImage = document.querySelector(".images img:first-child");
    firstImage.classList.add("fader");
}

function slide(){
    const image = document.querySelector(".fader");

    if(image.nextElementSibling){
        image.nextElementSibling.classList.add("fader");
        image.classList.remove("fader");
    }
    else{
        image.classList.remove("fader");
        firstImg();
    }
}
    
firstImg();
const timer = setInterval(slide, 5000);



