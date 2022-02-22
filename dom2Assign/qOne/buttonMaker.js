function apply(){
    let bgColor =document.getElementById('background_color').value;
    let fColor =document.getElementById('font_color').value;
    let fSize =document.getElementById('font_size').value;
    let fWeight =document.getElementById('font_weight').value;
    let padd =document.getElementById('paddi').value;
    let bRadius =document.getElementById('border_radius').value;
    
    var button = document.createElement("button");
    button.innerHTML = "Custom Button";
    var div = document.querySelector("div");
    div.insertBefore(button, div.lastChild);
   

   button.style.backgroundColor= bgColor;
   button.style.color= fColor;
   button.style.fontSize= fSize;
   button.style.fontWeight= fWeight;
   button.style.padding= padd;
   button.style.borderRadius= bRadius;
   
   

}