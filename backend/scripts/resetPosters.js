import { Poster } from '../mongoose';

import posters from '../data/posters.json';

const resetDataBase = async () => {
  await Poster.deleteMany();
  posters.forEach((poster) => {
    const newPoster = new Poster(poster);
    newPoster.save();
  });
};

resetDataBase();
