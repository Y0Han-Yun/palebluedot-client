import React from 'react';
import styled from 'styled-components';
import Text from './Text';

const StyledComponent = styled.a`
  cursor: pointer;  
`;

class Link extends React.Component {

  constructor(props){
    super(props)
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick(){
    this.props.history.push('/regi');
  }


  render () {
    return (
      <StyledComponent onClick={this.handleLinkClick}>
        <Text sm>
          {this.props.children}
        </Text>
      </StyledComponent>
    );
  }

}

export default Link;
