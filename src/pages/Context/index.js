import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../assets/images/bg2.jpg';
import Navigation from '../../components/Navigation/Navigation';

const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: auto;
  opacity: 0.6;
  object-fit: cover;
  object-position: 50% 100%;
`;

const PageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 1;
`;

const Content = styled.div`
  
`;

class Context extends React.Component {

  render () {
    return (<>
      <BackgroundImage src={backgroundImage} alt="Sample" />
      <PageWrapper>
        <Content>
          <Navigation />
          <h1>Start</h1>
          <h1>*</h1>
          <h1>*</h1>
          <h1>*</h1>
          <h1>*</h1>
          <h1>*</h1>
          <h1>*</h1>
          <h1>*</h1>
          <h1>*</h1>
          <h1>*</h1>
          <h1>*</h1>
          <h1>*</h1>
          <h1>*</h1>
          <h1>*</h1>
          <h1>*</h1>
          <h1>*</h1>
          <h1>*</h1>
          <h1>*</h1>
          <h1>*</h1>
          <h1>*</h1>
          <h1>*</h1>
          <h1>End</h1>
        </Content>
      </PageWrapper>
    </>);
  }

}

export default Context;
