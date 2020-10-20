import React from 'react';
import styled from 'styled-components';
import BackGround from 'src/Component/Image/BackGround';
import Navigation from 'src/Component/Navigation/Bar';

const StyledComponent = styled.div`
  .PortfolioWrapper{
    display: flex;
    justify-content: center;
    align-items: center;
   
    .Portfolio{
      width: 930px;
      margin: 50px 0px 20px 0px;
      
      .SubSection{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%; 
        padding-bottom: 20px;

        .Font{
          font-size: 40px;
          color: black;
        }
      }
    }

    .BoxSection{
      display: flex;
      justify-content: space-around;
      padding: 20px 10px 10px 10px;
      flex-wrap: wrap;

      .BoxDesign{
        background-color: white;
        margin : 10px;
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
       
        :hover {
          .BoxSection{
            padding: 0;
          }
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            width: 210px;
            height: 210px;
            transition: width 0.1s, height 0.1;
      }
    }
  }
`;

class Portfolio extends React.Component {

  render () {
    return (
      <StyledComponent>
        <BackGround>
          <Navigation />
            <div className='PortfolioWrapper'>
              <div className='Portfolio'>
                <div className='SubSection'>
                  <span className='Font'>My Work</span><br/>
                </div>
                <div className='BoxSection'>
                  <div className='BoxDesign'><i className="fas fa-gamepad fa-5x" /></div>
                  <div className='BoxDesign'><i className="fas fa-gamepad fa-5x" /></div>
                  <div className='BoxDesign'><i className="fas fa-gamepad fa-5x" /></div>
                  <div className='BoxDesign'><i className="fas fa-gamepad fa-5x" /></div>
                  <div className='BoxDesign'><i className="fas fa-gamepad fa-5x" /></div>
                  <div className='BoxDesign'><i className="fas fa-gamepad fa-5x" /></div>
                  <div className='BoxDesign'><i className="fas fa-gamepad fa-5x" /></div>
                  <div className='BoxDesign'><i className="fas fa-gamepad fa-5x" /></div>
                </div>
              </div>
            </div>
        </BackGround>
      </StyledComponent>
    );
  }

}

export default Portfolio;
