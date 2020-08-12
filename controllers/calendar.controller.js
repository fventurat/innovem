const indicatorCtrl = {};
const { prueba } = require('../nodeCalendarjs/app');
//const buffer = require('../amigos') 


indicatorCtrl.renderIndicator = (req, res) => {
   indicators = prueba();
   //res.json('calendar/indicators', { indicators });
   res.render('calendar/indicators', { indicators });
   //res.send(indicators);
}


module.exports = indicatorCtrl;