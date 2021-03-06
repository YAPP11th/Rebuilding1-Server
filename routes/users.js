var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

var FCM = require('fcm').FCM;
var apiKey = require('../auth/firebase_con').apiKey();
var fcm = new FCM(apiKey);

router.post('/pushExample', function (req, res, next) {
  var message = {
    registration_id: require('../auth/firebase_con').registration_id(),   // required 
    collapse_key: 'Collapse key',
    data1: req.body.data1,
    data2: req.body.data2
  };

  fcm.send(message, function (err, messageId) {
    if (err) {
      console.log("Something has gone wrong!");
    }
    else {
      console.log("Sent with message ID: ", messageId);
    }
  });
  res.json({ data1: req.body.data1, data2: req.body.data2 });
});

module.exports = router;