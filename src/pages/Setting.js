import { withRouter } from 'react-router-dom';
import React from 'react';
import Navigation from '../components/Navigation';


class Setting extends React.Component {

  render () {
    return (<>
      <Navigation/>
    </>);
  }

}

export default withRouter(Setting);
