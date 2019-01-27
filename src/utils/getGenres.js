'use es6';

export const getGenres = media => {
  const genres = media.reduce((acc, item) => [...acc, ...item.genre], []);
  const genreList = [...new Set(genres)];
  return genreList;
};

export default getGenres;
