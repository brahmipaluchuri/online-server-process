var express  = require('express')
var router = express.Router()
var mongodb = require('mongodb')

router.get('/get-que', async function(req,res,next){
   try{  
    const url = 'mongodb+srv://brahmap07:Brahmi@brahmi-first-react.c3qw88l.mongodb.net/'
    const mongodbClient = mongodb.MongoClient
    const server = await mongodbClient.connect(url)
    const db = server.db('school')
    const collection = db.collection('questions')
    const result = await collection.aggregate([{$sample: { size : 9}}]).toArray()
    res.send(result)
   }catch(e){
    console.log('expcetion raised')
     res.send(e)
   }

})


module.exports = router