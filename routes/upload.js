var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs = require('fs');

var DIR = '../uploads/';

var upload = multer({dest: DIR});

router.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://valor-software.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    }
});

var upload = multer({ //multer settings
    storage: storage
}).single('file');

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

/** API path that will upload the files */
router.post('/', function(req, res) {

    //res.status(200);

    var success = false;

    //localStorage.setItem('uploadfile-name', req.file.filename);

    upload(req,res,function(err){

        //localStorage.setItem('uploadfile-name2', req.file.filename);

        var upfile = req.file;

        localStorage.setItem('uploadfile-name2.txt', upfile.filename);

        console.log(upfile);

        //alert("Upload "+  +" Success");

        if(err){
            res.json({error_code:1,err_desc:err});
            return;
        }
        res.json({error_code:0,err_desc:null});
    });
});



module.exports = router;