import esClient from '../../../config/elasticsearch/esClient';

export default async (id, payload) => {
  payload.updatedAt = new Date();

  const res = await esClient.update({
    index: 'item-v1', //TODO: use env vars
    id: id,
    body: { doc: payload },
  });

  return res;
};
