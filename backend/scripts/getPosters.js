import fs from 'fs';
import { exit } from 'process';
import { Poster } from '../mongoose';

const getPosters = async () => {
  try {
    const fileName = 'data/database_posters.json';

    // Get posters from DB
    const posters = await Poster.find({});
    console.log(`Successfully managed to get ${posters.length} posters from the database`);

    // Write the data to a file
    fs.writeFileSync(fileName, JSON.stringify(posters, null, 2));
    console.log(`Successfully wrote the data to ${fileName}`);
    exit(0);
  } catch (err) {
    console.warn('something went wrong with getPosters');
    console.error(err);
    exit(1);
  }
};

getPosters();
