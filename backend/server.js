import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { isValidObjectId } from 'mongoose';
import bcrypt from 'bcrypt';

import { Poster, User, Cart } from './mongoose';

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello Technigo!');
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const salt = bcrypt.genSaltSync();
  try {
    if (password.length < 8) {
      res.status(400).json({
        success: false,
        response: 'Password must be at least 8 characters long'
      });
    } else {
      const newUser = await new User({
        username,
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

// Middleware
const authenticateUser = async (req, res, next) => {
  const accessToken = req.header('Authorization');
  try {
    const user = await User.findOne({ accessToken });
    if (user) {
      res.locals.user = user;
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

// TODO get the users cart
app.get('/cart', authenticateUser, async (req, res) => {
  const cart = await Cart.findOne({ owner: res.locals.user._id });

  console.log(cart);

  if (!cart) {
    return res.status(404).json({ message: 'Cart not found', success: false });
  }

  res.status(200).json({ success: true, response: cart });
});

app.post('/cart', authenticateUser, async (req, res) => {
  try {
    const items = req.body;
    const cart = new Cart({
      owner: res.locals.user._id,
      items
    });
    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    console.log({ error });
    res.status(400).json({ message: 'error' });
    console.log(error);
  }
});

// UPDATE CART
// This route handles patch requests to the '/cart'endpoint
// and updates the items in the cart for the authenticated user.
// It uses the findOneAndUpdate method to update the 'items' field in the Cart model
// for the owner specified in the request.

app.patch('/cart', authenticateUser, async (req, res) => {
  const { user } = res.locals;
  const items = req.body;
  console.log('item', items);

  try {
    const updatedCart = await Cart.findOneAndUpdate(
      { owner: user._id },
      { $set: { items } },
      { new: true }
    );

    if (updatedCart) {
      // item was updated
      res.status(200).json({
        success: true,
        res: updatedCart
      });
    } else {
      res.status(404).json({
        success: false,
        res: 'Cart not found'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      res: 'Error updating or adding item to cart'
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
