const mongoose = require('mongoose');
;
const {INNOVEM_APP_MONGODB_HOST, INNOVEM_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${INNOVEM_APP_MONGODB_HOST}/${INNOVEM_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));

    //added just for git