import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Container = styled.div`
  background: lightblue;
  width : 1440px;
  height : 790px;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
`;
const SideNav = styled.nav`
  background: lightpink;
  width : 20%;
  height : 790px;
  margin: 0px;
  border: 0px;
  padding: 0px;
`;
const LogoWrapper= styled.div`
  background: lightgray;
  width : 100%;
  height : 20%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo= styled.div``;
const TitleWrapper= styled.div`
  width : 100%;
  height : 10%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
`;
const Title= styled.div`
  width : 100%;
  height : 100%;
  margin: 0 0 0 15px;
  border: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
`;
const SubTitleWrapper= styled.div`
  width : 100%;
  height : 20%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  justify-content: center;
  align-items: center;
`;
const SubTitle= styled.div`
  width : 100%;
  height : 30%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TopNav = styled.div`
  background: lightyellow;
  width : 80%;
  height : 10%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
`;
const LeftSide =styled.div`
  width : 50%;
  height : 100%;
  display: flex;
  justify-content: flex-start;
`;
const LocationTitle =styled.div`
  background: lightgreen;
  width : 20%;
  height : 100%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ArrowWrapper =styled.div`
  background: lightyellow;
  width : 10%;
  height : 100%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LocationSubTitle =styled.div`
  background: lightgreen;
  width : 20%;
  height : 100%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightSide =styled.div`
  width : 50%;
  height : 100%;
  display: flex;
  justify-content: flex-end;
`;
const UserNameWrapper =styled.div`
  ackground: lightgreen;
  width : 40%;
  height : 100%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;  
`;
const UserName =styled.div``;
const LogOutWrapper =styled.div`
  background: lightgreen;
  width : 20%;
  height : 100%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogOut =styled.div``;

class Setting extends React.Component {
  render () {
    return (<>
      <Container>
        <SideNav>
          <LogoWrapper>
            <Logo>Logo</Logo>
          </LogoWrapper>
          <TitleWrapper>
            <Title>Title</Title> 
          </TitleWrapper>
          <SubTitleWrapper>
            <SubTitle>Create Invoice</SubTitle>
            <SubTitle>Customer</SubTitle>
            <SubTitle>Bin</SubTitle>  
          </SubTitleWrapper>
          <TitleWrapper>
            <Title>Title</Title> 
          </TitleWrapper>
          <SubTitleWrapper>
            <SubTitle>Create Invoice</SubTitle>
            <SubTitle>Customer</SubTitle>
            <SubTitle>Bin</SubTitle>  
          </SubTitleWrapper>
        </SideNav>
        <TopNav>
          <LeftSide>
            <LocationTitle>
              <div>Title</div>
            </LocationTitle>
            <ArrowWrapper>
              <div> &#62; </div>
            </ArrowWrapper>
            <LocationSubTitle>
              <div>Create Invoice</div> 
            </LocationSubTitle>
          </LeftSide>
          <RightSide>
            <UserNameWrapper>
              <UserName>User Name</UserName>
            </UserNameWrapper>
            <LogOutWrapper>
              <LogOut>Logout</LogOut>
            </LogOutWrapper>
          </RightSide>
        </TopNav>
      </Container>
    </>);
  }
}
export default withRouter(Setting);