/**
 * use environment variable API_URL to connect to the API,
 * if it doesn't exist default to localhost
 */
const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

export const fetchPosters = async () => {
  try {
    const res = await fetch(`${BASE_URL}/posters`);
    const data = await res.json();
    return data;
  } catch (error) {
    return console.error(error);
  }
};

export const fetchPostersById = async () => {
  try {
    const res = await fetch(`${BASE_URL}/posters/:id`);
    const data = await res.json();
    return data;
  } catch (error) {
    return console.error(error);
  }
};
