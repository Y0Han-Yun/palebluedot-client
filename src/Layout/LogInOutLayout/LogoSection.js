import React from 'react';
import styled from 'styled-components';
import {Text} from '../../components';
import Logo from '../../components/Logo';

const StyledComponent = styled.div`
  width: 80%;
  height: 70%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

class LogoSection extends React.Component {
  render () {
    return (<>
      <StyledComponent>
        <div>
          <Logo size="130px"/>
        </div>
        <div>
          <Text lg normal>Pale Blue Dot</Text><br/>
        </div>
        <div>
          <Text sm >The paperless invoice</Text>                     
        </div>
      </StyledComponent>
    </>);
  }
}

export default LogoSection;