var movies = require("./moviesdata");
var dbservice=require('../services/dbservices');
 exports.getAllmovies = function(req, res, next) {
   console.log("dbservices",dbservices);
   var db=dbService.database;
   var moviesCollection=db.collection("movies");
   moviesCollection.find().toArray().then(function(result){
     console.log(result);
     var outputJSON={
       "jsSuccess":true,
    "data":result
}
return res.json(outputJSON);
});
};
exports.addNewMovie=function(req,res,next){
  var db=service.database,
  movie=req.body,
  moviesCollection=db.collection("movies");
  moviesCollection.insert(movie).then(function(save_data){
    return res json({
      "jsSuccess":true
    });
  });
} 
