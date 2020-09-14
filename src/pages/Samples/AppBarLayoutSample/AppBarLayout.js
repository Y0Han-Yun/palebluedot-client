import React from 'react';
import styled from 'styled-components';
import AppBar from './AppBar';

const StyledComponent = styled.div`
  .appbar-wrapper {
    height: ${props => props.styledProps.appbarHeight}px;
  }
`;

class AppBarLayoutSample extends React.Component {

  constructor (props) {
    super(props);
    this.appbarRef = React.createRef();
    this.state = {
      appbarHeight: 0
    };
  }

  componentDidMount () {
    const appbarHeight = this.appbarRef.current.rootRef.current.offsetHeight;
    this.setState({ appbarHeight }, () => window.scrollTo(0, 0));
  }

  render () {
    const styledProps = {
      appbarHeight: this.state.appbarHeight,
      sticky: this.props.sticky
    };
    return (
      <StyledComponent styledProps={styledProps}>
        <div className="appbar-wrapper">
          <AppBar
            ref={this.appbarRef}
            sticky={styledProps.sticky}
            navigations={[
              { id: 0, displayName: 'Home', route: '/' },
              { id: 1, displayName: 'About', route: '/about' },
              { id: 2, displayName: 'Contact', route: '/contact' }
            ]}
            onNavigationClick={navigation => console.log(navigation)}
          />
        </div>
        <div className="body-wrapper">
          {this.props.children}
        </div>
      </StyledComponent>
    );
  }

}

export default AppBarLayoutSample;
