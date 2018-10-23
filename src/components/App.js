import React, { Component } from 'react';
import Bingo from '../containers/Bingo';
import GameControls from '../containers/GameControls';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dimensions: {
        width: -1,
        height: -1
      }
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount () {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions () {
    this.setState({ dimensions: { width: window.innerWidth, height: window.innerHeight } });
  }

  render () {
    const { dimensions } = this.state;
    return (
      <div className="App">
        <div className="CardContainer">
          <Bingo maxDimensions={dimensions} />
        </div>
        <div className="ControlsContainer">
          <GameControls />
        </div>
      </div>
    );
  }
}
export default App;
