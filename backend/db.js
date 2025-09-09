const nano = require("nano")(process.env.COUCHDB_URL);

const getDb = (dbName) => {
  if (!dbName) {
    throw new Error("DB name is required");
  }
  return nano.db.use(dbName);
};

module.exports = { getDb };
