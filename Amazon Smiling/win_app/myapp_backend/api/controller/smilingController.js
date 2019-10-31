const smilingapptextModel = require('../model/smilingapptext');
const smilingenabledcharityModel = require('../model/smilingenabledcharity');
const sqlModel = require("../model/user_db_connection");
const beneficiaryModel = require('../model/beneficiary');
const smilingController = {};
// var smiling = require('smiling');


smilingController.getEnabledCharity = (req, res) => {
    // smilingenabledcharityModel.create({
    //     EIN: 'String',
    //     charityName: 'String',
    //     charityAbout: 'String',
    //     chatrityLogo: 'String',
    //     chatrityIconLogo: 'String',
    //     chatrityContactEmail: 'String',
    //     chatrityContactName: 'String',
    //     chatrityEngagementDate: 'String',
    //     languague: 'String'
    // }).then(() => {
    //     return smilingenabledcharityModel.find().then(data => {
    //         console.log(data);
    //         res.json(data);
    //     })

    // }).catch(() => {

    // })
    var charityName = req.query.charityName;
    console.log(charityName);
    if (charityName == null || charityName == undefined) {
        smilingenabledcharityModel.find({}).then(charitys => {
            console.log("success");
            console.log(charitys);
            res.json(charitys);
        }).catch(err => {
            console.log(err, '------------');
        })
    } else {
        smilingenabledcharityModel.find({
            charityName: charityName
        }).then(charitys => {
            if (charitys.length == 0) {
                res.json({
                    error: "Invalid credentials_getenabledCharity"
                });
            } else {
                res.json({
                    charity: charitys[0]
                });
            }
        })
    }
}
smilingController.getAppText = (req, res) => {
    var language = req.query.language;
    if (language == null) {
        smilingapptextModel.find({}).then(appTexts => {
            res.json(appTexts);
        }).catch(err => {
            console.log(err, '------------');
        })
    } else {
        smilingapptextModel.find({
            language: language
        }).then(appTexts => {
            if (appTexts.length == 0) {
                res.json({
                    error: "Invalid credentials_getAppText"
                });
            } else {
                res.json({
                    appText: appTexts[0]
                });
            }
        }).catch(err => {
            console.log(err, '------------');
        })
    }
}
smilingController.getBeneficiaryCharity = (req, res) => {
    var Name = req.query.Name;
    console.log(Name);
    if (Name == null || Name == undefined) {
        beneficiaryModel.find({}).then(charitys => {
            console.log("success");
            console.log(charitys);
            res.json(charitys);
        }).catch(err => {
            console.log(err, '------------');
        })
    } else {
        beneficiaryModel.find({
            Name: Name
        }).then(charitys => {
            if (charitys.length == 0) {
                res.json({
                    error: "Invalid credentials_getenabledCharity"
                });
            } else {
                res.json({
                    charity: charitys[0]
                });
            }
        })
    }
}

smilingController.getUserActivity = (req, res) => {
    var timeCreated;
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted = dt.format('Y-m-d H:M:S');
    timeCreated = formatted;
    var obj = {
        UUID: req.query.UUID,
        EIN: req.query.EIN,
        entryType: req.query.entryType,
        timestamp: timeCreated
    }
    sqlModel.createUserActivity(obj);
    res.json("success");

}

smilingController.getUserRegistration = (req, res) => {
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted = dt.format('Y-m-d H:M:S');
    var userNameFirst = req.query.userNameFirst;
    var userNameLast = req.query.userNameLast;
    var userEmail = req.query.userEmail;

    timeCreated = formatted;
    if (userNameFirst && userNameLast && userEmail) {
        var obj = {
            EIN: req.query.EIN,
            userNameFirst: userNameFirst,
            userNameLast: userNameLast,
            userEmail: userEmail,
            platform: req.query.platform,
            browser: req.query.browser,
            timestamp: timeCreated,
            entryType: req.query.entryType
        };
        // console.log("obj-------------.", obj);
        //============== data insert===============
        sqlModel.createUsers(obj).then((users, fields) => {
            console.log("fields-------------->", fields)
            var user_insert = {
                UUID: users.insertId,
                EIN: req.query.EIN,
                userNameFirst: userNameFirst,
                userNameLast: userNameLast,
                userEmail: userEmail,
                platform: req.query.platform,
                browser: req.query.browser,
                timestamp: timeCreated,
                entryType: req.query.entryType
            }
            res.json(user_insert)
            console.log("user_insert ====================>", user_insert);
        });
    } else {
        res.json({
            error: "error"
        });
    }
}
smilingController.getUserUUID = (req, res) => {
    var UUID = req.query.UUID;
    sqlModel.searchUser(UUID).then((users, fields) => {
        if (users.length == 0) {
            res.json({
                error: "no UUID"
            });
        } else {
            res.json(users);
        }
    })

}


module.exports = smilingController;