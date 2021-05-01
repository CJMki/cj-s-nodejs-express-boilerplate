import esClient from '../../config/elasticsearch/esClient';
import NotFoundError from '../../exceptions/NotFoundError';

export default async (term) => {
  const doc = await esClient.search({
    index: 'item-v1', //TODO: use env vars
    body: {
      query: {
        multi_match: {
          query: term,
          type: 'bool_prefix',
          fields: '*.raw*',
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
