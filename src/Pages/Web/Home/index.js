import React from 'react';
import styled from 'styled-components';
import BackGround from '../../../Component/BackGround';
import Navigation from '../../../Component/Navigation/Bar';
import PictureSection from '../../../Component/PictureSection';

const StyledComponent = styled.div`
  .ProfileSection { 
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 80px;
    // align-items: center;
  }
`;

class Home extends React.Component {

  render () {
    return (
      <StyledComponent>
        <BackGround>
          <Navigation/>
          <div className='ProfileSection'>
            <PictureSection />
          </div>
        </BackGround>
      </StyledComponent>
    );
  }

}

export default Home;
