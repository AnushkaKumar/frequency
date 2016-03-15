var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET Aboutus page. */
router.get('/', function(req, res, next) {
  res.render('contact-us');
});

router.post('/send', function(req,res,next){
	var transporter = nodemailer.createTransport("SMTP",{
	    service: 'gmail',
	    auth: {
	        user: 'frequencyclubmail@gmail.com',
	        pass: 'clubmail'
	    }
	});
	var mailOptions = {
    from: req.body.email, // sender address
    sender: req.body.email,
    replyTo: req.body.email,
    to: 'frequencyclubmail@gmail.com', // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.message, // plaintext body
 					  };
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    res.send('OK');

	});
})

module.exports = router;
