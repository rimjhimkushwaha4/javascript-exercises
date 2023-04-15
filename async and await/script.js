let url = "https://jsonplaceholder.typicode.com/posts";


async function fetchingData(url) {

    // fetch(url).then((res) => {
    //     return res.json()
    // }).then(data => console.log(data)).catch((err)=>console.log(err))

    try {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data)
        return data;
    } catch (error) {
        console.log(error, 'errr')
    }
}

 fetchingData(url).then((data) =>{
     console.log(data)
    })

