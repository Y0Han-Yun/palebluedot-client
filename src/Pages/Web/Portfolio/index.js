import React from 'react';
import styled from 'styled-components';
import BackGround from 'src/Component/Image/BackGround';
import Navigation from 'src/Component/Navigation/Bar';
import Text from 'src/Component/Text';
import { v4 } from 'uuid';

const StyledComponent = styled.div`
  .PortfolioWrapper{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   
    .Portfolio{
      width: 930px;
      height: 500px;
      margin: 50px 0px 20px 0px;
      
      .SubSection{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%; 
        padding-bottom: 20px;
      }
    }

    .BoxSection{
      display: flex;
      justify-content: space-around;
      padding: 20px 10px 10px 10px;
      flex-wrap: wrap; 
    }
  }
`;

const Box = styled.div`
  color: white;
  margin : 10px;
  width: 200px;
  height: 200px;    
  border-radius: 5px;
  position: relative;
  overflow : hidden;

    .icon-wrapper{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .text-wrapper{
      width: 0%;
      height: 0%;
      position: absolute;
      bttom: -170px;
    }

    :hover {
      background-color: white;
      transition: all.8s;
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      
      
      .icon-wrapper{
        color: black;
        width: 100%;
        height: 40%;
        transition: 0.8s;
      }
      .text-wrapper{
        padding:5px;
        width: 190px;
        height: 111px;
        transition: 1s;
        bttom: 0px;d
      }
`;

const Button = styled.button`
  background-color: white;
  color: black;
  border: 1px solid black;
  width: 190px;
  cursor: pointer;
  outline: none;


    :hover {
      background-color: black;
      color: white;
    }
`;

const BoxList = [
{ id: v4(), icon: 'fas fa-gamepad fa-4x', title: 'Game', language: 'HTML,CSS,Javascript,React', link: 'https://www.linkedin.com/in/yohan-yun-0439031aa/' }
];


class Portfolio extends React.Component {
  render () {
    return (
      <StyledComponent>
        <BackGround>
          <Navigation />
            <div className='PortfolioWrapper'>
              <div className='Portfolio'>
                <div className='SubSection'>
                  <Text home40 white>My Work</Text><br/>
                </div>
                <div className='BoxSection'>
                  {BoxList.map(list => 
                    <Box key={list.id}>
                      <div className='icon-wrapper'>
                       <i className={`${list.icon}`} />
                      </div>
                      <div className='text-wrapper'>
                        <div className='title-wrapper'>
                          <Text md>{list.title}</Text>
                        </div>
                        <div className='sub-wrapper'>
                          <Text sm>Language :</Text><br/>
                          <Text sm>{list.language}</Text>
                        </div>
                        <div className='button-wrapper'>
                          <Button>Click me</Button>
                        </div>
                      </div>
                    </Box>
                    )}
                </div>
              </div>
            </div>
        </BackGround>
      </StyledComponent>
    );
  }
}
export default Portfolio;
