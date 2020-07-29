import React from 'react';
import LoginForm from './LoginForm';
import CenterLayout from '../../Layout/CenterLayout';
import { Link, NewLink } from '../../components';

class Home extends React.Component {

  render () {
    return (<>
      <CenterLayout>
        <LoginForm/>
        <Link>Register</Link>
        <Link>Bin</Link>
        <Link>Customer</Link>
        <Link>Create Invoice</Link>
        <div>-------------------------------------------</div>
        <NewLink to="/regi">Register</NewLink>
        <br />
        <NewLink to="/bin">Bin</NewLink>
        <br />
        <NewLink to="/customer">Customer</NewLink>
        <br />
        <NewLink to="/creinvo">Create Invoice</NewLink>
      </CenterLayout>
    </>);
  }
}

export default Home;
