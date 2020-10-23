import React from 'react';

class MousePosition extends React.Component {

  constructor () {
    super();
    this.setMousePosition = this.setMousePosition.bind(this);
    this.state = {
      x: 0,
      y: 0
    };
  }

  componentDidMount () {
    document.addEventListener('mousemove', this.setMousePosition);
  }

  componentWillUnmount () {
    document.removeEventListener('mousemove', this.setMousePosition);
  }

  setMousePosition (event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render () {
    return (<>
      {this.props.children({ x: this.state.x, y: this.state.y })}
    </>);
  }

}

export default MousePosition;
