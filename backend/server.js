import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import PosterData from './data/posters.json';
import { isValidObjectId } from 'mongoose';
import { Poster } from './mongoose';

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(bodyParser.json());

// Start defining your routes here
app.get('/', (req, res) => {
  res.send('Hello Technigo!');
});

app.get('/posters', async (req, res) => {
  try {
    const posters = await Poster.find();
    res.status(200).json(posters);
  } catch (err) {
    res.status(404).json(err);
  }
});

app.get('/posters/:id', async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        body: {
          message: 'invalid id'
        }
      });
    }

    console.log(req.params.id);

    const singlePoster = await Poster.findById(req.params.id);
    console.log(singlePoster);

    // If single poster was not found, return a 404 error
    if (!singlePoster) {
      return res.status(404).json({
        success: false,
        body: {
          message: 'could not find poster'
        }
      });
    }

    res.status(200).json(singlePoster);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
