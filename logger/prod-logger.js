const { createLogger, format, transports } = require('winston');
const {timestamp,combine, errors,json} = format;

const buildProdLogger = () => {

    return createLogger({
        level:process.env.LEVEL || 'debug',
        format:format.combine(
            // format.colorize(), // dont need it a production logger cause json loggin is not going to read it 
            timestamp(), // need the exact time stamps 
            errors({stack:true}),
            json()
        ),
        defaultMeexta:{service:'user-service'},
        transports:[
            new transports.Console()
        ],
    })
}

module.exports = buildProdLogger;

