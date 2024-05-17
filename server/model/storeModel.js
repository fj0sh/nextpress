const conn = require("../config/dbConfig");

exports.getAllStore = (callback) => {
    conn.query("SELECT * FROM store", callback)
}