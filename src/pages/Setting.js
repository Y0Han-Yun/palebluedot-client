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
  width: 952px; // width 1152px - 양쪽 margin값 160px = 992px
  height: 100%;
  margin: 50px 100px 50px 100px;
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
  justify-content: space-around;
`;
const Logo = styled.div`
  width: 50%;
  height: 100%;
  margin: 0px;
  border: 0px;
  padding: 0px;
`;  
const Date = styled.div`
  width: 50%;
  height: 100%;
  margin: 0px;
  border: 0px;
  padding: 0px;
`;
const AddressWrapper = styled.div`
  width: 100%;
  height: 10%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  justify-content: space-between;`;
const From = styled.div`
  width: 50%;
  height: 10%;
  margin: 0px;
  border: 0px;
  padding: 0px;
`;
const To = styled.div`
  width: 50%;
  height: 10%;
  margin: 0px;
  border: 0px;
  padding: 0px;
`;
const TableWrapper = styled.div`
  width: 100%;
  height: 50%;
  margin: 0px;
  border: 0px;
  padding: 0px;
`;
const TopOfTable = styled.div`
  width: 100%;
  height: 5%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
`;
const RefDescriptionWrapper = styled.div`
  width: 50%;
  height: 100%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
`;
const Ref = styled.div`
  width: 10%;
  height: 100%;
  margin: 0px;
  border: 0px;
  padding: 0px;
`;
const Description = styled.div`
  width: 90%;
  height: 100%;
  margin-left: 189px;
  border: 0px;
  padding: 0px;
`;
const QTYUnitPriceAmountOptionWrapper = styled.div`
  width: 50%;
  height: 100%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
  justify-content: space-around;
`;
const QTY = styled.div``;
const UnitPrice = styled.div``;
const Amount = styled.div``;
const Option = styled.div``;
const BottomOfTable = styled.div``;
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
              <Date> Data : 16.07.2020</Date>
            </LogoDateWrapper>
            <AddressWrapper>
              <From>
                <div>From</div>
                <div>사람 이름+디테일</div>
                <div>Address</div>
                <div>보내는사람 주소</div>
              </From>
              <To>
                <div>From</div>
                <div>사람 이름+디테일</div>
                <div>Address</div>
                <div>받는사람 주소</div>
              </To>
            </AddressWrapper>
            <TableWrapper>
              <TopOfTable>
                <RefDescriptionWrapper>
                  <Ref>Ref</Ref>
                  <Description>Description</Description>
                </RefDescriptionWrapper>
                <QTYUnitPriceAmountOptionWrapper>
                  <QTY>QTY</QTY>
                  <UnitPrice>Unit Price</UnitPrice>
                  <Amount>Amount</Amount>
                  <Option>Option</Option>
                </QTYUnitPriceAmountOptionWrapper>
              </TopOfTable>  
              <BottomOfTable></BottomOfTable>
            </TableWrapper>
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
