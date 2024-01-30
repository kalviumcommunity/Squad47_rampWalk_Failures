const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

// A singleton to ensure we only start the database once
// assign the MongoMemoryServer instance to mongoServer
let mongoServer;
const URI = 'mongodb+srv://kritikawalia1003:kritikawalia10@cluster0.13foqxq.mongodb.net/';

const startDatabase = async () => {
  // Your code here
  await mongoose.connect(URI);
};

const stopDatabase = async () => {
  // Your code here
  await mongoose.disconnect(URI);
};

const isConnected = () => {
  return mongoose.connection.readyState === 1;
}

module.exports = { startDatabase, stopDatabase, isConnected };
