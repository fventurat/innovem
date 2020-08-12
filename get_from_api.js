require('dotenv').config();
const { INNOVEM_KEY } = process.env; 
var http = require('http');
const te = require('tradingeconomics'); //yo
var headers = {
    'Accept': 'Application/json', // yo - originally xml - added for git
    'Authorization': 'Client '+process.env.INNOVEM_KEY//'OAuth2 YOUR_TOKEN_VALUE'
};
var buffer = '';
var options = {
    host: 'api.tradingeconomics.com',
    port: 80,
    //path: '/country/united states',
    path: '/country/mexico',  //yo - ok funciona junto con funcion.
    headers: headers
};
options.path = options.path.replace (' ','%20');
callback = function(response) {
    response.on('data', function (chunk) {
    buffer += chunk;
});
response.on('end', function () {
    // parse results !
    //console.log(buffer)
            
    console.log(JSON.parse(buffer));
    
});
}
//te.login();

te.login(apikey = process.env.INNOVEM_KEY);  //yo



/*
data = te.getWorldBank(category = 'education')  //yo
    .then(function(data){  //yo
        console.log(data);  //yo
    });  //yo
 */

 /*
data = te.getIndicatorData().then(function(data){   //yo
    console.log(data)       
});
*/

/*
data = te.getIndicatorData(country = ['mexico']).then(function(data){   /yo
    console.log(data)       
});
*/
var req = http.get(options, callback).end();

