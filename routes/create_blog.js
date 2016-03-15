var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var articleSchema=require('../models/article.js');

router.get('/',function(req,res,next){
	res.render('create_blog');
});

router.post('/',function(req,res,next){
   var freq=new articleSchema({

   	heading:req.body.heading,
	subheading:req.body.subheading,
	image:req.body.image,
	content:req.body.content,

   });
 freq.save(function(err,freq){
 		if (!err)
 			res.render('create_blog');
  });
});



module.exports = router;