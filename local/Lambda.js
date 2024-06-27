const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");

const Handler = require("../src/api/Handler").Handler;
const BmiCalcService = require("../src/service/BmiCalcService").BmiCalcService;
const handler = new Handler(new BmiCalcService());

let app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.route("/bmi")
    .get(function(req, res) {
        async function handleCalc() {
            //Simulates the amazon api gateway event
            let event = {
                queryStringParameters: {
                    "weight": req.query["weight"],
                    "height": req.query["height"]
                }
            };

            const bmi = await handler.handleCalculation(event);
            res.status(bmi.statusCode)
                .json(bmi.body);
        };

        handleCalc();
    });

let server = http.createServer(app);

const port = 4000;
server.listen(port);

console.log(`Server is up at port ${port}`);

module.exports = app;
