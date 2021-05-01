import esClient from '../../../config/elasticsearch/esClient';

export default async (payload) => {
  const res = await esClient.index({
    index: 'item-v1', //TODO: use env vars
    refresh: true,
    body: payload,
  });

  return res;
};
