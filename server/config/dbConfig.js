'use strict';
const mysql  = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'cutamora123',
    database:'sampledb'
})

conn.connect((err) =>{
    if(err) throw err;
    console.log('konektedes suksisfuley');
});

module.exports = conn;