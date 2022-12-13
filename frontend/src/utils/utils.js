const BASE_URL = 'http://localhost:8080';

export const getPosters = () => {
  return fetch(`${BASE_URL}/posters`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
};
