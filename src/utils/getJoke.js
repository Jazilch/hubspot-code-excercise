'use es6';

import axios from 'axios';

export const getJoke = () =>
  axios.get('https://api.icndb.com/jokes/random').then(response => response.data.value.joke);

export default getJoke;
