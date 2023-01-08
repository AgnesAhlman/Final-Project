import { Poster } from '../mongoose';

import posters from '../data/database_posters.json';

const updatePosters = async () => {
  // await Poster.deleteMany();
  posters.forEach((poster) => {
    const newPoster = new Poster(poster);
    newPoster.save();
  });
};

updatePosters();
