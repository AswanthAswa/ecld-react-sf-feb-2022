// 1.Given an array of strings count all the vowel characters
// Sample Input - [‘edstem’, ‘react’, ‘javascript’, ‘html’, ‘css’ ]
// Sample Output - 7
   var arr = ['edstem', 'react', 'javascript', 'html', 'css' ];
   var count =0;
   for(var i=0;i<arr.length;i++){
       for(var j=0;j<arr[i].length;j++){
           if(arr[i][j]=='a'||arr[i][j]=='e'||arr[i][j]=='i'||arr[i][j]=='o'||arr[i][j]=='u'){
            count +=1; 
           }
       }
   }
   console.log(`number of vowel characters present : ${count}`);
   

 
// 2.Given a string print "YES" if it is a palindrome "NO" if it is not one
// A palindrome is a word which reads the same backward as forward, such as madam, bob
// Strings Problem
  var str= 'malayalam';
  var pal= '';
  for (i=str.length-1; i>=0; i--){
      pal =pal+str[i];
      
      }

if (str==pal){
  console.log('YES') ;
}
else{
  console.log('NO') ;
}


  

// 3.Given an array of marks, find out the Average
// Sample Input: [95, 86, 66, 94, 58]
// Sample Output: 79.8
// Hint: use arr.length
  var arr =[95,86,66,94,58];
  var sum=0;
  
  for(var i=0;i<arr.length;i++){
    sum= sum+ arr[i];
  }
  var avg= sum/arr.length;
  console.log(`Average of marks : ${avg}`);


 
// 4.Given an array of strings, remove all the odd length strings from it
// Sample Input: [‘edstem’, ‘react’, ‘html’, ‘foodie’, ‘coder’’  ]
// Sample Output: [ ‘edstem’, ‘html’, ‘foodie’ ]
  var input = ['edstem', 'react', 'html', 'foodie', 'coder' ];
  var output =[];
  for(var i=0;i<input.length;i++){
    if(i%2==0){
    output.push(input[i]);
    }
  }
  console.log(output);



 
// 5.Given an array of numbers, change the multiples of 3 to ‘multiple’
// Sample Input: [5, 9, 8, 12, 22, 18]
// Sample Output: [5, ‘multiple’, 8, ‘multiple’, 22, ‘multiple’ ]
  var arr =[5, 9, 8, 12, 22, 18];
  for(var i=0;i<arr.length;i++){
      if(arr[i]%3==0){
      arr[i]='multiple';
       }}
       console.log(arr);



// 6.Given an empty array fill that array with first 10 natural numbers
// Sample Input: []
// Sample Output: [1,2,3,4,5,6,7,8,9,10]
 var input= [];
 for(var i=1;i<=10;i++){
   input.push(i);
    }
    console.log(input);



/// 7.Given a string split it into an array of words
// Sample Input - "Edstem Technologies located at kerala"
// Sample Output - ["Edstem", "Technologies", ‘located’, ‘at’, ‘kerala’]
// Note: Don’t use str.split(‘ ‘) method
// Hint: you can use for loop and push method
   var str = "Edstem Technologies located at kerala";
   var output =[];
   var st ='';
   for(var i=0;i<str.length;i++){
     if(str[i]==' '){
      output.push(st);
      st = '';
     }else{
       st = st+ str[i];
     } 
     
   }output.push(st);
   
   console.log(output);
  
   


// 8.Given a string print all the Characters in the odd position (Start counting with 0)
// Sample Input - ‘Edstem’
// Sample Output: dtm
    var str= 'Edstem';
    var op=''
    for(var i=0;i<str.length;i++){
      if(i%2!=0){
             op=op+str[i]
      
           }
           
         }
         console.log(op);



 
// 9.Given a sentence print the count of words (Separated by a space character)
// Sample Input- "Coding is Easy"
// Sample Output:- 3
  var str= 'Coding is Easy';
    var count= 1;
    for(var i=0;i<str.length;i++){
      if(str[i]==' '){
             count= count+1;
      
           }
           
         }
         console.log(`Number of words in "${str}" : ${count}`);



 
// 10.Given an Array of names find out if edstem is there or not, if the given string is there print true or else print false
// Sample Input:  arr = [‘react’, ‘html’, ‘edstm’], 
//              str = ‘edstem’
// Sample Output: false => edstm spelling mistake :) 
var arr =['react','html','edstm'];
var str ='edstem';
var count =0;
for(var i=0;i<arr.length;i++){
  if(arr[i]==str){
    count +=1;
     }} 

  if (count>0){
    console.log('True');
  }
     else{
      console.log('False');
     }
     


