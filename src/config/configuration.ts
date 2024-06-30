export default () => ({
  database: {
    host: process.env.MONGO_HOST,
    username: process.env.MONGO_INITDB_ROOT_USERNAME,
    password: process.env.MONGO_INITDB_ROOT_PASSWORD,
  },
  telegram: {
    token: process.env.TELEGRAM_TOKEN,
  },
});
