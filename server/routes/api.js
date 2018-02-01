const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var db;
// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        if (err) return console.log(err);
        db = client.db('biofarma');
        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get products
router.get('/products', (req, res) => {
    connection((db) => {
        db.collection('products')
            .find()
            .toArray()
            .then((products) => {
                response.data = products;
                res.json({response});
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// Get last products
router.get('/lastProducts', (req, res) => {
    connection((db) => {
        db.collection('products')
            .find()
            .sort({_id: -1})
            .limit(3)
            .toArray()
            .then((products) => {
                response.data = products;
                res.json({response});
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;
