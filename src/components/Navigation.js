import React from 'react';
import styled from 'styled-components';
import { Text, NewLink,Button } from '../components';

const Warpper = styled.div`
  width: 100%;
  height: 81px;
  display: flex;
  align-items: center;
  background-color: #40444E;
`;

const LogoWarpper = styled.div`
  width :50%;
  justify-content: center;
  display: flex;
`;

const LogoLeftSection = styled.div`
  width :50%;
  justify-content: center;
  display: flex;
`;
const LogoRightSection = styled.div`
  width :50%;
`;
const LinkWarpper = styled.div`
  width :50%;
  justify-content: center;
  display: flex;
`;
const LinkLeftSection = styled.div`
  width :50%;
`;
const LinkRightSection = styled.div`
  width :50%;
  justify-content: space-evenly;
  display: flex;
`;

class Navigaion extends React.Component {

  render () {
    return (<>
      <Warpper>
        <LogoWarpper>
          <LogoLeftSection>
            <Text md>로고</Text>
          </LogoLeftSection>
          <LogoRightSection/>
        </LogoWarpper>
        <LinkWarpper>
          <LinkLeftSection/>
          <LinkRightSection>
            <NewLink to='regi'><Button>Register</Button></NewLink>
            <NewLink to='creinvo'><Button>Invoice</Button></NewLink>
          </LinkRightSection>   
        </LinkWarpper>
      </Warpper>
    </>);
  }

}

export default Navigaion;
