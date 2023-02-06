import { Cart } from '../models/cart.model';

export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ owner: res.locals.user._id });

  if (!cart) {
    return res.status(404).json({ message: 'Cart not found', success: false });
  }

  return res.status(200).json({ success: true, response: cart });
};

export const createCart = async (req, res) => {
  try {
    const { items } = req.body;

    const cart = new Cart({
      owner: res.locals.user._id,
      items
    });
    await cart.save();
    return res.status(201).json({
      success: true,
      response: cart
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const updateCart = async (req, res) => {
  const { cartId, items } = req.body;

  try {
    const updatedCart = await Cart.findOneAndUpdate(
      { _id: cartId },
      { $set: { items } },
      { new: true }
    );

    if (updatedCart) {
      // item was updated
      return res.status(200).json({
        success: true,
        res: updatedCart
      });
    } else {
      return res.status(404).json({
        success: false,
        message: 'Cart not found'
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error updating or adding item to cart'
    });
  }
};
