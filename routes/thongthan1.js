var express = require('express');
var router = express.Router();

var Branch = require('../models/branch');

router.get('/', function (req, res, next) {

    Branch.find()
        .exec( function (err, branches) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        //console.log(res);
        res.status(200).json({
            message: 'Successfully load Branch',
            obj: branches
        });
    });
});

module.exports = router;