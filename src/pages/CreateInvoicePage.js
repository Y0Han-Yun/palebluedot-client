import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';


const Container = styled.div`
  width: 1440px;
  height: 790px;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
`;

class CreateInvoicePage extends React.Component {

  render () {
    return (<>
      <Container>
        <Navigation/>
      </Container>
    </>);
  }
}

export default withRouter(CreateInvoicePage);
