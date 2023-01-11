import { Poster } from '../mongoose';

import posters from '../data/database_posters.json';

const updatePosters = async () => {
  for await (const poster of posters) {
    const { _id, ...rest } = poster;

    const query = rest;

    const options = {
      upsert: true,
      new: true
    };

    console.log(_id, query, options);

    // Finding document object using doc _id
    const update = await Poster.findByIdAndUpdate(_id, query, options);

    console.log(update);
  }

  process.exit(0);
};

updatePosters();
