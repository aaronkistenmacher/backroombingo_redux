import { TOGGLE_TILE } from '../ActionTypes';
import tileOptions from './tileOptions';

const resetTiles = () => {
  const options = [...tileOptions];
  const tiles = [];

  for (let i = 0; i < 25; i += 1) {
    tiles.push({
      id: i,
      text: i !== 12
        ? options.splice(Math.floor(Math.random() * options.length), 1)[0]
        : 'FREE',
      free: i === 12,
      checked: i === 12
    });
  }

  return tiles;
};

const defaultState = {
  tiles: resetTiles()
};

const bingo = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_TILE:
      return {
        ...state,
        tiles: state.tiles.map(tile => (
          (!tile.free && tile.id === action.id)
            ? { ...tile, checked: !tile.checked }
            : tile
        ))
      };
    default:
      return state;
  }
};

export default bingo;
