import bcrypt from 'bcrypt';
import { User } from '../models/user.model';

export const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const salt = bcrypt.genSaltSync();
  try {
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 8 characters long'
      });
    } else {
      const newUser = await new User({
        email,
        password: bcrypt.hashSync(password, salt)
      }).save();

      return res.status(201).json({
        success: true,
        response: {
          email: newUser.email,
          accessToken: newUser.accessToken,
          id: newUser._id
        }
      });
    }
  } catch (error) {
    // Error code 11000 = duplicate key error
    if (error.name === 'MongoServerError' && error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'User already exists!'
      });
    } else if (error.errors.email) {
      return res.status(400).json({
        success: false,
        message: error.errors.email.message || 'Email validation error...'
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'Unexpected Error...'
      });
    }
  }
};
