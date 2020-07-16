import { withRouter } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';

const Container = styled.div`
  background: powderblue;
  width: 1440px;
  height: 900px;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
`;
const SetPage = styled.div`
  width: 1440px;
  height: 150%;
  margin: 79px 0px 0px 288px;
  border: 0px;
  padding: 0px;
`;
const CreateInvoice = styled.div`
  width: 992px; // width 1152px - 양쪽 margin값 160px = 992px
  height: 100%;
  margin: 0px 80px 0px 80px;
`;
const InvoiceWrapper = styled.div`
  width: 100%;
  height: 5%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  font-size: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Invoice = styled.div``;
const LogoDateWrapper = styled.div`
  width: 100%;
  height: 10%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div``;
const Date = styled.div``;
const AddressWrapper = styled.div``;
const From = styled.div``;
const To = styled.div``;
const TableWrapper = styled.div``;
const EtcTotalWrapper = styled.div``;
const Etc = styled.div``;
const Total = styled.div``;
const BankDetailWrapper = styled.div``;
const InvoiceClosing = styled.div``;



class Setting extends React.Component {

  render () {
    return (<>
      <Navigation/>
      <Container>
        <SetPage>
          <CreateInvoice>
          <InvoiceWrapper>
            <Invoice>Invoice</Invoice>
          </InvoiceWrapper>
          <LogoDateWrapper>
            <Logo>Logo Here</Logo>
            <Date> 16.07.2020</Date>
          </LogoDateWrapper>
          <AddressWrapper>
            <From></From>
            <To></To>
          </AddressWrapper>
          <TableWrapper></TableWrapper>
          <EtcTotalWrapper>
           <Etc></Etc>
           <Total></Total>
          </EtcTotalWrapper>
          <BankDetailWrapper></BankDetailWrapper>
          <InvoiceClosing></InvoiceClosing>
          </CreateInvoice>
        </SetPage>
      </Container>
    </>);
  }

}

export default withRouter(Setting);
