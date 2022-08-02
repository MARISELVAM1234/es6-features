// //Array methodds
// // 1. Map
// var arr = [12,32,34,23,13];
// var  a = arr.map(multipleFunc);
// function multipleFunc(num){
//    return num*12
// }
// console.log(a);

// var b  = arr.map(x => x* 7);
// console.log("map:" ,b);

// // 2. find 
//  var array = [10,12,13,14];
//  var b  =  array .find(element => element < 22);
//  console.log("find :" ,b);

//  // 3 .filter 
//  var words = ["hi", "hello", "hey", "apple", "watermelon","lemon", "javascript"];
// var result = words.filter(word => word.length > 2  );
// console.log(result);

// var A = [23,24,25,26,33,36,39];
// var B = A.filter(element => element > 26);
// console.log(B);

// // 4. some
// var C = [ 2,3,4,5,6];
// var D = A.some(element => element % 2 === 0);
// console.log(D);

// // 5. reduce
// var E = [23,3,4,3,5,78];
// // var F = E.reduce(addFunc);
// // function addFunc(num , add){
// //     return num + add
// // }
// var F = E.reduce( (initial , add) =>{
//   return initial * add
// });
// console.log(F);

// // 6.foreach
// var G = [12,13,14,15,16,17,18,19];
// var H = G .forEach(function(iterate){
//    console.log(iterate);
// });


// //callback function
// // function greet(name, callback) {
// //     console.log('Hi' + ' ' + name);
// //     callback();
// // }
// // // callback function
// // function callMe() {
// //     console.log('I am callback function');
// // }
// // greet('Peter', callMe);



// // callback hell function 
// function first(name, callback) {
//   console.log('Hi' + ' ' + name);
//   callback();
//   function second (age , secondCallback){
//     console.log(name + " your age is " + age);
//     secondCallback ();
//   }
//   function secCallMe(){
//     console.log("Another function");
//   }
//   second(22 ,secCallMe);
// }
// function callMe() {
//   console.log('I am callback function');
// }
// first('Peter', callMe);


// // for-of to iterate the value in one by one
//  var flower = [12,23,445,43];
//  for(let x of flower){
//   console.log(x);
//  }

//  // default parameter value
//  function addFunction (x,y = 20){
//    return z = x + y
//  }
//  console.log( addFunction(5));

//  // Function Rest Parameter -  to(...) allows a function to treat an indefinite number of arguments as an array:
//  function sum(...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }
// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// console.log(x);

// // string method
// var stringMethods = "three string method includes in es6"
// var ab = stringMethods.includes("string");
// console.log(ab);
// var ac = stringMethods.startsWith("three") ;
// console.log(ac);
// var ad = stringMethods.endsWith("es6");
// console.log(ad);


//promises

// function addFunction() {
//   return new Promise((resolve, reject) => {
//     let a = 12;
//     let b = 24;
//     console.log("Total : " + (a + b));
//     resolve();
//   });
// };

// function subFunction() {
//   return new Promise((resolve, reject) => {
//     let a = 56;
//     let b = 24;
//     console.log("Total : " + (a - b));
//     reject();
//   })
// }
// addFunction()
//  .then(subFunction)
//   // .then(() => {
//   //   console.log("success");
//   //   subFunction()
//   // })
//   .then (()=>{
//     console.log("success2");
//   })
//  .catch (() => {
//   console.log("failure");
// });


//async-await 

function first(){
   return new Promise((resolve, reject) => {
    setTimeout(()=>{
      let a = 23 ;
      let b = 12 ;
      console.log(a*b ,"first");
      resolve ();
    },3000);
   
   });
}

function second() {
  let a = 55 ;
  let b = 45 ;
  console.log(a-b);
}

async function third (){
 await first();
  second();
};
third();