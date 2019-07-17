var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var VerifyToken = require(__root + 'routes/auth/VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
var Request = require('./Type');

// CREATES A NEW Request
router.post('/', VerifyToken, function (req, res) {
  Request.create({
            name : req.body.name
        },
        function (err, request_type) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(request_type);
        });
});

// RETURNS ALL THE request_types IN THE DATABASE
router.get('/', function (req, res) {
  Request.find({}, function (err, request_types) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(request_types);
    });
});

// // GETS A SINGLE Request FROM THE DATABASE
// router.get('/:id', function (req, res) {
//   Request.findById(req.params.id, function (err, request) {
//         if (err) return res.status(500).send("There was a problem finding the user.");
//         if (!request) return res.status(404).send("No user found.");
//         res.status(200).send(request);
//     });
// });

// // DELETES A Request FROM THE DATABASE
// router.delete('/:id', function (req, res) {
//   Request.findByIdAndRemove(req.params.id, function (err, request) {
//         if (err) return res.status(500).send("There was a problem deleting the request.");
//         res.status(200).send("User: "+ request.type +" was deleted.");
//     });
// });

// // UPDATES A SINGLE Request IN THE DATABASE
// // Added VerifyToken middleware to make sure only an authenticated user can put to this route
// router.put('/:id', /* VerifyToken, */ function (req, res) {
//   Request.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
//         if (err) return res.status(500).send("There was a problem updating the user.");
//         res.status(200).send(user);
//     });
// });


module.exports = router;
