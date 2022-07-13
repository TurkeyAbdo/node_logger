const { createLogger, format, transports } = require('winston');

const buildDevLogger = () => {
    const logFormat = format.printf(({ level, message, timestamp ,stack}) => {
    return `${timestamp} ${level}: ${stack || message}`;
    });

    return createLogger({
        level:process.env.LEVEL || 'debug',
        format:format.combine(
            format.colorize(),
            format.timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
            format.errors({stack:true}),
            logFormat,
        ),
        // defaultMeexta:{service:'user-service'}, don't need it in the devlopment logger
        transports:[
            new transports.Console()
        ],
    })
}



module.exports = buildDevLogger;