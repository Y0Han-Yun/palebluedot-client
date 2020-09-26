import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation/Navigation';

const Container = styled.div``;

class Bin extends React.Component {

  render () {
    return (
      <Container>
        <Navigation/>
      </Container>
    );
  }

}

export default Bin;
