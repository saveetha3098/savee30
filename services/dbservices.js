var mongoclient=require('mongodb').MongoClient;
exports.createconnection=function(){
  mongoclient.connect("mongodb://saveetha:savee300198@ds111138.mlab.com:11138/projector30").then(function(client){
    console.log("connected to database");
    exports.database=client.db("projector");
});
}
