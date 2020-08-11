const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

//Initalization
const app = express();  //app es el servidor


//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
//console.warn('__dirname is:', __dirname);
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');  //para utilizar la config anterior

//Middlewares
app.use(express.urlencoded({extended: false}));  //Para convertir datos de formulario en objeto json


//Global Variables


// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/calendar.routes'));
//Static files
app.use(express.static(path.join(__dirname, 'public')));



 module.exports = app;

