import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  display: inline-block;
  position: relative;
  color: hsl(222, 25%, 14%);

  :after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #F9DC5C;
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);

  }
  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
}
`;

class LineEffect extends React.Component {

  render () {
    return (
      <StyledComponent>
        {this.props.children}
      </StyledComponent>
    );
  }

}

export default LineEffect;
