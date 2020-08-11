//setting requirments
var auth = require('./auth.js');
var http = require('https');


//importing variables from file './auth.js'
const getCalendar = require('./auth.js').getCalendar;
const getCalendarCountry = require('./auth.js').getCalendarCountry;
const getCalendarIndicator = require('./auth.js').getCalendarIndicator;
const getCalendarId = require('./auth.js').getCalendarId;

//function to get the chunk of data on response an put it on the buffer
callback = function(response) {
    buffer = '';
    response.on('data', function (chunk) {
    buffer += chunk;
    
});
//response
response.on('end', function () {
    // your code here if you want to use the results !

    //Beginning of Fidel Ventura***************************
    
    function removeByteOrderMark(str){      //yo
        return str.replace(/^\ufeff/g,"")   //yo
    }                                       //yo

    buffer2 = removeByteOrderMark(buffer);  //yo
    
    dataJSON = function(buffer2) {
        return JSON.parse(buffer2);
    }
    console.log(dataJSON);      //yo - it works fine
    
    // END of code of Fidel Ventura******************************

    //console.log(buffer)//example, showing it on the console   //yo original commented by me - Fidel
    //console.log(" ")
    //console.log("*******************CALENDAR EVENTS**********************")
    //console.log(" ")
});
}  //END FIN del callback de TE


//getting the http request, and after - end task
var req = http.get(auth.getCalendar, callback).end();
var req = http.get(auth.getCalendarId, callback).end();
var req = http.get(auth.getCalendarCountry, callback).end(); 
var req = http.get(auth.getCalendarIndicator, callback).end();


