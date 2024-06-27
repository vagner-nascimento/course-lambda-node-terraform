const Result = require("./Results");
const logger = require("../logger/Logger").Logger;

class Handler {
    constructor(bmiCalcService) {
        this.bmiCalcService = bmiCalcService;
        this.handleCalculation = async (event, context, callback) => {
            const callName = `${this.constructor.name}.handleCalculation`;
            
            logger.info(`${callName} - entered with those params "${JSON.stringify(event.queryStringParameters)}"`);
            try {
                let weight = event.queryStringParameters.weight;
                let height = event.queryStringParameters.height;
                if(isNaN(weight) || isNaN(height)) {
                    const message = "weight or height is not a number";
                    logger.error(`${callName} - invalid params "${message}"`);

                    return new Result.BadRequest({ message });
                }

                let res = await this.bmiCalcService.performaBmiCalc(weight, height);
                
                return new Result.Ok({ result: res });
            } catch(e) {
                logger.error(`${callName} - error ${JSON.stringify(e)}`);

                return new Result.InternalServerError(e);
            }
        }
    }
}

exports.Handler = Handler;
