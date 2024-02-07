const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')


app.use(cors());
app.use(bodyParser.json());
const uri =
  'mongodb+srv://kritikawalia1003:kritikawalia10@cluster0.myqbzuo.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true, 
  tlsAllowInvalidCertificates: true, 
});

client.connect().then(() => {
  console.log('Connected to MongoDB Atlas');
  const database = client.db('list_data');
  const collection = database.collection('failures');

  app.get('/', async (req, res) => {
    const result = await collection.find({}).toArray();
    res.json(result);
  })


  app.post('/', async (req, res) => {
    const {Id, Event, Likes, Rating, Views} = req.body;
    const result = await collection.insertOne({Id, Event, Likes, Rating, Views});
    res.json(result);
  })
}).catch((err) => {
  console.error('Error connecting to MongoDB Atlas', err);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
