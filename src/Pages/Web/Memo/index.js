import React from 'react';
import styled from 'styled-components';


const StyledComponent = styled.div``;

class Memo extends React.Component {

  constructor () {
    super();
    this.testRef = React.createRef();
  }

  componentDidMount () {
    window.addEventListener('scroll', event => {
      console.log('window', window.scrollY);
      console.log('h1 - offsetTop', this.testRef.current.offsetTop);
      console.log('h1 - offsetLeft', this.testRef.current.offsetLeft);
    });
  }

  render () {
    return (
      <StyledComponent>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1 ref={this.testRef}>Hello, world!</h1>
      </StyledComponent>
    );
  }
}

export default Memo;