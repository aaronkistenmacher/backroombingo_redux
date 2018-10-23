import React from 'react';
import PropTypes from 'prop-types';
import './BingoCard.css';

const BingoCard = ({ maxDimensions, tiles, tileClickedHandler }) => {
  const vertical = (maxDimensions.height > maxDimensions.width);

  const verticalStyle = {
    width: '75vw',
    height: '87vw'
  };

  const horizontalStyle = {
    width: '75vh',
    height: '87vh'
  };

  return (
    <div style={vertical ? verticalStyle : horizontalStyle} className="BingoCard-Container">
      <div className="BingoCard-Label">
        {
          ['B', 'I', 'N', 'G', 'O'].map(letter => (
            <div key={`Header ${letter}`}>
              <h1>
                {letter}
              </h1>
            </div>
          ))
        }
      </div>
      <div className="BingoCard-Board">
        {
          tiles.map((tile, i) => (
            <div
              key={tile.id}
              className={`BingoCard-Tile${tile.checked ? ' Marked' : ''}${tile.free ? ' Free' : ''}`}
              role="button"
              tabIndex={i}
              onClick={() => tileClickedHandler(tile.id)}
              onKeyDown={() => tileClickedHandler(tile.id)}
            >
              <h5>
                {tile.text}
              </h5>
            </div>))
        }
      </div>
    </div>
  );
};

BingoCard.propTypes = {
  maxDimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }).isRequired,
  tiles: PropTypes.arrayOf(
    PropTypes.shape({

    })
  ).isRequired,
  tileClickedHandler: PropTypes.func.isRequired
};

export default BingoCard;
