const buildDevLogger = require('./dev-logger')
const buildProdLogger = require("./prod-logger");

let logger=  null;

if(process.env.NODE_END === 'development') {
    logger = buildDevLogger();
}else{
    logger = buildProdLogger();
}


module.exports =logger;
