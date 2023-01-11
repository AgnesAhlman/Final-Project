import mongoose from 'mongoose';
import crypto from 'crypto';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/final-project';
console.log(`connecting to ${mongoUrl}`);

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;
const ObjectID = mongoose.Schema.Types.ObjectId;

const PosterSchema = new mongoose.Schema({
  group: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  roomImg: {
    type: String,
    required: true
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

const CartSchema = new mongoose.Schema(
  {
    owner: {
      type: ObjectID,
      required: true,
      ref: 'User'
    },
    items: [
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
    ]
  },
  {
    timestamps: true
  }
);

export const Cart = mongoose.model('Cart', CartSchema);

export const User = mongoose.model('User', UserSchema);

export const Poster = mongoose.model('Posters', PosterSchema);
