console.log("xhr object")

const xhr= new XMLHttpRequest()
xhr.open("GET","https://fakestoreapi.com/products")
xhr.responseType = "json";

xhr.onload=()=>{
    let res=xhr.response;
    console.log(res)

    // console.log(xhr.response)
}
   
 xhr.send()