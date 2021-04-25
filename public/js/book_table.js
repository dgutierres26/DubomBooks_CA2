// Example POST method implementation:
async function deleteData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

document.getElementById('delete').addEventListener('click', function () {
    const booksEl = document.getElementsByClassName('select')
    array = []
    for (let prop in booksEl) {
        if (booksEl[prop].checked)
            array.push(booksEl[prop].dataset.book)
    }
    console.log(array)
    if (array.length > 0) {
        deleteData('books', array)
            .then(data => {
                console.log(data); // JSON data parsed by `data.json()` call
                window.location.reload()
            })
            .catch(err => console.log(err))
    }
})


