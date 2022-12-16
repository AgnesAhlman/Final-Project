const BASE_URL = 'http://localhost:8080';

export const fetchPosters = async () => {
  try {
    const res = await fetch(`${BASE_URL}/posters`);
    const data = await res.json();
    return data;
  } catch (error) {
    return console.error(error);
  }
};
