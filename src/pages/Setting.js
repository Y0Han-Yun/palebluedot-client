import { withRouter } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';

const Container = styled.div`
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

const InvoiceLine = styled.div`
  width: 1052px; // width 1152px - 양쪽 margin값 160px = 992px
  height: 100%;
  margin: 25px 50px 25px 50px;
  border: 1px solid gray;
`;

const CreateInvoice = styled.div`
  width: 952px; // width 1152px - 양쪽 margin값 160px = 992px
  height: 100%;
  margin: 25px 50px 25px 50px;
  
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
  border: 1px solid #E3E5E6;
  
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
  height: 30%;
  margin: 0px;
  border: 0px;
  padding: 0px;
`;
const TopOfTable = styled.div`
  width: 100%;
  height: 22px;
  margin: 0px;
  border: 0px;
  padding: 20px 0px 20px 0px;
  display: flex;
  border-top: 1px solid #E3E5E6;
  border-bottom: 1px solid #E3E5E6;
  border-collapse: collapse;
`;
const RefDescriptionWrapper = styled.div`
  width: 40%;
  height: 100%;
  margin-left: 34px;
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
  margin-left: 95px;
  border: 0px;
  padding: 0px;
`;
const QTYUnitPriceAmountOptionWrapper = styled.div`
  width: 60%;
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
const Table = styled.div`
  width: 100%;
  height: 39px;
  margin: 0px;
  border: 0px;
  padding: 0px;
  border-bottom: 1px solid #E3E5E6;
  border-collapse: collapse;
`;
const EtcTotalWrapper = styled.div`
  width: 100%;
  height: 20%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
`;
const Etc = styled.div`
  width: 60%;
  height: 100%;
  margin: 0px;
  border: 0px;
  padding: 0px;
`;
const Total = styled.div`
  width: 40%;
  height: 100%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  justify-content: flex-end;
`;
const SubWrapper = styled.div`
  width: 100%;
  margin: 0px; //Amount 가격과 같은 라인에 배치
  border: 0px;
  padding: 0px;
  display: flex;
`;
const SubPrice = styled.div`
  width: 50%;
  margin: 0px 0px 40px 0px;
  border: 0px;
  padding: 0px;
`;
const SubTotal = styled.div`
  width: 50%;
  margin: 0px 0px 40px 0px;
  border: 0px;
  padding: 0px;
  display: flex;
`;
const GSTWrapper = styled.div`
  width: 100%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  display: flex;
`;
const GST = styled.div`
  width: 50%;
  margin: 0px 0px 40px 0px;
  border: 0px;
  padding: 0px;
`;
const GSTPrice = styled.div`
  width: 50%;
  margin: 0px 0px 40px 0px;
  border: 0px;
  padding: 0px;
`;
const TotalWrapper = styled.div`
  display: flex;
  background-color: #e3e5e6;
  border: 0px;
  padding: 0px;
`;
const GrossTotal = styled.div`
  width: 50%;
  margin: 20px 0px 20px 0px;
  border: 0px;
  padding: 0px;
`;
const GrossPrice = styled.div`
  width: 50%;
  margin: 20px 0px 20px 0px;
  border: 0px;
  padding: 0px;
`;

const BankDetailWrapper = styled.div``;
const InvoiceClosing = styled.div``;

class Setting extends React.Component {

  render () {
    return (<>
      <Navigation/>
      <Container>
        <SetPage>
          <InvoiceLine>
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
                <BottomOfTable>
                  <Table>1</Table>
                  <Table>1</Table>
                  <Table>1</Table>
                  <Table>1</Table>
                  <Table>1</Table>
                  <Table>1</Table>
                  <Table>1</Table>
                </BottomOfTable>
              </TableWrapper>
              <EtcTotalWrapper>
                <Etc>
                  <p>여기는 기타 항목이 추가됩니다.</p>
                  <p>여기는 기타 항목이 추가됩니다.</p>
                  <p>여기는 기타 항목이 추가됩니다.</p>
                  <p>여기는 기타 항목이 추가됩니다.</p>
                </Etc>
                <Total>
                  <SubWrapper>
                    <SubTotal>SubTotal</SubTotal>
                    <SubPrice>$1,200</SubPrice>
                  </SubWrapper>
                  <GSTWrapper>
                    <GST>GST</GST>
                    <GSTPrice>$120</GSTPrice>             
                  </GSTWrapper>
                  <TotalWrapper>
                    <GrossTotal>Total</GrossTotal>
                    <GrossPrice>$1,320</GrossPrice>
                  </TotalWrapper>
                </Total>
              </EtcTotalWrapper>
              <BankDetailWrapper></BankDetailWrapper>
              <InvoiceClosing></InvoiceClosing>
            </CreateInvoice>
          </InvoiceLine>
        </SetPage>
      </Container>
    </>);
  }

}

export default withRouter(Setting);
