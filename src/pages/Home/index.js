import React from 'react';
import LoginForm from './LoginForm';
import CenterLayout from '../../Layout/CenterLayout';
import Link from '../../components/Link';

class Home extends React.Component {

  render () {
    return (<>
      <CenterLayout>
        <LoginForm/>
        <Link>Register</Link>
        <Link>Bin</Link>
        <Link>Customer</Link>
        <Link>Create Invoice</Link>
      </CenterLayout>
    </>);
  }
}

export default Home;
