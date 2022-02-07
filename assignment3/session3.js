//1.Define a variable count Print your name using while loop the no of times the value assigned to the variable count
  var count = 4;
  var i=0;
  while(i<count) {
      console.log('aswanth');
      i+=1;
  }


//2.Define a variable limit Print your name using for loop the no of times the value assigned to the variable limit
var limit = 4;
for(var i=0; i<limit; i++){
    console.log('aswanth');
}


//3.Using a while loop print the numbers in descending order from the given starting to ending limit. Start - 20 End - 25
  var i=25;
  while(i>=20){
      console.log(i);
      i-=1;
  }


// 4.Given a starting number and a decrement value, print all numbers from the starting number till zero deducting the decrement value each time. Starting - 13, Decrement - 4
// Output : 
// 13
// 9
// 5
// 1
  var i=13;
  while(i>0){
    console.log(i);
    i-=4;
  }

   

// 5.Print the average of all the numbers from 1 to given limit
// Sample Limit - 5, 
// Output - 3 (1+2+3+4+5 = 15/5 = 3)
 var sum = 0;
 var avg ;
 var limit=10;
 for(var i=1; i<=limit;i++){
     sum= sum+i;
 }
avg=sum/limit;
console.log(`average of numbers is ${avg}`);



//6. Find out the average of the first 100 n natural numbers using for loop.
var sum = 0;
var avg ;
var n=100;
for(var i=1; i<=n;i++){
    sum= sum+i;
}
avg=sum/n;
console.log(`average of the first ${n} natural numbers is ${avg}`);



//7.Print all the multiples of 3 till 100 using for loop
  for(var i=1; i<100; i++){
      if(i%3==0){
          console.log(i);
      }
  }



//8.Given a string print all the consonants which are not a,e,i,o,u using for loop.
//Hint: use && operator and !== ‘a’ like this inside a conditional statement.
  var str ='edstem';
  for(var i=0;i<str.length;i++) {
      if(str[i]!='a' && str[i]!='e'&& str[i]!='i'&& str[i]!='o'&& str[i]!='u'){
           console.log(str[i]);
      }
  }




//9.Given a string find out the length of that string
  var word= 'aswanth';
  console.log(word.length);



//10.Given a string, print the first character and last character of that string.
var str='hello';
console.log(`first character: ${str[0]}  `);
console.log(`last character: ${str[str.length-1]}  `);



//11.Given a string print the odd indexes of that string using for loop
//Example: ‘edstem’ => print d, t, m
var str ='abcdef';
   for(var i=0;i<str.length;i++) {
      if(i%2!=0){
           console.log(str[i]);
      }
  }




//12.Find out the sum of the first 10 natural numbers using for loop
  var sum = 0;
  
  for(var i=1; i<=10;i++){
      sum= sum+i;
  }
  
  console.log(`sum of the first 10 natural numbers : ${sum}`);
