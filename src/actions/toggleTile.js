/* eslint import/prefer-default-export: "off" */

import { TOGGLE_TILE } from '../ActionTypes';

export const toggleTile = id => (
  {
    type: TOGGLE_TILE,
    id
  }
);
