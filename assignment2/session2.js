//1.If the given year is a leap year print "LEAP YEAR" and if it's not a leap year print "NOT LEAP YEAR"
 let year = 2100;
 if((year%400==0)||((year%100!=0)&&(year%4==0))){
     console.log(`${year} is leap year`);
 }else{
    console.log(`${year} is not leap year`);
}

//2. In India, a person can vote if he crosses 18years of age. Give a person year of birth print "YES" if he can vote otherwise print "NO"
let yobOfPerson =1997;
let currentYear =2022;
let ageOfPerson =currentYear-yobOfPerson;
if(ageOfPerson>=18){
    console.log("YES");
}else{
    console.log("NO");
}

//3.Give a single character (small or upper case) if it is a Vowel print "V" in the case of consonant print "C"
   let char= 'D';
   let ch=char.toLowerCase();
   if (ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
    console.log("V");
   }else{
    console.log("C");
   }


//4.Give a string of PIN Code (with all digits) print "VALID" or "INVALID" (a PIN code is only valid if it has 6 digits)
  let pinCode ='67350';
  if (pinCode.length==6){
    console.log("VALID");
  }else{
    console.log("INVALID"); 
  }


//5.Based on the state print the region it belongs to "EAST", "WEST", "NORTH", "SOUTH"

let state= 'Kerala';
if(state == 'Jammu & Kashmir'|| state == 'Himachal Pradesh' ||
state == 'Punjab' || state == 'Uttarakhand' || state == 'Haryana' ||
state == 'Delhi' || state == 'Rajasthan' || state == 'Uttar Pradesh'){

console.log("NORTH");

   }

else if(state == 'Bihar' || state == 'Jharkhand' || state == 'Odisha' ||
state == 'West Bengal'){

console.log("EAST");

        }

else if(state == 'Andhra Pradesh' || state == 'Karnataka' ||
state == 'Kerala' || state == 'Tamil Nadu' || state == 'Telangana'){

console.log("SOUTH");

        }

else{
console.log("WEST");
}


//6.Given a number print if it is either "EVEN" or "ODD" (Use ternary Operators)
  let n= 11;
  n%2==0 ?console.log("EVEN"):console.log("ODD");

// 7.Given two numbers a, b Print the below statements based on the condition
// "A > B"
// "A < B"
// "A = B" Note: Use Ternary Operators
   let a= 5;
   let b= 6;
   let result = a > b ? "A > B" : a < b ? "A < B" : "A = B";

   console.log(result);


//8.Given the shirt size code "S", "M", "L", "XL" print the corresponding names "Small", "Medium", "Large", "Extra Large", "None" (For not a valid code)
  
  let size ="XL"
  if (size=="S"){
      console.log("Small");
  }
  else if (size=="M"){
    console.log("Medium");
}
else if (size=="L"){
    console.log("Large");
}
else if (size=="XL"){
    console.log("Extra Large");
}
else {
    console.log("None");
}