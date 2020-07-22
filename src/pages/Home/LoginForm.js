import React from 'react';
import { Text, Input, Link, Button } from '../../components';

class LoginForm extends React.Component {

  render () {
    return (<>
      <Text md>Logo</Text>
      <Input type="text" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="checkbox" />
      <Text>Remember me</Text>
      <Button>Login</Button>
      <Link>Go to register</Link>
    </>);
  }

}

export default LoginForm;
