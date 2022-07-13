const logger = require('./logger')

logger.info('text info',{meta1:'what is a meta data'})
logger.warn('text warn')
logger.error('text error')
logger.debug('text debug')
logger.error(new Error("something went wrong"))