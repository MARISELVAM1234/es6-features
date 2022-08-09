//// call-back function
// var mainFunc = (sub) => {
//   console.log("hai");
//   sub();
// };
// var subFunction = () => {
//   console.log("hello");
// };
// mainFunc(subFunction);

////cal-back hell
// var f1 = (val) => {
//   console.log("1");
//   setTimeout(()=>{
//     console.log('2');
//   },3000)
//   val();
//   var f3 = (values) => {
//     console.log("4");
//     values();
//   };
//   var f4 = () => {
//     console.log("5");
//   };
//   f3(f4);
// };
// var f2 = () => {
//   console.log("3");
// };
// f1(f2);

// //async and await
// let f1 = ()=>{
//     console.log('1');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('2');
//             resolve({a : '2'})
//         },3000);
//     })
// }
// let f2 = ()=>{
//     console.log('3');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('4');
//             resolve()
//         },3000);
//     })
// }

// let f3 =() =>{
//     console.log('5');
// }

// let f4 = async()=>{
// await f1()
// await f2()
// f3()
// }
// f4()

// promise all
const f1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2");
      resolve();
    }, 3000);
  });
};
const f2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1");
      resolve();
    }, 2000);
  });
};
Promise.all ([f1(),f2()])
.then(() =>{
    console.log('success');
})
.catch(() =>{
    console.log('failure');
});

