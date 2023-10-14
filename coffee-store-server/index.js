const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;

//middleware

app.use(cors());
app.use(express.json());

//Coffee_Emporium
//ehOldIoj0Eg4uu4P

// const uri =
//   "mongodb+srv://<username>:<password>@cluster0.ymyoldm.mongodb.net/?retryWrites=true&w=majority";
const uri =
  "mongodb+srv://Coffee_Emporium:ehOldIoj0Eg4uu4P@cluster0.ymyoldm.mongodb.net/?retryWrites=true&w=majority";

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
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Coffee making server is running");
});

app.listen(port, () => {
  console.log(`coffee server is running on port: ${port}`);
});