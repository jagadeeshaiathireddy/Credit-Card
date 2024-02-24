// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const CreditCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #3b4b69;
  padding: 15px;
  height: 100vh;
  width: 45%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 20px;
    height: 50%;
  }
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffff;
  padding: 15px;
  height: 100vh;
  width: 55%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 20px;
    height: 50%;
    justify-content: center;
    align-items: center;
  }
`
export const CardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  padding: 15px;
  border-radius: 26px;
  width: 90%;
  height: 55%;
`
export const CardHeading = styled.p`
  font-size: 28px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ffff;
`
export const CardParagraph = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ffff;
  text-align: start;
`
export const PaymentCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffff;
  padding: 20px;
  box-shadow: 0.5px 1.5px 6px 1.5px #d3d9e0;
  border-radius: 5px;
  width: 65%;
  height: 45%;
`
export const PaymentHeading = styled.h1`
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #344e7a;
`
export const InputContainer = styled.input`
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
  color: #475569;
  border: 1px solid #c3cad9;
  padding: 5px;
  height: 38px;
  margin-bottom: 18px;
  width: 60%;
`
export const Heading = styled.h1`
  font-size: 26px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ffff;
  text-align: start;
`
export const HorizontalLine = styled.hr`
  color: #ffd773;
  border: 2px solid;
  width: 22%;

  display: flex;
  justify-content: flex-start;
`
