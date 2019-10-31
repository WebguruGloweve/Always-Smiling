var express = require('express');
var router = express.Router();
var smilingController = require("../api/controller/smilingController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/getAppText', smilingController.getAppText);
router.get('/api/getEnabledCharity', smilingController.getEnabledCharity);
router.get('/api/getUserRegistration', smilingController.getUserRegistration);
router.get('/api/getUserActivity', smilingController.getUserActivity);
router.get('/api/getUserUUID', smilingController.getUserUUID);
router.get('/api/getBeneficiaryCharity', smilingController.getBeneficiaryCharity);
module.exports = router;
