import mongoose from 'mongoose';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/final-project';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

// export const Poster = mongoose.model('Poster', {
//   posterID: Number,
//   group: Number,
//   title: String,
//   color: String,
//   description: String,
//   img: String,
//   price: Number,
//   size: String
// });

/// Monday
const PosterSchema = new mongoose.Schema({
  poster: {
    _id: String,
    posterID: Number,
    group: Number,
    title: String,
    color: String,
    description: String,
    img: String,
    price: Number,
    size: String
  }
});

export const Poster = mongoose.model('Posters', PosterSchema);
