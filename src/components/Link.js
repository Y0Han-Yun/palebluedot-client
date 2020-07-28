import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import { withRouter } from 'react-router';

const StyledComponent = styled.button`
  cursor: pointer;  
`;

class Link extends React.Component {

  constructor (props) {
    super(props);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick () {
    if (this.props.children === 'Home' ) {
      this.props.history.push('/');
    } else if (this.props.children === 'Register') {
      this.props.history.push('/regi');
    } else if (this.props.children === 'Create Invoice' ) {
      this.props.history.push('/creinvo');
    } else if (this.props.children === 'Customer' ) {
      this.props.history.push('/customer');
    } else if (this.props.children === 'Bin' ) {
      this.props.history.push('/bin');
    }
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

export default withRouter(Link);
