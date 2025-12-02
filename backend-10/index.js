const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = 8000;
const app = express();
app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello world now");
});
app.listen(port, () => {
  console.log(`server is running ${port}`);
});

const uri =
  "mongodb+srv://backend:IszRVJ4sOeysKHHF@cluster0.cyslekw.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database=client.db('pet-services')
    const petServices = database.collection('services');

// post services to DB
    app.post("/services", async (req, res) => {
      const date=new Date()
      const data=req.body;
      data.createAt=date
      const result=await petServices.insertOne(data)
      res.send(result)
    });

    // get services from DB
    app.get('/services',async(req,res)=>{
      const result=await petServices.find().toArray();
      res.send(result)
      console.log(result);

    })

    // get one item for id

    app.get('/services/:id',async(req,res)=>{
      const id=req.params
      console.log(id);
      const query={_id: new ObjectId(id)}
      const result=await petServices.findOne(query)
      res.send(result)
      console.log(query);

    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

run().catch(console.dir);
