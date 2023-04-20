require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use( express.static( 'public' ) );


// app.get('/hello-world', (req, res) =>  {
//     res.send('Hello World')
// });
app.get('/', (req, res) =>  {
    res.render('home', {
        nombre: 'Luciano Rodriguez',
        titulo: 'Curso de Node'
    });
});
app.get('/generic', (req, res) =>  {
    res.render('generic', {
        nombre: 'Luciano Rodriguez',
        titulo: 'Curso de Node'
    });
});
app.get('/elements', (req, res) =>  {
    res.render('elements', {
        nombre: 'Luciano Rodriguez',
        titulo: 'Curso de Node'
    });
});

// app.get('/generic', (req, res) =>  {
//     res.sendFile(__dirname + '/public/generic.html')
// });
// app.get('/elements', (req, res) =>  {
//     res.sendFile(__dirname + '/public/elements.html')
// });

app.get('*', (req, res) =>  {
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(process.env.PORT)