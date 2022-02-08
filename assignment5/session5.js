// 1.Given an array of string join them with a comma ,
// Sample Input - ["HTML", "CSS", "JAVA", "JS"]
// Sample Output - HTML,CSS,JAVA,JS
   var input= ["HTML", "CSS", "JAVA", "JS"];
   var str= input.join(',');
   console.log(str);

//OR input.toString()


 
// 2.Given an array or string print the total no of characters
// Sample Input - ["HTML", "CSS", "JAVA", "JS", "ANDROID"]
// Sample Output - 20
    var arr= ["HTML", "CSS", "JAVA", "JS", "ANDROID"];
    var count=0;
    for (var i=0; i<arr.length; i++){
        for (var j=0; j<arr[i].length; j++){
        count+=1;
        }
}
    console.log(`Total number of characters: ${count}`);

 


// 3.Given an array of game, scores print the highest and lowest score
// Sample Input - [100, 20, 31, 150, 39, 72]
// Sample Output - 150 
// 		   20
  var scores= [100, 20, 31, 150, 39, 72];
  var arr= scores;
  var temp= 0;
  for (var i=0; i<arr.length; i++){
             for (var j=i+1; j<arr.length; j++){
            if (arr[j]<arr[i]){
                temp=arr[j];
                arr[j]=arr[i];
                arr[i]=temp;
                 }
             }}
             console.log(`Highest score: ${arr[arr.length-1]}`);   
             console.log(`Lowest score: ${arr[0]}`);

  

//OR Math.min(...scores); and Math.max(...scores);




// 4.Given a matrix, print the rows and columns
// Sample Input: [[1, 2, 3], [4, 5. 6], [7, 8, 9]]
// Sample Output: 3, 3
 var matrix= [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
 var row= matrix.length;
 var col= 0;
 if(row >0){
     var col= matrix[0].length;
 }
 console.log(`rows: ${row}`);
 console.log(`columns: ${col}`);



 
// 5.Given a matrix print the first diagonal
// Sample Input:  [[1, 2, 3], [4, 5. 6], [7, 8, 9]]
// Sample Output: 1, 5, 9
var matrix= [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (var i=0; i<matrix.length; i++){
    for (var j=0; j<matrix[i].length; j++){
        if(i==j){
            console.log(matrix[i][j]);
        }

    }
}



 
// 6.Given an array of string generate an array whose first or last character is a
// Sample Input - ["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]
 var input =["assignment", "problem", "media", "upload"];
 var output=[];
 for(var i=0; i<input.length; i++){
     if(input[i].startsWith('a') || input[i].endsWith('a') ){
         output.push(input[i]);
     }
 }
 console.log(output);
 
 

 
// 7.Given an array of strings print the snake case of the strings [Assume Small case strings]
// Sample Input - ["edstem", "tech"]
// Sample Output - edstem_tech
  var arr = ["edstem", "tech"];
  var str= arr.join("_");
  console.log(str);



 
// 8.Given an 2d Array print the difference of first and second diagonals sum 
// Sample Input - [
// 		[1, 2, 3],
// 		[4, 5, 6],
// 		[7,  8, 9]
// ]
// 	Sample Output - First Diagonal -> 1+5+9 ->  15
// 			Second Diagonal -> 3+5+7 -> 15
// 			Difference => 15-15 -> 0
var matrix= [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var sum1=0;
var sum2=0;
for (var i=0; i<matrix.length; i++){
    for (var j=0; j<matrix[i].length; j++){
        if(i==j){
            sum1=sum1+matrix[i][j];
        }
        if(i==matrix[i].length-j-1){
            sum2=sum2+matrix[i][j];
        }

    }
}

console.log(`difference of first and second diagonals sum: ${sum1-sum2}`)


 

// 9.Given an array of numbers print the product of all numbers
// Sample Input - [2,3,4]
// Sample Output - 24
  var arr = [2,3,4];
  var product =1;
  for(var i = 0; i < arr.length; i++){
    product= product*arr[i];

  }
  console.log(`product of all numbers: ${product}`);
 
 
 
 
// 10.Given an 2d array print the mid column
// Sample Input - [
// 		[1, 2, 3],
// 		[4, 5, 6],
// 		[7,  8, 9]
// ]
// 	Sample Output - 2, 5, 8
   var input= [
    		[1, 2, 3],
    		[4, 5, 6],
    		[7,  8, 9]
    ];


    console.log(`mid column: ${input[0][1]}, ${input[1][1]}, ${input[2][1]}`);
 
 
