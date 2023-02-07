import mongoose from 'mongoose';
import { Poster } from '../models/posters.model';

import posters from '../data/database_posters.json';
import { getConnectionUrl } from '../utils';

const mongoUrl = getConnectionUrl();
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const updatePosters = async () => {
  for await (const poster of posters) {
    const { _id, ...rest } = poster;

    const query = rest;

    const options = {
      upsert: true,
      new: true
    };

    // Finding document object using doc _id
    await Poster.findByIdAndUpdate(_id, query, options);
  }

  process.exit(0);
};

updatePosters();
