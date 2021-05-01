/* eslint-disable no-unused-vars */
import esClient from './esClient';
import logger from '../logger';

export default class EsIndexManager {
  constructor(indexName) {
    this.indexName = indexName;
  }

  async createIndex(mapping) {
    const isExists = await esClient.indices.exists({
      index: this.indexName,
    });

    if (!isExists) {
      await esClient.indices.create({
        index: this.indexName,
      });
      logger.info(`ES - creating index : ${this.indexName}`);

      await esClient.indices.putMapping(
        {
          index: this.indexName,
          body: {
            properties: mapping,
          },
        },
        (err, res, status) => {
          if (err) {
            logger.error(
              `ES - putting map for index ${this.indexName} failed | ${err}`
            );
          } else {
            logger.info(`ES - putting map for index ${this.indexName} success`);
          }
        }
      );
    } else {
      logger.info(`ES - index ${this.indexName} already exists`);
    }
  }
  async indexExists() {
    return await esClient.indices.exists({
      index: this.indexName,
    });
  }
  async deleteIndex() {
    return await esClient.indices.delete({ index: this.indexName });
  }
  async addDocument(payload) {
    await esClient.index(
      {
        index: this.indexName,
        refresh: true,
        body: payload,
      },
      // eslint-disable-next-line no-unused-vars
      (err, res) => {
        if (err) {
          logger.error(`ES - add/update document failed | ${err}`);
        } else {
          logger.info(`ES - add/update document success`);
        }
      }
    );
  }
}
