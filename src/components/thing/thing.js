import React from 'react';

class Thing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggled: false };
  }

  handleToggle = e => {
    this.setState({ toggled: !this.state.toggled });
  };

  render() {
    return (
      <>
        <h2>Here is the thing: {this.state.toggled.toString()}</h2>
        <button onClick={this.handleToggle}>Toggle It</button>
      </>
    );
  }
}

export default Thing;
