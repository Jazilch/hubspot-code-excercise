'use es6';

import mediaJson from '../data/data.json';

export default function getMedia() {
  return new Promise((resolve, reject) => {
    try {
      resolve(mediaJson);
    } catch (error) {
      reject(error);
    }
  });
}
