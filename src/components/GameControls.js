import React from 'react';
import PropTypes from 'prop-types';
import './GameControls.css';

const GameControls = ({ resetClickHandler }) => (
  <div className="GameControls">
    <button onClick={() => resetClickHandler()} type="button">
      {''}
    </button>
  </div>
);

GameControls.propTypes = {
  resetClickHandler: PropTypes.func.isRequired
};

export default GameControls;
