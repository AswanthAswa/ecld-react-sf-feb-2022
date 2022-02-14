// 1.Given an array of numbers print the square of those numbers
// Sample Input:  [2, 3, 5, 7, 9]
// Sample Output: 4 9 25 49 81
// Bonus: use square() function and forEach HOF

  function squareOfNums(arr){
       arr.forEach(function(num){
          console.log(num*num);
      })
  }
  squareOfNums([2,3,5,7,9,10]);




// 2.Given an array of numbers generate an array containing the double value of the numbers
// Sample Input [1, 2]
// Sample Output [2, 4]

      var input= [1,2,3,4,5];
      var double= input.map(function(el){
        return el*2;
  })
console.log(double);




// 3.Given an array of numbers extract the numbers divisible by 3
// Sample Input - [1,2,3]
// Sample Output - [3]

  var arr= [1,2,3,4,5,6];
  var res= arr.filter(function(n){
      return n%3==0;
  }) 
  console.log(res);




// 4.Given an array of numbers print the product of all numbers
// Sample Input - [2,3,4]
// Sample Output - 24

   var arr=[2,3,4];

   var product= arr.reduce(function(i,num){
    return i*num;
  },1)

  console.log(product);




// 5.Given an array of strings print the length of each string

  var arrOfStr= ['edstem', 'react','html','javascript','css'];
  arrOfStr.forEach(function(str){
      console.log(str.length);
  })




// 6.Given an array of string generate an array with their first characters
// Sample Input - ["Edstem", "Tech"]
// Sample Output - ["E", "T"]

  var arrStr =["Edstem", "Tech"];

  var out = arrStr.map(function(str){
          return str[0];
  })

  console.log(out);
 



// 7.Given an array of string generate an array whose first or last character is a
// Sample Input - ["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]

 var input = ["assignment", "problem", "media", "upload"];

 var output = input.filter(function(str){
               return str.startsWith("a")||str.endsWith("a");
      })
 
console.log(output);


 

// 8.Given an array of strings print the snake case of the strings [Assume Small case strings]
// Sample Input - ["edstem", "tech"]
// Sample Output  edstem_tech

  var arr= ["edstem", "tech", "aswa"];

  var result= arr.reduce(function() { 
      return arr.join("_"); 

  })
  console.log(result);
 



// 9.Create a user object with name, age, gender, skills as properties and add the below methods to it
// i.addSkill method => user.addSkill(‘react’) => react should be added to user.skills property which is an array of strings
// ii. getSkills method => user.getSkills() => It should return all the skills of the user
 
// 	Note: user this keyword

 var user ={
     name: 'John',
     age: 25,
     gender: 'M',
     skills: ['html','css'], 
     addSkill: function (skill){
         return this.skills.push(skill);
     },
     getSkills: function () {
         return this.skills;
     }
 }


 user.addSkill('react');

 console.log(user.skills);
 
 console.log(user.getSkills());
 

