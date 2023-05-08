const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.send("coffee is running")
})



const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.oasvurr.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  catch(error) {
    console.log(error)
  }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`this server runing in at ${port}`)
})