import React from 'react';
import LoginForm from './LoginForm';
import { Padding } from '../../components';

class Home extends React.Component {

  render () {
    return (<>
      <Padding>
        <LoginForm/>
      </Padding>
    </>);
  }

}

export default Home;
