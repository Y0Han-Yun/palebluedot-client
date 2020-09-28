import React from 'react';

const withTheme = WrappedComponent => class extends React.Component {

  render () {
    return <WrappedComponent theme = {{
      mainColor: '#E65F5C',
      secondaryColor: '#F1C40F'
    }} {...this.props} />;
  }

};

export default withTheme;
