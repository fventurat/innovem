require('dotenv').config();
const { INNOVEM_KEY } = process.env; 

//setting headers for authorization - key:secret
var headers = {
  'Accept': 'Application/xml',
  'Authorization': 'Client '+process.env.INNOVEM_KEY
 
};

var buffer = '';//setting variable to store response 

//setting options to compose the URL path 
var getCalendarCountry = {
  host: 'api.tradingeconomics.com',
  port: 443,
  path:  '/calendar/country/united states'.replace(' ', '%20'),//replace white spaces
  headers: headers 
};
var getCalendar = {
  host: 'api.tradingeconomics.com',
  port: 443,
  path:  '/calendar'.replace(' ', '%20'),//replace white spaces
  headers: headers  
};
var getCalendarIndicator = {
  host: 'api.tradingeconomics.com',
  port: 443,
  path:  '/calendar/indicator/inflation rate'.replace(' ', '%20'),//replace white spaces
  headers: headers 
};
var getCalendarId = {
  host: 'api.tradingeconomics.com',
  port: 443,
  path:  '/calendar/calendarid/174108,160025,160030'.replace(' ', '%20'),//replace white spaces
  headers: headers   
};
//exporting the variables to use in 'calendar.js' file
//module.exports.getCalendarId_BLA = getCalendarId;
module.exports.getCalendarIndicator_BLA = getCalendarIndicator;
//module.exports.getCalendar_BLA = getCalendar;
//module.exports.getCalendarCountry_BLA = getCalendarCountry;







