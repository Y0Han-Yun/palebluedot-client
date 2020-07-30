import React from 'react';
import styled from 'styled-components';
import { Text, NewLink,Button } from '../components';

const TopWarpper = styled.div`
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
  background-color: powderblue;
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
const SideWarpper = styled.div`
  display: flex;
  width :242.75px;
  height: 720px;
  background-color: #40444E;
`;

class Navigaion extends React.Component {

  render () {
    return (<>
      <TopWarpper>
        <LogoWarpper>
          <LogoLeftSection>
            <Text md white>Logo</Text>
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
      </TopWarpper>
      <SideWarpper>
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>

        </ul>
      </SideWarpper>
    </>);
  }
}

export default Navigaion;
