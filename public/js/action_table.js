let genre = document.getElementById('genre')
let title = document.getElementById('title')
let author = document.getElementById('author')
let publisher = document.getElementById('publisher')
let price = document.getElementById('price')
let id = document.getElementById('bookId')
let edit = document.querySelectorAll('button.edit')
for(let i = 0; i < edit.length; i++){
     edit[i].addEventListener('click' , function(){
        editRequest(edit[i])

    })
}

function editRequest(el){
    id.value =`${el.dataset.id}`
    genre.value =`${el.dataset.genre}`
    title.value =`${el.dataset.title}`
    author.value =`${el.dataset.author}`
    publisher.value =`${el.dataset.publisher}`
    price.value =`${el.dataset.price}`
}

// Example POST method implementation:
async function updateData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

// Example POST method implementation:
async function submitData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

function getFormValue(){
    return data = {
         id: id.value,
         genre: genre.value,
         title: title.value,
         author: author.value,
         publisher: publisher.value,
         price: price.value
    }

}

document.getElementById('submit').addEventListener("click", function () {
    
    submitData('/books', getFormValue())
        .then(data => alert("Saved successfully"))
        .catch(err => alert("failed"))
    window.location.reload()
})
document.getElementById('update').addEventListener("click", function () {
    const data = getFormValue()
    console.log(data)
    updateData('/books', getFormValue())
        .then(data => alert("Updated successfully"))
        .catch(err => alert("failed"))
    window.location.reload()
})