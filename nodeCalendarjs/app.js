//const dataJSON = require('./nodeCalendarjs/calendar.js')
var auth = require('./auth.js');
var http = require('https');

//importing variables from file './auth.js'
//const getCalendar = require('./nodeCalendarjs/auth.js').getCalendar;
//const getCalendarCountry = require('./nodeCalendarjs/auth.js').getCalendarCountry;
//const getCalendarIndicator = require('./nodeCalendarjs/auth.js').getCalendarIndicator;
const getCalendarId = require('./auth.js').getCalendarId;
   
var buff = [];

//function to get the chunk of data on response an put it on the buffer
callbackPINPIN = function(response) {
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
    }   
                                        
    var buffer2 = removeByteOrderMark(buffer);  //yo
    buffObj = JSON.parse(buffer2);

    return buff;
    
        //yo - it works fine

    // END of code of Fidel Ventura******************************

   //console.log(buffer)//example, showing it on the console   //yo original commented by me - Fidel
 
   /*
    //console.log(" ")
    //console.log("*******************CALENDAR EVENTS**********************")
    //console.log(" ")    */
});

}  //END o FIN de callback
exports.prueba = () => {
    return buffer
}
//getting the http request, and after - end task
/*var req = http.get(auth.getCalendar, callback).end();
var req = http.get(auth.getCalendarId, callback).end();
var req = http.get(auth.getCalendarCountry, callback).end(); */
indicator = http.get(auth.getCalendarIndicator_BLA, callbackPINPIN).end();  

//code added by fidel//////////////
//console.log(callbackPINPIN());