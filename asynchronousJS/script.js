console.log("asynchronous javascript")
setTimeout(() => {
    console.log("i am from settimeout")
},3000);

function greeting(){
    console.log("set timeout")
}
setTimeout(greeting,2000)
console.log("hello")