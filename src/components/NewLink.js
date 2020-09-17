import { withRouter } from 'react-router-dom';
import { Text } from './index';
import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.p`
  cursor: pointer;  
  padding: 20px 20px 20px 20px;
  margin: 0px;

  :hover{
    background-color: #f6f6f6;
  }
`;

class NewLink extends React.Component {

  constructor (props) {
    super(props);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick () {
    const to = this.props.to;
    this.props.history.push(to);
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

export default withRouter(NewLink);
