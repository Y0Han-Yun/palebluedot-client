import React from 'react';
import LoginForm from './LoginForm';
import CenterLayout from '../../Layout/CenterLayout';


class Home extends React.Component {

  render () {
    return (
      <CenterLayout>
        <LoginForm/>
      </CenterLayout>
    );
  }

}

export default Home;
