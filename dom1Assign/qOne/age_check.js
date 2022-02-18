function ageCheck(){
    var age = document.getElementById("input").value;
    if(age> 18){
       document.getElementById("result").innerHTML= 'You can drive in India!';
    }
    else if(age<18){
        document.getElementById("result").innerHTML= "You can't drive in India";
    }
    else if(age==18){
        document.getElementById("result").innerHTML= "You are just old enough to drive in India!";
    }
}