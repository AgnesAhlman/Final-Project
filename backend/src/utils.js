export const getConnectionUrl = () => {
  const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT } = process.env;

  let mongoUrl = 'mongodb://localhost/final-project';
  if (MONGO_USERNAME && MONGO_PASSWORD && MONGO_HOST && MONGO_PORT) {
    const username = encodeURIComponent(MONGO_USERNAME);
    const password = encodeURIComponent(MONGO_PASSWORD);

    mongoUrl = `mongodb://${username}:${password}@${MONGO_HOST}:${MONGO_PORT}/final-project`;
  }

  console.log(`Connecting to ${MONGO_HOST || 'localhost'}`);

  return mongoUrl;
};
