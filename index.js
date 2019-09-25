const restify = require('restify');
const product = require('./models/productModel');
const data = require('./data.json');
const PORT = process.env.PORT || 3000
var server = restify.createServer();

server.get('/', function(req,res){
    try {
        res.send(200,data);
    } catch (error) {
        res.send(404,{
            error:true,
            message:err
        })
    }
});

server.listen(PORT, function(err) {
    if(err){
        throw err;
    }
    console.log(`running on http://localhost:${PORT}`);
});