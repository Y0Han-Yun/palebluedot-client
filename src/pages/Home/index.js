import React from 'react';
import LoginForm from './LoginForm';
import CenterLayout from '../../Layout/CenterLayout';
import Link from '../../components/Link';

class Home extends React.Component {

  render () {
    return (<>
      <CenterLayout>
        <LoginForm/>
        <Link>여기를 누르세요</Link>
      </CenterLayout>
    </>);
  }
}

export default Home;
