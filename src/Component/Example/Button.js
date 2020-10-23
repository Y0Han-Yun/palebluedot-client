import React from 'react';
import styled from 'styled-components';
import Button1 from 'src/Component/Example/Button1';

const StyledComponent = styled.div`
  // background-color: red;
  display: flex;
  width: 100%;
  height: 100%;
`;

class Button extends React.Component {
  render () {
    return (
      <StyledComponent>
       <Button1 Title= "Yohan" Sub="Second"/>
      </StyledComponent>
    );
  }
}

export default Button;