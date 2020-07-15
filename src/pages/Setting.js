import { withRouter } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';

const Container = styled.div`
  background: powderblue;
  width: 1440px;
  height: 790px;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
`;

const SetPage = styled.div`
  width: 80%;
  height: 90%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
`;





class Setting extends React.Component {

  render () {
    return (<>
      <Navigation/>
      <Container>
        <SetPage></SetPage>

      </Container>
    </>);
  }

}

export default withRouter(Setting);
