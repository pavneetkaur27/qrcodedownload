var express = require('express');
var router = express.Router();
var QRCode = require('qrcode')
const fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
 
  QRCode.toDataURL("hlo pavi", function (err, url) {
   console.log(url);
    res.render('index', { title: url });
  
  })
  
});

module.exports = router;
