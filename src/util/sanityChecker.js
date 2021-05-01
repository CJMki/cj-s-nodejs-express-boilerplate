import esClient from '../config/elasticsearch/esClient';
import logger from '../config/logger';

/**
 * module to run sanity checks on outside connections
 */
const checkEs = async () => {
  try {
    await esClient.ping();
    logger.info('ES : connection established');
  } catch (err) {
    logger.error(`ES : connection failed | ${err}`);
  }
};

const initiate = () => {
  checkEs();
};

export default { initiate };
