var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var articleSchema=require('../models/article.js');
/* GET BLOG page. */
router.get('/', function(req, res, next) {
	if(req.query.id == undefined){
		articleSchema.find(function(err,allItems){
			var p;
			var n=allItems.length;
		if(req.query.page==undefined)
			p=0;
		else
		{
			p = req.query.page;
			if(p>n/10 || p<0){
				//Things are screwed up
				p=0;
			}

		}
			if(!err)
				console.log(allItems);
				res.render('blog',{
					'len':n,
					'articles':allItems.splice(p*10,10)

				});
		});
	}
	else{
	    articleSchema.findOne({_id : req.query.id},function(err,obj) { 
	    	if(!err)
	    	res.render('single',{
	    		'article':obj
	    	});
	     });
	}
});

router.get('/delete',function(req,res,next){
	if(req.query.password==undefined || req.query.id==undefined){
		res.send('missing parameter');
	}else if(req.query.password=='123456'){
		articleSchema.remove({_id:req.query.id},function(err){
			if(!err){
				res.send('Deleted Successfuly');
			}else{
				res.send('Error in deletion');
			}
		});
	}else{
		res.send('wrong password');
	}
});
module.exports = router;