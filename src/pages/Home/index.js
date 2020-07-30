import React from 'react';
import LoginForm from './LoginForm';
import CenterLayout from '../../Layout/CenterLayout';
import Navigaion from '../../components/Navigation';


class Home extends React.Component {

  render () {
    return (<>
     <div> 
     <Navigaion/>
      <CenterLayout>        
        <LoginForm/>
      </CenterLayout>
     </div>
    </>);
  }
}

export default Home;
