const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

const posts = {};
const {randomBytes} = require('crypto');

// Obtiene todos los posts
app.get('/posts', (req, res) => {
    res.send(posts);
});

// Crea una publicación
app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;
    posts[id] = {
        id, title
    }
    res.status(201).send(posts[id]);
});


// Escucha en el puerto 4000
app.listen(4000, () => {
    console.log('Listening on port 4000');
});