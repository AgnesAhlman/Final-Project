import mongoose from 'mongoose';

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

export const Poster = mongoose.model('Posters', PosterSchema);
