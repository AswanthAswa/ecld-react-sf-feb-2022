
var but1= document.getElementById("btn1");
var but2= document.getElementById("btn2");
var hr=0,sec=0,min=0;
var dispHr=0,dispMin=0,dispSec=0;
var timeoutId=null;
var btn="stop";

function timer(){
    sec++;
    if(sec/60==1){
      min++;
      sec=0;
    if(min/60==1){
      hr++;
      min=0;
    }}
      if(sec<10){
         dispSec="0"+sec.toString(); 
      }else{
         dispSec=sec.toString(); 
        }
     if(min<10){
        dispMin="0"+min.toString(); 
      }
     else{
        dispMin=min.toString(); 
      }
     if(hr<10){ 
       dispHr="0"+hr.toString(); 
      }
     else{ dispHr=hr.toString();
     }

    document.getElementById("timer").innerHTML=dispHr+":"+dispMin+":"+dispSec;
  }


  but1.addEventListener("click",function(){
      if(btn==="stop"){
          timeoutId=window.setInterval(timer,1000);
          document.getElementById("btn1").innerHTML="STOP"; 
          btn="start";
      }else{
      window.clearInterval(timeoutId);
      document.getElementById("btn1").innerHTML="START";
      btn="stop";
  }});


  but2.addEventListener("click",function(){
      window.clearInterval(timeoutId);
      sec=0,min=0,hr=0;
      document.getElementById("timer").innerHTML="00:00:00";
      document.getElementById("btn1").innerHTML="START";
  });