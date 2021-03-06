import { withRouter } from 'react-router-dom';
import { Text } from './index';
import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  cursor: pointer;  
  width: 100%;
  margin: 0px;
  :hover{
    color: #f6f6f6;
  }
`;

class NewLink extends React.Component {

  constructor () {
    super();
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick () {
    const to = this.props.to;
    this.props.history.push(to);
  }

  render () {
    return (
      <StyledComponent className="link-item" onClick={this.handleLinkClick}>
        <Text sm>
          {this.props.children}
        </Text>
      </StyledComponent>
    );
  }

}

export default withRouter(NewLink);
