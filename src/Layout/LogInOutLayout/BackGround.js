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
`;

class BackGround extends React.Component {

  render () {
    return (<>
      <StyledComponent>
        {this.props.children}
      </StyledComponent>
    </>);
  }

}

export default BackGround;
