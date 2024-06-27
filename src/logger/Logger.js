const winston = require("winston");
const { v4 } = require("uuid");

exports.Logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: 'bmi', correlationId: v4() },
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
        })
    ]
});
