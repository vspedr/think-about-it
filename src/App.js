import React, { Component } from 'react';
import Sound from 'react-sound';

import Thinker from './components/Thinker';
import xFiles from './assets/xfiles.mp3';

const LIFESPAN = 5;

class App extends Component {
  constructor(props) {
    super(props);
    this.thinkers = [];
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { width, height } = this.state;
    return (
      <div className="App">
        <Thinker
          size={128}
          left={(width/2) - 64}
          top={(height/2) - 64}
          lifespan={LIFESPAN}
        />
      <Sound url={xFiles} playStatus={Sound.status.PLAYING} loop />
      </div>
    );
  }
}

export default App;
