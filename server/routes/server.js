var express = require('express');
var router = express.Router();
var db;
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb://localhost:27017";

/* Connect to MongoDB database */
MongoClient.connect(uri, (err, database) => {
    if (err) return console.log(err)
    db = database.db('typeDb')
})

/* GET ALL */
router.get('/', (req, res) => {
    db.collection('characters').find().toArray((err, result) => {
        if (err) return
        res.json(result)
    })
})

/* GET BY ID */
router.post('/getById', (req, res) => {
    var query = { id: parseInt(req.body.id) }
    db.collection('characters').find(query).toArray((err, result) => {
        console.log(result);
        if (err) return
        res.json(result)
    })
})

module.exports = router;