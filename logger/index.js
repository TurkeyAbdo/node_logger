const { createLogger, format, transports } = require('winston');

const logFormat = format.printf(({ level, message, timestamp ,stack}) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

const logger = createLogger({
    level:process.env.LEVEL || 'debug',
    format:format.combine(
        format.colorize(),
        format.timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
        format.errors({stack:true}),
        logFormat,
    ),
    defaultMeexta:{service:'user-service'},
    transports:[
        new transports.Console()
    ],
})

module.exports = logger;