"use strict"
//promise all
// const f1 = () =>{
//     return new Promise((resolve, reject) => {
//         let a = 12 ;
//         let b = 8 ;
//         console.log("add : " , a+b );
//         resolve({'lang' : 'js'})
//     });
// }
// const f2 = (data) =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             let a = 23 ;
//             let b = 10 ;
//             console.log("sub : " , a-b);
//             reject({'age' : 20})
//         },3000);
//     });
// }

// Promise.all ([f1(),f2()])
// .then((res) =>{
//     console.log('success' , res);
// })
// .catch((err) =>{
//     console.log('failure' , err);
// });


// const p1 = Promise.resolve (2);
// const p2 =  (134555);
// const p3 = ()=>{
//     new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('welcome');
//             resolve()
//         });
       
//     });
// }
// Promise.all ([p1,p2, p3])
// .then((res) =>{

//     console.log('success' , res);
// })
// .catch((err) =>{
//     console.log('failure' , err);
// });


//promises
// let add = (data) =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('add');
//             resolve({'name': 'react'});
//         },4000);
//     });
// }
// let sub =(data2) =>{
//     return new Promise((resolve, reject) => {
//         console.log('sub');
//         resolve({'num' : 23})
//     });
// }

// let final =async () =>{
// const val = await add()
// const val2 = sub()
// console.log('val' , val);
// console.log('overall' , val , val2 );
// sub()
// }
// final()


// //spread operator- concatenate the two function
// let g1 = [1,23,4,5,13] 
// let g2 = ['hai','hello']
// let g3 = [...g1 , ...g2]
// console.log(g3);



// const p1 = Promise.resolve(3);
// const p2 = 1337;
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 100);
// });

// Promise.all([p1, p2, p3]).then((values) => {
//   console.log(values); // [3, 1337, "foo"]
// })
// .catch(console.log('error'))

