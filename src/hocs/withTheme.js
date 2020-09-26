import React from 'react';

const withTheme = WrappedComponent => class extends React.Component {

  render () {
    return <WrappedComponent {...this.props} />;
  }

};

export default withTheme;
