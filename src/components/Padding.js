import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  padding: 10rem;
`;

class Padding extends React.Component {

  render () {
    return <StyledComponent>{this.props.children}</StyledComponent>;
  }

}

export default Padding;
