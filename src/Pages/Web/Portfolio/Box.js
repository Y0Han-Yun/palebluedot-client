import React from 'react';
import styled from 'styled-components';
import Text from 'src/Component/Text';

const StyledComponent = styled.div`
  color: white;
  margin : 10px;
  width: 200px;
  height: 200px;    
  border-radius: 5px;
  position: relative;
  overflow : hidden;
}
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
      bttom: 0px;
    }
`;

const Button = styled.button`
  background-color: white;
  color: black;
  border: 1px solid black;
  // width: 100%;
  width: 190px;
  cursor: pointer;
  outline: none;
  

  :hover {
    background-color: black;
    color: white;
  }
`;
class Box extends React.Component {
  render () {
    return (
      <StyledComponent>
        <div className='icon-wrapper'>
          {this.props.children}
        </div>
        <div className='text-wrapper'>
          <div className='title-wrapper'>
            <Text md>Game</Text>
          </div>
          <div className='sub-wrapper'>
            <Text sm>Language :</Text><br/>
            <Text sm>HTML,Css,javascript,React</Text>
          </div>
          <div className='button-wrapper'>
            <Button>Click me</Button>
          </div>
        </div>
      </StyledComponent>
    );
  }
}

export default Box;