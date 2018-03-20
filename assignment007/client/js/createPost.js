// creating a new post, filling it with the data of name, url, text and image url and the printing the data to the console-->
const createPost = () => {
    const data = {
        name: document.querySelector('#name').value,
        url: document.querySelector('#url').value,
        text: document.querySelector('#text').value,
        imageURL: document.querySelector('#imageURL').value
    }
    console.log('Saving the following object to the server:', data)

// posting to the server the data made into a string format -->
    fetch('http://localhost:3000/posts/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        document.querySelector('#name').value = ''
        document.querySelector('#url').value = ''
        document.querySelector('#text').value = ''
        document.querySelector('.modal').classList.toggle('show')
        getPosts()
    })
}
// making the button with class .button-primary perform the createpost function when clicked
document.querySelector('.button-primary').onclick = createPost
