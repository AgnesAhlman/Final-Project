import { isValidObjectId } from 'mongoose';
import { Poster } from '../models/posters.model';

const mapPosterImgUrls = (posters, protocol, host) => posters.map((poster) => ({
  ...poster.toObject(),
  img: `${protocol}://${host}/images/${poster.img}`,
  roomImg: `${protocol}://${host}/images/${poster.roomImg}`
}));

export const getPosters = async (req, res) => {
  try {
    const posters = await Poster.find();

    const posterWithCorrectImage = mapPosterImgUrls(posters, req.protocol, req.headers.host);

    return res.status(200).json({
      success: true,
      response: posterWithCorrectImage
    });
  } catch (err) {
    return res.status(404).json(err);
  }
};

export const getPosterById = async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid id'
      });
    }

    const singlePoster = await Poster.findById(req.params.id);

    // If single poster was not found, return a 404 error
    if (!singlePoster) {
      return res.status(404).json({
        success: false,
        message: 'Could not find poster'
      });
    }

    const [poster] = mapPosterImgUrls([singlePoster], req.protocol, req.headers.host);

    return res.status(200).json({
      success: true,
      response: poster
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};
