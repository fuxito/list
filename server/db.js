const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/';
const client = new MongoClient(uri);

const mongoConnection = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (e) {
    console.log('Not connected to MongoDB');
    console.error(e);
  }
};

module.exports = { mongoConnection, client };
