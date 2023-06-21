const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());
const port = 3000;

// API endpoint for data insertion
app.post('/insertData', async (req, res) => {
  const { mongoURL, data } = req.body;

  try {
    // Connect to the MongoDB database
    const client = new MongoClient(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    // Show a message if connected successfully
    console.log('Connected to MongoDB');

    // Select the database and collection to insert the data
    const db = client.db();
    const collection = db.collection('LockUpStore');

    // Insert the data into the collection
    await collection.insertOne({ data });

    // Close the database connection
    await client.close();

    res.status(200).json({ message: 'Data inserted successfully!' });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ message: 'Error inserting data' });
  }
});


// Get the latest passwords
app.get('/getData', async (req, res) => {
  const { mongoURL } = req.body;

  try {
    // Connect to the MongoDB database
    const client = new MongoClient(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    // Show a message if connected successfully
    console.log('Connected to MongoDB');

    // Select the database and collection to insert the data
    const db = client.db();
    const collection = db.collection('LockUpStore');

    // Get the last inserted document from the collection
    await collection.find().sort({ $natural: -1 }).limit(1).toArray()
      .then((document) => {
        res.json(document);
      })

    // Close the database connection
    await client.close();

  } catch (error) {
    console.error('Error getting data:', error);
    res.status(500).json({ message: 'Error getting data' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
