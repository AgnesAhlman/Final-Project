import fs from 'fs';
import { exit } from 'process';
import mongoose from 'mongoose';
import path from 'path';
import { Poster } from '../models/posters.model';
import { getConnectionUrl } from '../utils';

const mongoUrl = getConnectionUrl();
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const getPosters = async () => {
  try {
    const fileName = path.join(__dirname, '../data/database_posters.json');

    // Get posters from DB
    console.log('Getting posters from DB...');
    const posters = await Poster.find({});

    // Write the data to a file
    console.log(`writting data to ${fileName}...`);
    fs.writeFileSync(fileName, JSON.stringify(posters, null, 2));

    exit(0);
  } catch (err) {
    console.warn('something went wrong with getPosters');
    console.error(err);
    exit(1);
  }
};

getPosters();
