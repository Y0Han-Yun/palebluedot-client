import React from 'react';
import LoginForm from './LoginForm';
import CenterLayout from '../../Layout/CenterLayout';


class Home extends React.Component {

  render () {
    return (<>
     <div> 
      <CenterLayout>        
        <LoginForm/>
      </CenterLayout>
     </div>
    </>);
  }
}

export default Home;
