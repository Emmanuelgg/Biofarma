const express = require('express');
const fileUpload = require('express-fileupload');
const router = express.Router();
const app = express();
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

//Upload files
router.use(fileUpload());
router.post('/uploadFiles', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('./assets/resources/productImages/', function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});

module.exports = router;
