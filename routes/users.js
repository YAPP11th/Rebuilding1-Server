var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

var FCM = require('fcm').FCM;
var apiKey = 'AAAAmJYRFQQ:APA91bGTzFVV3crC-bgUU8Lmc8r0ZB3cKEKHQKcWbIogfmtO7jky3f1IEv_euepUv62tYJvdBCtOKs7rtPqweHZywfZYylj9Dl-DxJy1oIBwsAtwrPIzqo4GLMpxbUndEenxWVhXd-lf';
var fcm = new FCM(apiKey);

router.post('/pushExample', function(req,res,next){
  var message = {
    registration_id: 'cPDDMY3rjFo:APA91bHYuSvuK_MT00fiVkkvUXWtaAfr8vcO7GSWwBqlyIzVYC89SkltI_CEGtmNTQciaFLQF13dbQx0GiLM1owq7cASe5OXuczQvH5zVxTB0owch_RdRKVpNoaNPiQs1tsSihg4vy0F', // required 
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

  res.json({data1 : req.body.data1, data2 : req.body.data2});
});


module.exports = router;
