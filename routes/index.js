var express = require('express');
var router = express.Router();
var multer = require('multer');
var DIR = './uploads/';
var upload = multer({dest: DIR}).single('photo');
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {
	 var path = '';
	 upload(req, res, function (err) {
	    if (err) {
	      // An error occurred when uploading
	      console.log(err);
	      return res.status(422).send("an Error occured")
	    }  
	    path = req.file.path;
	    return res.send("Upload Completed for "+path); 
  });	 
})


module.exports = router;
