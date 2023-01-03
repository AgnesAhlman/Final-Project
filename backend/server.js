/* eslint-disable object-shorthand */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import PosterData from './data/posters.json';
// import mongoose from 'mongoose';
import { isValidObjectId, mongoose } from 'mongoose';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
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

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },

  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex')
  }
});

const User = mongoose.model('User', UserSchema);

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const salt = bcrypt.genSaltSync();
    if (password.length < 8) {
      res.status(400).json({
        success: false,
        response: 'Password must be at least 8 characters long'
      });
    } else {
      const newUser = await new User({
        username: username,
        password: bcrypt.hashSync(password, salt)
      }).save();
      res.status(201).json({
        success: true,
        response: {
          username: newUser.username,
          accessToken: newUser.accessToken,
          id: newUser._id
        }
      });
    }
  } catch (error) {
    // Error code 11000 = duplicate key error
    if (error.name === 'MongoServerError' && error.code === 11000) {
      console.error(error);
      res.status(400).json({
        success: false,
        response: 'User already exists!'
      });
    } else {
      console.warn(error.name, error.code);
      res.status(500).json({
        success: false,
        response: 'Unexpected Error...'
      });
    }
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        success: true,
        response: {
          username: user.username,
          id: user._id,
          accessToken: user.accessToken
        }
      });
    } else {
      res.status(400).json({
        success: false,
        response: "Credentials didn't match"
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      response: error
    });
  }
});

const authenticateUser = async (req, res, next) => {
  const accessToken = req.header('Authorization');
  try {
    const user = await User.findOne({ accessToken: accessToken });
    if (user) {
      next();
    } else {
      res.status(401).json({
        response: 'Please log in',
        success: false
      });
    }
  } catch (error) {
    res.status(500).json({
      response: ' Could not authenticate the user...',
      success: false
    });
  }
};

const ObjectID = mongoose.Schema.Types.ObjectId;

const CartSchema = new mongoose.Schema(
  {
    owner: {
      type: ObjectID,
      required: true,
      ref: 'User'
    },
    poster: [
      {
        posterId: {
          type: ObjectID,
          ref: 'Poster',
          required: true
        },

        quantity: {
          type: Number,
          required: true,
          min: 1,
          default: 1
        }
      }
    ],
    bill: {
      type: Number,
      required: true,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

const Cart = mongoose.model('Cart', CartSchema);

app.get('/cartPosters', authenticateUser);
app.get('/cartPosters', async (req, res) => {
  const cartPosters = await Cart.find({});
  res.status(200).json({ success: true, response: cartPosters });
});

app.post('/posters', async (req, res) => {
  try {
    const newPoster = new Poster({
      ...req.body,
      owner: req.user._id
    });
    await newPoster.save();
    res.status(201).send(newPoster);
  } catch (error) {
    console.log({ error });
    res.status(400).send({ message: 'error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
