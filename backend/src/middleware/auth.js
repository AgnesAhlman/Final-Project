import { User } from '../models/user.model';

// Middleware
export const authenticateUser = async (req, res, next) => {
  const accessToken = req.header('Authorization');
  try {
    const user = await User.findOne({ accessToken });
    if (user) {
      res.locals.user = user;
      next();
    } else {
      return res.status(401).json({
        message: 'Please log in',
        success: false
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Could not authenticate the user...',
      success: false
    });
  }
};
