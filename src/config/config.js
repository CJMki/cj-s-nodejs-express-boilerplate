import path from 'path';
import fse from 'fs-extra';

// TODO: handle config valudation errors.

const config = {
  env: {
    isDev: process.env.NODE_ENV === 'development',
    isTest: process.env.NODE_ENV === 'test',
    isProd: process.env.NODE_ENV === 'production',
  },
  port: process.env.PORT,
  storage: {
    base: process.env.STORAGE || path.join(__dirname, '..', '.storage'),
  },
  db: {
    url: process.env.DB_URL,
    password: process.env.DB_PASSWORD,
  },
};

Object.keys(config.storage).forEach((item) =>
  fse.ensureDirSync(config.storage[item])
);

export default config;
