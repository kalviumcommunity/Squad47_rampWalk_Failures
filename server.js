const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');
const Joi = require('joi');

const app = express();


const userSchema = Joi.object({
  Id: Joi.number().required(),
  Event: Joi.string().required(),
  Likes: Joi.number().required(),
  Rating: Joi.number().required(),
  Views: Joi.number().required(),
});

app.use(cors());
app.use(bodyParser.json());

const uri = 'mongodb+srv://kritikawalia1003:kritikawalia10@cluster0.myqbzuo.mongodb.net/list_data?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



client.connect()
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    const database = client.db('list_data');
    const collection = database.collection('failures');


    app.get('/', async (req, res) => {
      try {
        const result = await collection.find({}).toArray();
        res.json(result);
      } catch (error) {
        console.error('Error retrieving documents:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    });

    app.put('/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const { Id, Event, Likes, Rating, Views } = req.body;
        const result = await collection.updateOne({ _id: ObjectId(id) }, { $set: { Id, Event, Likes, Rating, Views } });
        res.json(result);
      } catch (error) {
        console.error('Error updating document:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    });



    app.post('/users', async (req, res) => {
      try {
        const { error, value } = userSchema.validate(req.body);
        if (error) {
          console.log(error.details);
          return res.status(400).json({ error: error.details[0].message });
        }
        const { Id, Event, Likes, Rating, Views } = req.body;
        const result = await collection.insertOne({ Id, Event, Likes, Rating, Views });
        res.json(result);
      } catch (error) {
        console.error('Error inserting document:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    });
  })


  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas', err);
  });

  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

