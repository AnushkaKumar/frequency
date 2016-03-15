var mongoose=require('mongoose');
var ArticleSchema=new mongoose.Schema({
	heading:String,
	subheading:String,
	image:String,
	date:{type:Date,default:Date.now},
	content:String,
});
module.exports=mongoose.model('Articles',ArticleSchema); 