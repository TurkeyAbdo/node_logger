const winston = require('winston')

const logger = winston.createLogger({
    level:process.env.LEVEL || 'debug',
    format:winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    ),
    // defaultMeta:{service:'user-service'},
    transports:[
        new winston.transports.Console()
    ],
})

module.exports = logger;