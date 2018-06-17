const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public' ));

// Express HBS engine
hbs.registerPartials( __dirname + '/views/partials' );
app.set('view engine', 'hbs');



app.get('/', function (req, res) {
    res.render('home',{
        year: new Date().getFullYear()
    });
});

app.get('/about', function (req, res) {
    res.render('about',{
        year: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Listen request of the port ${ port }`);
});