class BmiCalcService {
    constructor() {
        this.performaBmiCalc = (weight, height) => {
            if(height == 0) {
                throw new Error("Height should be greater than 0");
            }

            let w = parseFloat(weight, 10);
            let h = parseFloat(height, 10);
            
            return (w / h / h * 10000).toFixed(2);
        }
    }
}

exports.BmiCalcService = BmiCalcService;
