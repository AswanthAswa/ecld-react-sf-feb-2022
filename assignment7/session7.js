// 1.Given an array with name, age and gender convert it to object and print keys and values by looping over it using for in loop
// Sample Input: [‘radhe’, 22, ‘M’]
// Sample Output: name - radhe
// 		  age - 22
// 		  gender - M
  var arr= ['radhe', 22, 'M'];
  var obj ={};
  obj.name = 'radhe';
  obj.age = 22;
  obj.gender = 'M';
  for (var key in obj){
      console.log(`${key} - ${obj[key]}`);
  }
  



// 2.Given a string , calculate the occurrence of each and every character and print the output.
// Sample Input: ‘edstem’
// Sample Output: e - 2
// 		 d - 1
// 		 s - 1
// 		 t - 1
// 		 m - 1
 var str = 'edstem';
 var obj={};
 var count = 1;
 for(var i=0; i<str.length; i++){
     if(!obj[str[i]]){
         obj[str[i]] = count;
     }else{
         obj[str[i]] = count+1;
     }

 }
 for (let key in obj){
     console.log(`${key} -  ${obj[key]}`);
 }




// 3.Given user's names and their phone numbers , query the given user and find the phone number .
 var user= [{name: 'John', phone:9743252318},{name: 'Smith',phone: 8940299859},{name:'arun',phone:9725252318}];
 
 for(var i=0;i<user.length;i++) {

           if(user[i].name==='Smith')

           {
              console.log(user[i].phone);
           }

        }



        
// 4.Given an array , find the unique elements .
// Sample Input: [10, 20, 30, 10, 40, -2]
// Sample Output: 20, 40, -2
   var arr= [10, 20, 30, 10, 40, -2, 30];
   var uniqueArr=[];

   for(var i=0; i<arr.length; i++){
     if(!uniqueArr[arr[i]]){

            uniqueArr[arr[i]]=true;

        }else{
            uniqueArr[arr[i]]=false;
        }
    }
    for(var i=0; i<arr.length; i++){
        if(uniqueArr[arr[i]]==true){
            console.log(arr[i]);
        }
    }
  




// 5.Given two words (small case) if they are anagrams print "TRUE" otherwise "FALSE" https://en.wikipedia.org/wiki/Anagram
// Sample Input 1 - den , end
// Sample Output 1 - TRUE
// Sample Input 2 - hello, heloo
// Sample Output 2 - FALSE
    var w1= 'dene';
    var w2= 'ende';
   
    var a= w1.split('').sort().join('');
    var b= w2.split('').sort().join('');

    if(a === b){
         console.log('TRUE');
    }
    else{
        console.log('FALSE');

    }

        



// 6.Given an employees database query the employees who are from hyderabad and having experience more than 3 years
// Sample Input: var database = [ { name: 'vicky', age: 24, married: false, address: { city: 'hyderabad', state: 'andhra', pincode: '516003' }, skills: ['react', 'html', 'nodejs'], experience: 2 }, { name: 'nirmal', age: 20, married: true, address: { city: 'hyderabad', state: 'telengana', pincode: '500004' }, skills: ['css', 'figma'], experience: 4 }, { name: 'neeraj', age: 26, married: false, address: { city: 'bengaluru', state: 'karnataka', pincode: '510006' }, skills: ['aws', 'angular', 'nodejs'], experience: 5 } ]
// Sample Output: nirmal
var database = [ { name: 'vicky', age: 24, married: false, address: { city: 'hyderabad', state: 'andhra', pincode: '516003' }, skills: ['react', 'html', 'nodejs'], experience: 2 }, { name: 'nirmal', age: 20, married: true, address: { city: 'hyderabad', state: 'telengana', pincode: '500004' }, skills: ['css', 'figma'], experience: 4 }, { name: 'neeraj', age: 26, married: false, address: { city: 'bengaluru', state: 'karnataka', pincode: '510006' }, skills: ['aws', 'angular', 'nodejs'], experience: 5 } ];
for(var i=0; i<database.length; i++){
    if(database[i].address.city=='hyderabad' && database[i].experience>3){
        console.log(database[i].name);
    }
}