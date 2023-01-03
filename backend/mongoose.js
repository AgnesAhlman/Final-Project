import mongoose from 'mongoose';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/final-project';
console.log(`connecting to ${mongoUrl}`);

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const PosterSchema = new mongoose.Schema({
  poster: {
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
