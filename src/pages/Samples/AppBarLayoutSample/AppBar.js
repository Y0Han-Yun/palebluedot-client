import React from 'react';
import styled from 'styled-components';
import Text from '../../../components/Text';

const StyledComponent = styled.div`
  ${props => {
    if (props.styledProps.sticky) {
      return `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
      `;
    }
  }}
  box-sizing: border-box;
  padding: 0.5rem;
  display: flex;
  background-color: royalblue;
  color: #FFFFFF;
  .front-section {
    flex-grow: 1;
  }
  .navigation-wrapper {
    display: flex;
    .navigation {
      margin-left: 0.5rem;
      user-select: none;
      cursor: pointer;
    }
  }
`;

class AppBar extends React.Component {

  constructor () {
    super();
    this.rootRef = React.createRef();
  }

  render () {
    const styledProps = {
      sticky: this.props.sticky
    };
    return (
      <StyledComponent
        ref={this.rootRef}
        styledProps={styledProps}>
        <div className="front-section"></div>
        <div className="navigation-wrapper">
          {this.props.navigations.map(navigation => (
            <div
              className="navigation"
              key={navigation.id}
              onClick={() => this.props.onNavigationClick(navigation)}>
              <Text white>{navigation.displayName}</Text>
            </div>
          ))}
        </div>
      </StyledComponent>
    );
  }

}

export default AppBar;
