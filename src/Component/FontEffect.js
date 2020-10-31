import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  color: hsl(222, 25%, 14%);
  transition: transform 0.2s ease, color 0.2s ease;

  :hover {
    transform: translateX(4px);
    color: hsl(243, 80%, 62%);
  }

`;



class FontEffect extends React.Component {

  render () {
    return (
      <StyledComponent>
            {this.props.children}
      </StyledComponent>
    );
  }

}

export default FontEffect;
