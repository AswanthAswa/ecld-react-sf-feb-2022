
//1.Print your name, age, Marital Status by storing them in different variables
let name ='Aswanth';
let age = 25;
let maritalStatus ='Single';
console.log(name);
console.log(age);
console.log(maritalStatus);

// 2.Define 3 variables to store your gender, height (in inches ), non-veg (food preference)
// Print all the three variable types (one per line in the given order)
 let gender = 'Male';
 let height = 59.5;
 let foodPreference ='non-veg';
 console.log(typeof gender);
 console.log(typeof height);
 console.log(typeof foodPreference);

//3.Given the year of birth of a person, calculate his/her age (You can store the current year in a variable)
 let yobOfPerson =1997;
 let currentYear = 2022;
 ageOfPerson = currentYear-yobOfPerson;
 console.log(ageOfPerson);

//4.Given the 3 subjects marks of a particular student calculate the total marks obtained
   let maths= 93;
   let phy=85;
   let che=95;
   let total= maths+phy+che;
   console.log(`Total Marks: ${total}`);

//5.Given the sides of a rectangle print the perimeter and area
let length= 8;
let breadth=6;
let perimeter= 2*(length + breadth);
let area = length * breadth;
console.log(`Area of rectangle: ${area} and perimeter: ${perimeter}`);

// 6.Given a number of total months find the number of months remaining after converting the total months to years
//Sample Total Months - 26 Remaining Months - 2
 let totalMonths = 29;
 let remainingMonths = totalMonths % 12;
 console.log(` remaining months: ${remainingMonths}`)

 //7.Given the Principal Amount, Interest Percentage and Time calculate the simple interest amount
  let p = 12000;
  let q = 6;
  let r = 2;
  let interest = (p*q*r)/100;
  console.log(` interest: ${interest}`);

//8.Given the marks of 6 students in a class calculate their average marks
 let m1= 10;
 let m2= 11 ;
 let m3= 12;
 let m4= 13;
 let m5= 14;
 let m6= 15;
 let average =(m1+m2+m3+m4+m5+m6)/6;
 console.log(`Average mark: ${average}`);

//9.Given 3 product prices and their quantity calculate the total amount of items in the cart
 let p1 = 20;
 let q1 =3;
 let p2= 30;
 let q2= 5;
 let p3= 50;
 let q3= 2;
 let totalAmount = p1*q1 + p2*q2 + p3*q3 ;
 console.log(`Total amount: ${totalAmount}`);

 //10.Given the item prices and quantity along with tax, discount and tip calculator the total bill amount
 let priceOfProduct1= 60;
 let quantityOfProduct1= 4;
 let discountOfProduct1= 10;
 let taxOfProduct1=6;

 let priceOfProduct2= 80;
 let quantityOfProduct2= 2;
 let discountOfProduct2= 12;
 let taxOfProduct2=12;

 let tipPercentage= 5;

 let totalPriceOfProduct1= priceOfProduct1*quantityOfProduct1*((100-discountOfProduct1)/100)*((100+taxOfProduct1)/100);
 let totalPriceOfProduct2= priceOfProduct2*quantityOfProduct2*((100-discountOfProduct2)/100)*((100+taxOfProduct2)/100);

 let grossTotal= totalPriceOfProduct1 +totalPriceOfProduct2;
 let netTotal= grossTotal *((100-tipPercentage)/100);

 console.log(`Gross total: ${grossTotal}`);
 console.log(`Net total: ${netTotal}`);
