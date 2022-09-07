// function getMsg(name){
// console.log(`Hello ${name}`);
// }


// getMsg("Manish")


let numbers=[1,2,3,4,5,6,7,8,9,10];

// function evenNumber(number){
//     return number%2===0;
// }
// const filterEven=numbers.filter(evenNumber);
// console.log(filterEven);


//create a function called sum 
// let sum=(num1,num2)=>{
//     return num1+num2;
// }


// let multiply=(num1,num2)=>{
//     return num1*num2;
// }


// //create a callback function 
// let calculate=(num1,num2,callback)=>{
//     return callback(num1,num2)
// }

// console.log(calculate(10,20,sum))
// console.log(calculate(10,20,multiply))




// function table1(){
//     console.log("Dinner ")
// }

// function table2(){
// console.log("Tea")
// }


// function table3(){
//     console.log("meal for 100 People")
// }


// setTimeout(table1,2000);
// setTimeout(table2,100);
// setTimeout(table3,10000);

// if you are using a SetTimeout function ,internally, you  are using callback function 

// 1.raise a pizza dough=>5000ms
// 2.rolldough=>2000
// 3.poursauce=>1000
// 4.add toppings
// 5.Bakepizza
// 6.Deleiver Pizza

// const time=1000;

// function raiseDough(callback){
//     console.log("Waiting for Dough...");
//     setTimeout(() => {
//         console.log("Dough is ready..")
//         callback();
//     }, 5*time);
// }


// function rollDough(callback){
//     console.log("Rolling for Dough...");
//     setTimeout(() => {
//         console.log("Dough is rolled..")
//         callback();
//     }, 3*time);

// }


// function poursauce(callback){
//     console.log("pouring a sauce...");
//     setTimeout(() => {
//         console.log("pouring a sauce is ready..")
//         callback();
//         }, 1*time);
// }



// function addToppings(callback){
//     console.log("Adding Toppings...");
//     setTimeout(() => {
//         console.log(" Toppings is added..")
//         callback();
//     }, 2*time);
// }

// function bakePizza(callback){
//     console.log("Baking the pizza...");
//     setTimeout(() => {
//         console.log(" Baking the pizza is ready..")
//         callback();
//     },8*time);
// }


// function delieverPizza(callback){
//     console.log("Deleiver the pizza...");
//     setTimeout(() => {
//         console.log(" Deleiver the pizza is ready..")
//         callback();
//         },6*time);
// }


// // WHat if i nest ?
// raiseDough(()=>{
//     rollDough(()=>{
//         poursauce(() => { 
//             addToppings(() => {
//                 bakePizza(() => {
//                     delieverPizza(() => {
//                         console.log("Customer got the order");
//                     });
//                 });
//             });
//         });
//     });
// });



//select an element h1 with 
const countdown=document.querySelector(".countdown")

let time=5;//initalized variable with initail as 5


///Logic to Decrement timer by 1 for 1 second 

countdown.innerHTML=time--;
setTimeout(() => {
    countdown.innerHTML=time--;
    setTimeout(()=>{
        countdown.innerHTML=time--;
        setTimeout(()=>{
            countdown.innerHTML=time--;
            setTimeout(()=>{
                countdown.innerHTML=time--;
                setTimeout(()=>{
                    countdown.innerHTML=time--;
                    countdown.innerHTML="Hello Folks"
                },1000);
            },1000);
        },1000);
    },1000);
},1000);





