const nano = require("nano")(process.env.COUCHDB_URL);

// Function to get DB instance
const getDb = (dbName) => {
  if (!dbName) {
    throw new Error("DB name is required");
  }
  return nano.db.use(dbName);
};

module.exports = { getDb };
