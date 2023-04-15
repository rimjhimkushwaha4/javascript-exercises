console.log('xhr and fetch request');

// let url = "https://fakestoreapi.com/products";
let url = "https://jsonplaceholder.typicode.com/posts";


// XMLHttpRequest
const xhr = new XMLHttpRequest();

function serverRequest(method, url, data=null){

    return new Promise((resolve, reject) =>{
        xhr.open(method, url);

        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.responseType = "json";
        xhr.onload = () =>{
            if(xhr.status >= 400 && xhr.status <= 500){
                reject(new Error("Some went wrong"));
                return
            } 
            let res = xhr.response; 
            resolve(res);  
        }
        xhr.send(data)
    })
   
}

// console.log(serverRequest("GET", url))

// serverRequest("GET", url).then(function(data){
// console.log(data);
// }).catch(function(err){
//     console.log('error', err)
// })

let data = {
    userId: 1,
    body : "lerom34343",
    title: "hello"
}

// serverRequest("POST", url, JSON.stringify(data)).then(res =>console.log(res, 'resss')).catch(err => console.log(err, 'err'))



// fetch method

// fetch(url, {
//     method: "GET",
//     headers: {
//         "Content-Type" : 'application/json'
//     }
// })

// console.log(fetch(url));

// fetch(url).then((res) =>{
//     return res.json()
// }).then(data => console.log(data, 'data'))
// .catch(err => console.log(err))


fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        'content-type' : 'application/json'
    }
}).then((prom) => prom.json()).then(res => console.log(res)).catch((err) => console.log(err, 'err'))




