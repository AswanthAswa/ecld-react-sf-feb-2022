// 1.Write a function named addNumbers which takes two numbers as input and return their sum
   function addNumbers(num1,num2) {
       var sum=num1+num2;
       return sum;
   }
   console.log(addNumbers(10,5));


// 2.Write a function to find the absolute difference of two numbers
// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14
  function absDiff(a,b){
      return Math.abs(a - b);
  }
  console.log(absDiff(4,18));




// 3.Write a function isOdd which returns a boolean value based the number is odd or not
  function isOdd(num){
      return num%2!==0;
  }
  console.log(isOdd(111));


// 4.Write a function function which prints the odd numbers from 0 to a given limit(included)
 function oddNums(limit){
     for (var i=1; i<=limit; i++){
         if(i%2!==0){
            console.log(i);
         }
     }
 }

 oddNums(11);


// 5.Write a function to calculate the average of an array. If there are no items in the array it should return 0

function avgOfArray(arr) {
var sum=0;

for(var i=0;i<arr.length;i++){
  sum= sum+ arr[i];
}
var avg= sum/arr.length;
if(arr.length>0){
    return avg;
}else{
    return 0;
}

}
console.log(avgOfArray([95,86,66,94,58]));


// 6.Write a function to convert a character to lower case
  function convertToLower(char){
      console.log(char.toLowerCase());
  }
  convertToLower('A');
  