import React from 'react';
import styled from 'styled-components';
import BackGround from 'src/Component/Image/BackGround';
import Navigation from 'src/Component/Navigation/Bar';
import Text from 'src/Component/Text';
import { v4 } from 'uuid';



const StyledComponent = styled.div`
  .SkillsWrapper{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .Skills{
      width: 80%;
      height: 500px;
      margin: 50px 0px 20px 0px;
      

      .SubSection{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 10%;
      }
    }
  }

  .skills-section{
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    width: 100%;
    height: 90%;

    .box-wrapper{
      margin : 20px;
      width: 200px;
      height: 200px;
      .title-section{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50%;
      }
    }
  }
 
`;

const IconSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  color: ${props => props.color};
`;

const LanguageList = [
  { id: v4(), iconName: 'Javascript', icon: 'fab fa-js fa-4x', color: '#F7DF1D' },
  { id: v4(), iconName: 'HTML', icon: 'fab fa-html5 fa-4x', color: '#E44C26' },
  { id: v4(), iconName: 'Css', icon: 'fab fa-css3-alt fa-4x', color: '#1F62AD' },
  { id: v4(), iconName: 'React', icon: 'fab fa-react fa-4x', color: '#5ED4F4' }
];

class Skills extends React.Component {
  render () {
    return (
      <StyledComponent>
        <BackGround>
          <Navigation />
          <div className='SkillsWrapper'>
            <div className='Skills'>
              <div className='SubSection'>
                <Text home40 white>Skills</Text>
              </div>
              <div className='skills-section'>
                {LanguageList.map(list =>
                  <div key={list.id} className='box-wrapper'>
                    <IconSection color={list.color} className='icon-section'><i className={`${list.icon}`} /></IconSection>
                    <div className='title-section'><Text white>{list.iconName}</Text></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </BackGround>
      </StyledComponent>
    );
  }

}

export default Skills;
