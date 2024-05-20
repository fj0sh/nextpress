const conn = require("../config/dbConfig");

exports.getProducts = (callback) => {
    conn.query("select * from products", callback);
}