import Tone from 'tone';
// eslint-disable-next-line camelcase
import { unstable_createResource } from 'react-cache';

export const bufferResource = unstable_createResource(
  url =>
    new Promise(resolve => {
      if (process.env.NODE_ENV !== 'test') {
        const buffer = new Tone.Player(url, () => {
          resolve(buffer);
        }).toMaster();
      }
    }),
);
