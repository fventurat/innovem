require('dotenv').config();
const app = require('./server');
require('./database');


app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'))
})

//just to add to stage in git