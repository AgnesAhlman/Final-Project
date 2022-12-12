import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import PosterData from "./data/posters.json"

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/final-project";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

const Poster = mongoose.model("Poster", {
  posterID: Number,
  group: Number,
  title: String,
  color: String,
  description: String,
  img: String,
  price: String,
  size: String 
});

/////// Monday
// const PosterSchema = new mongoose.Schema({
//  poster: {
//     type: String,
//     required: true,
//     unique: true
//   }

// });

// const Poster = mongoose.model("Posters", PosterSchema);
///////
// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello Technigo!");
});

app.get("/posters", async (req, res) => {
  const posters = await Poster.find().then(posters =>{
    res.json(posters)
  })
   
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
