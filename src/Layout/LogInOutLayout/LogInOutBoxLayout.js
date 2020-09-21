import React from 'react';
import styled from 'styled-components';
import { spacing } from '../../config/theme';

const StyledComponent = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #6FB1FC, #4364F7, #0052D4);

  * {
    margin-bottom: ${spacing['2']};
  }

  .LogInOutBox{
    width: 85%;
    height: 90%;
    display: flex;
    margin: 0px;
    box-shadow: 4px 6px 13px 1px rgba(0,0,0,0.42);
    border-radius: 20px;
  }
  
  @media (max-width: 500px) {
    .LogInOutBox{
      width: 100%;
      height: 100%;
      display: flex;
      margin: 0px;
  }

`;

class LogInOutBoxLayout extends React.Component {

  render () {
    return (<>
      <StyledComponent>
        <div className='LogInOutBox'>
          {this.props.children}
        </div>
      </StyledComponent>
    </>);
  }

}

export default LogInOutBoxLayout;
