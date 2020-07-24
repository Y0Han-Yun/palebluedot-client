import React from 'react';
import styled from 'styled-components';
import Text from './Text';

const StyledComponent = styled.a`
  cursor: pointer;
`;

//const MenuItem = ({ children, to }) => (
//  <Link to={to}>{children}</Link>
//);

class Link extends React.Component {

  render () {
    return (
      <StyledComponent>
        <Text sm>
          {this.props.children}
        </Text>
      </StyledComponent>
    );
  }

}

export default Link;
