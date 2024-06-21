const BmiCalcService = require("../../src/service/BmiCalcService").BmiCalcService;

test('test calc for weight = 16.6 and  height = 99.1', () => {
    const weight = 16.6;
    const height = 99.1;
    const bmi = new BmiCalcService().performaBmiCalc(weight, height);
    
    expect(bmi).toEqual("16.90");
});

test('test calc for weight = 16.6 and  height = 0', () => {
    const weight = 16.6;
    const height = 0;
    
    expect(() => {
        new BmiCalcService().performaBmiCalc(weight, height);
    }).toThrow();
});
