import React from 'react';
import styled from 'styled-components';
import Text from 'src/Component/Text';

const StyledComponent = styled.div`
  color: white;
  margin : 20px;
  width: 150px;
  height: 150px;
  
  .Box-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
  }

  .text-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
  }

    :hover {
     
`;

class Box extends React.Component {
  render () {
    return (
      <StyledComponent>
        <div className='Box-wrapper'>
          {this.props.children}
        </div>
        <div className='text-wrapper'>
          <Text white>javascript</Text>
        </div>
      </StyledComponent>
    );
  }
}

export default Box;