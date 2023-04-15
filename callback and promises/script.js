console.log("callback and promises")
// scenario

// 1. Registration
// 2. Email
// 3. login
// 4. get data
// 5. dispay data

// function register(callback){
//     setTimeout(()=>{
//         console.log("register end")
//         callback()
//     },3000)
// }
// function sendEmail(callback){
//     setTimeout(()=>{
//         console.log("send email end")
//         callback()
        
//     },4000)
// }
// function login(callback){
//     setTimeout(() => {
//         console.log("login end")
//         callback()
//     },2000);
// }
// function getUserData(callback){
//     setTimeout(() => {
//         console.log("Got user data")
//         callback()
//     }, 1000);
// }
// function displayUserData(){
//     setTimeout(() => {
//         console.log("display user data ")
       
//     }, 1000);
// }

// // callback hell
// register(function(){
//     sendEmail(function(){
//         login(function(){
//             getUserData(function(){
//                 displayUserData()

//             })

//         })

//     })
    
// })

// console.log("other application work")




// let enter=prompt("enter   resolve or  reject ")
// function register(){
//     return new Promise((resolve,reject)=>{
        
//         setTimeout(()=>{
//             if(enter=== "resolve"){
//                 console.log("register end")
//             resolve()    
//             }
//             reject("somthing went wrong in register ")
//         },3000)

//     })
// }
// function sendEmail(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("send email end")
//             resolve()
            
//         },4000)

//     })
// }
// function login(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("login end")
//             resolve()
//         },2000);

//     })
// }
// function getUserData(){
//     return new Promise((resolve,reject)=>{

//         setTimeout(() => {
//             console.log("Got user data")
//             resolve()
//         }, 1000);
//     })
// }
// function displayUserData(){
//     setTimeout(() => {
//         console.log("display user data ")
       
//     }, 1000);
// }

// register()
//     .then(sendEmail)
//     .then(login)
//     .then(getUserData)
//     .then(displayUserData)
//     .catch((err)=>console.log(err))
// console.log("other application work")