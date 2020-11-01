import React from 'react';
import styled from 'styled-components';
import BackGround from 'src/Component/Image/BackGround';
import Navigation from 'src/Component/Navigation/Bar';
import PictureSection from 'src/Component/PictureSection';
import ElementProperties from 'src/Component/ElementProperties';

const StyledComponent = styled.div`
  .ProfileSection { 
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
            <h1>***********</h1>
            <ElementProperties
              onMount={properties => console.log(properties)}
              onUpdate={properties => console.log(properties)}>
              <h1>***********</h1>
            </ElementProperties>
        </BackGround>
      </StyledComponent>
    );
  }

}

export default Home;
