/**
 * use environment variable API_URL to connect to the API,
 * if it doesn't exist default to localhost
 */
const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

// Singleton
let accessToken = null;
export const setAccessToken = (token) => {
  accessToken = token;
};

export const fetchPosters = async () => {
  try {
    const res = await fetch(`${BASE_URL}/posters`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const fetchPostersById = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/posters/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// Login
export const login = async (mode, username, password) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    };
    const res = await fetch(`${BASE_URL}/${mode}`, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// Fetch Cart
export const fetchCart = async () => {
  try {
    const res = await fetch(`${BASE_URL}/cart`, {
      headers: {
        Authorization: accessToken,
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return console.error(error);
  }
};

// Save Cart
export const createCart = async (items) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        Authorization: accessToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items
      })
    };
    const res = await fetch(`${BASE_URL}/cart`, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// Update cart
export const updateCart = async (cartId, items) => {
  try {
    const options = {
      method: 'PATCH',
      headers: {
        Authorization: accessToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cartId,
        items
      })
    };

    const res = await fetch(`${BASE_URL}/cart`, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
