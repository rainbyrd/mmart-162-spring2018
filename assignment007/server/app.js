const express = require('express')
const errorhandler = require('errorhandler')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
//pre-loaded posts are in "store" as objects, more can be added to them from within app and accessed in other places by object item type
let store = {
    posts: [{
        name: 'What is going on right now in this EdX course?',
        url: 'https://courses.edx.org/courses/course-v1:Microsoft+DEV283x+2T2017/course/',
        imageUrl: 'https://static01.nyt.com/images/2014/01/28/science/28SLOT_SPAN/28SLOT-master1050.jpg',
        text: 'As we have already discussed, this course is a little advanced and some of the language and concepts are glossed over because the teacher already assumes basic fluency with server-side programming. That is OK. You will still learn a ton, even if you don\'t understand everything. You are learning to use developer documentation and resources, and we will go over the jargon and concepts in class.',
        comments: [{
                text: 'So many assumptions are being made about what we already know?! This is overwhelming!'
            }, {
                text: 'This is great! At the end of this unit, we\'re going to be able to make our own API.'
            }, {
                text: 'How do we make this live? On a real server?!!'
        }]
    },
    {
        name: 'Sloth man is coming to bring you hugs',
        url: 'https://courses.edx.org/courses/course-v1:Microsoft+DEV283x+2T2017/course/',
        imageUrl: 'https://c402277.ssl.cf1.rackcdn.com/photos/6520/images/story_full_width/iStock_000016816803XLarge_mini.jpg?1394631384',
        text: 'Sloth man is slow but his heart is strong',
                comments: [{
                text: 'First'
            }, {
                text: 'I hate sloths'
            }, {
                text: '^ You guys need to go home ^'
        }]
    }
  ]
}


let app = express()

// Middleware: Does stuff to the request and response objects
// before routing:
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.use(cors())
app.use((req, res, next) => {
    req.store = store
    next()
})

app.get('/posts', routes.posts.getPosts)
app.get('/posts/:postId', routes.posts.getPost)
app.post('/posts', routes.posts.addPost)
app.put('/posts/:postId', routes.posts.updatePost)
app.delete('/posts/:postId', routes.posts.removePost)

/*
// NOTE: We will worry about comments next week:
app.get('/posts/:postId/comments', routes.comments.getComments)
app.post('/posts/:postId/comments', routes.comments.addComment)
app.put('/posts/:postId/comments/:commentId', routes.comments.updateComment)
app.delete('/posts/:postId/comments/:commentId', routes.comments.removeComment)
*/

app.listen(3000)
