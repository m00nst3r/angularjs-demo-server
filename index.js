var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var scenarios = require('./db/scenarios');
var scenario = require('./db/scenario');
var scopes = require('./db/scopes');
var stressLevels = require('./db/stressLevels');
var riskNames = require('./db/riskNames');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log('Something is happening.');
    next();
});

router.route('/scopes')
    .get(function(req, res){
        res.json(scopes);
    });

router.route('/stressLevels')
    .get(function(req, res){
        res.json(stressLevels);
    });

router.route('/riskNames')
    .get(function(req, res){
        res.json(riskNames);
    });

router.route('/scenarios')
    .get(function(req, res){
        res.json(scenarios);
    });
router.route('/scenario/:id')
    .get(function(req, res){
        var id = req.params.id;

        for (var i = 0; i < scenarios.RiskScenarios.length; i++) {
            var obj = scenarios.RiskScenarios[i];
            if (obj.id == id){
                res.json(obj);
            }
        }
        res.send(404);
    });

router.route('/bears')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        var bear = new Bear();      // create a new instance of the Bear model
        bear.name = req.body.name;  // set the bears name (comes from the request)

        // save the bear and check for errors
        bear.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Bear created!' });
        });

    })
    .get(function(req, res){
        console.log('woohooo!');
        res.json(scenario);
    });

router.get('/', function(req, res){
    res.json({
        message: 'hooray! welcome to our api!'
    })
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);