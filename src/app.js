import React from 'react';

import Thing from './components/thing/thing.js';
import './app.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Thing />
      </React.Fragment>
    );
  }
}

export default App;
