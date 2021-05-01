import esClient from '../../../config/elasticsearch/esClient';

export default async (id) => {
  const res = await esClient.delete({
    index: 'item-v1', //TODO: use env vars
    id: id,
  });

  return res;
};
