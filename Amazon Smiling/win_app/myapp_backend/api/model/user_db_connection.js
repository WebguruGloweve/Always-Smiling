var mysql = require("mysql");

var sql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "smiling_database"
});

sql.connect(function (err) {
    if (err) {
        console.log("error");
    } else {
        console.log("connected");
    }
});

var User = {}

User.createUsers = function createUsers(newUser) {
    return new Promise((resolve, reject) => {
        query = sql.query("INSERT INTO smilinguserregistration set ?", newUser, function (err, res, fields) {
            if (err) {
                reject(err);
            } else {
                resolve(res, fields);
            }
        });
    })
}
User.searchUser = function searchUser(newUser) {
    // console.log("here is model", newUser);
    return new Promise((resolve, reject) => {
        sql.query("SELECT * FROM smilinguserregistration WHERE UUID = ?", newUser, function (err, res, fields) {
            if (err) {
                reject(err);
            } else {
                resolve(res, fields);
            }
        });
    })
}

User.createUserActivity = function createUserActivity(newAction) {
    var query = sql.query("INSERT INTO smilinguseractivity set ?", newAction, function (err, res) {
        console.log(query);
        // console.log(query);
        if (err) {
            console.log("error");
        } else {

            console.log(res.insertId);
        }
    });
}

module.exports = User;