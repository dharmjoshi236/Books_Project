const mongoose = require('mongoose');
const {mongo_connection_string, database_connected, database_unconnected} = require('./constants/index')

mongoose.connect(mongo_connection_string)
    .then(()=> {
        console.log(database_connected)
    })
    .catch((error)=> {
        console.log(database_unconnected, error);
    })

module.exports;