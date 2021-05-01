import es from 'elasticsearch';

const options = {
  host: [
    {
      host: process.env.ES_DB_URL,
      auth: `${process.env.ES_DB_USER}:${process.env.ES_DB_PASSWORD}`,
      protocol: 'http',
      port: process.env.ES_DB_PORT,
    },
  ],
};

export default new es.Client(options);
