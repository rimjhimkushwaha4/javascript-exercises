let title = document.getElementById('inputTitle')
let Description = document.getElementById('notesDescription')
let btn = document.getElementById('btn')
let card = document.getElementById('note')

let note = []
// note={
//     title:title.value,
//     description:description.value,
// }

// < div class="card" style = "width: 18rem;" >
//     <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <h6 class="card-title">date</h6>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
//             card's content.</p>
//         <button type="button" class="btn btn-primary">Delete</button>
//         <button type="button" class="btn btn-danger">Important</button>
//     </div>
// </div >


console.log("hii")
btn.addEventListener('click', () => {
    note[title.value] = Description.value

    console.log(note)

    myobj = {
        title: title.value,
        description: description.value,
    }
    title.value = ""
    Description.value = ""
    check()


})
html =
    function check() {
        let mynote
        if (!mynote) {

            let notes = localStorage.setItem('notes', JSON.stringify(note));
            console.log(notes)

        }

        else {
            let notes = JSON.parse(localStorage.getItem(note));



        }
    }