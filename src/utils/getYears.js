'use es6';

export const getYears = media => {
  const years = media.reduce((acc, item) => [...acc, item.year], []);
  const yearsList = [...new Set(years)];
  return yearsList;
};

export default getYears;
