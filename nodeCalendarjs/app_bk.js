//const dataJSON = require('./nodeCalendarjs/calendar.js')
var auth = require('./auth.js');
var http = require('https');
var http2 = require('http');
var fs = require('fs');

//importing variables from file './auth.js'
//const getCalendar = require('./nodeCalendarjs/auth.js').getCalendar;
//const getCalendarCountry = require('./nodeCalendarjs/auth.js').getCalendarCountry;
//const getCalendarIndicator = require('./nodeCalendarjs/auth.js').getCalendarIndicator;
const getCalendarId = require('./auth.js').getCalendarId;

const server = http2.createServer((request, response) => {
  /*let htmlFile = '';
    switch(request.url){
        case '/':
            htmlFile = 'index.html';
            break;

        case '/innovem/calendarid':
            htmlFile = 'calendarid.html';
            response.write(buffer);
            break;
        default:
            break;
    }    */

    
    if (request.url === '/') {
        response.write('Hello World');
        response.end();
    } 
    if (request.url === '/innovem/calendarid'){
        data_calendar = request.body;
        response.write(buffer);
        response.end();
    }  


});
console.log('server on port 3000');


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
    /*
    function removeByteOrderMark(str){      //yo
        return str.replace(/^\ufeff/g,"")   //yo
    }                                       //yo
    buffer2 = removeByteOrderMark(buffer);  //yo
    return JSON.parse(buffer2);
    
    */
        //yo - it works fine

    // END of code of Fidel Ventura******************************

   //console.log(buffer)//example, showing it on the console   //yo original commented by me - Fidel
   /*document.getElementById('calendar').innerHTML = `
        <h1 class="app-title">Pets (${buffer.length} results)</h1>
   `    */
 
   /*
    //console.log(" ")
    //console.log("*******************CALENDAR EVENTS**********************")
    //console.log(" ")    */
});

}  //END o FIN de callback

//getting the http request, and after - end task
/*var req = http.get(auth.getCalendar, callback).end();
var req = http.get(auth.getCalendarId, callback).end();
var req = http.get(auth.getCalendarCountry, callback).end(); */
/*var indicator = */http.get(auth.getCalendarIndicator_BLA, callback).end();  
//console.log(indicator);

server.listen(3000);
