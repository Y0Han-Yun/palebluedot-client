import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  width: 85%;
  height: 90%;
  display: flex;
  margin: 0px;
  box-shadow: 4px 6px 13px 1px rgba(0,0,0,0.42);
  border-radius: 20px;
`;
class LogInOutBox extends React.Component {

  render () {
    return (<>
      <StyledComponent>
        {this.props.children}
      </StyledComponent>
    </>);
  }

}

export default LogInOutBox;
