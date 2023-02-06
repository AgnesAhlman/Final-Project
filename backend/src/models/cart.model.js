import mongoose from 'mongoose';

const ObjectID = mongoose.Schema.Types.ObjectId;

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
