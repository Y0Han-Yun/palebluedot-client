import React from 'react';

class OpenButton extends React.Component {

  render () {
    return <button onClick={this.props.onClick}>open</button>;
  }

}

export default OpenButton;
