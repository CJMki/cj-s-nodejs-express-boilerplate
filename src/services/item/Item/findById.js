import esClient from '../../../config/elasticsearch/esClient';
import NotFoundError from '../../../exceptions/NotFoundError';

export default async (id) => {
  const doc = await esClient.search({
    index: 'item-*',
    body: {
      query: {
        match: {
          _id: id,
        },
      },
    },
  });

  if (doc.hits.hits === undefined || doc.hits.hits.length != 0) {
    return { data: doc.hits.hits };
  } else {
    throw new NotFoundError('resource not found');
  }
};
