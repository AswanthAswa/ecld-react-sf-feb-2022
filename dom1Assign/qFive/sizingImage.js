function decrease() {
    let decrease = document.getElementById('image');
    let currentWidth = decrease.clientWidth;
    console.log(currentWidth);
    if(currentWidth === 50){
        alert('zoomOut limit reached')
    }else{
        decrease.style.width = (currentWidth - 5) +"px";
    }
}
function increase() {
    let increase = document.getElementById('image')
    let currentWidth = increase.clientWidth;
    console.log(currentWidth);
    if(currentWidth === 500){
        alert('zoomIn limit reached')
    }else{
        increase.style.width = (currentWidth + 5) + "px";
    }
}