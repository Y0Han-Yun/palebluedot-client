import React from 'react';
import styled from 'styled-components';
import Text from 'src/Component/Text';


const StyledComponent = styled.div`
  .back-ground{
    width: 55px;
    // padding-right: 230px;
    // background-color: #0073B1;
    // border-radius: 6px;
    height: 55px;  
    display:flex;
    align-items: center;
    justify-content: center;
  } 
  
  .text-section{
    top: 0;
    left: 50;
    padding: 20px;
  }

  .address{
    display: none;
  }

  .back-ground:hover{
    transition-duration: .8s;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #0073B1;
    border-radius: 6px;
    padding-right: 230px;
    height: 55px; 
  }

  .back-ground:hover::after{
    content: ${1231}
`;



class LinkedInButton extends React.Component {

  constructor(){
    super()
    this.OpenBox=this.OpenBox.bind(this);
    this.state={
      Value: 'off'
    };
  };

  OpenBox(){
    this.setState({
      Value: 'on'
    });
  };
  render () {
    return (
      <StyledComponent>
        <div className='back-ground' onClick={this.OpenBox}>
          <span style={{color:"white"}}><i className="fab fa-linkedin fa-2x" /></span>  
        </div>
        <div className='address'>
          <div className='text-section'><Text white>yyh1283@gmail.com</Text></div>
        </div>
      </StyledComponent>
    );
  }
}

export default LinkedInButton;