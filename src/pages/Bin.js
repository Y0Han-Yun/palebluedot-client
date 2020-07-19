import { withRouter } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';

const Container = styled.div`
  width: 1440px;
  height: 790px;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
`;
const SetPage = styled.div`
  width: 1440px;
  height: 700px;
  margin: 79px 0px 0px 288px;
  border: 0px;
  padding: 0px;
`;
const BinLine = styled.div`
  width: 1102px; // width 1152px - 양쪽 margin값 160px = 992px
  height: 100%;
  margin: 25px;
  border: 1px solid gray;
`;

class Bin extends React.Component {
  render () {
    return (<>
      <Navigation/>
      <Container>
        <SetPage>
          <BinLine>
            
          </BinLine>
        </SetPage>
      </Container>
    </>);
  }
}

export default withRouter(Bin);