import bcrypt from 'bcrypt';
import { User } from '../models/user.model';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      return res.status(200).json({
        success: true,
        response: {
          email: user.email,
          id: user._id,
          accessToken: user.accessToken
        }
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Credentials didn't match"
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
