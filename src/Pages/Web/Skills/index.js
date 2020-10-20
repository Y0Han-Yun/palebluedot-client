import React from 'react';
import styled from 'styled-components';
import BackGround from 'src/Component/Image/BackGround';
import Navigation from 'src/Component/Navigation/Bar';
import JavascriptImage from 'src/Images/JavascriptImage.jpg';
import HtmlImage from 'src/Images/HtmlImage.jpg'; 
import CssImage from 'src/Images/CssImage.jpg';
import ReactImage from 'src/Images/ReactImage.jpg';

const StyledComponent = styled.div`
  .SkillsWrapper{
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

        .Font{
          font-size: 40px;
            color: black;
        }
      }
    }
  }

  .BoxSection{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 10px 10px 10px;
    flex-wrap: wrap;
    width: 100%;
    height: 90%;

    .BoxDesign{
      background-color: white;
      border-radius: 70%;
      margin : 20px;
      width: 200px;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      :hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

class Skills extends React.Component {

  render () {
    return (
      <StyledComponent>
        <BackGround>
          <Navigation />
            <div className='SkillsWrapper'>
              <div className='Skills'>
                <div className='SubSection'>
                  <span className='Font'>Skills</span><br/>
                </div>
                <div className='BoxSection'>
                  <div className='BoxDesign'><Image src={JavascriptImage} alt='Javascript' /></div>
                  <div className='BoxDesign'><Image src={HtmlImage} alt='Html' /></div>
                  <div className='BoxDesign'><Image src={CssImage} alt='Css' /></div>
                  <div className='BoxDesign'><Image src={ReactImage} alt='React' /></div>
                </div>
              </div>
            </div>
        </BackGround>
      </StyledComponent>
    );
  }

}

export default Skills;
