
//const { prueba } = require('../nodeCalendarjs/app');
//const buffer = require('../amigos') 
const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
   res.render('index')
}

indexCtrl.renderAbout = (req, res) => {
    res.render('about')
}

module.exports = indexCtrl;