import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  type: primary;

`;

const Button = styled.button`
  type: secondary;
  
`;

class Button extends React.Component {
    render() {
        return (<>
          <Button type="primary">Click me!</Button>
          <Button type="secondary">Click me!</Button>
        </>);
    }
}

export default Button;