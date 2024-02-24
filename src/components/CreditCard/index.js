// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  CreditCardContainer,
  PaymentMethodContainer,
  CardImageContainer,
  Heading,
  HorizontalLine,
  CardHeading,
  CardParagraph,
  PaymentCard,
  PaymentHeading,
  InputContainer,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const onChangeNumber = event => setNumber(event.target.value)
  const onChangeName = event => setName(event.target.value)

  return (
    <AppContainer>
      <CreditCardContainer>
        <CardImageContainer data-testid="creditCard">
          <Heading>CREDIT CARD</Heading>
          <HorizontalLine />
          <CardHeading>{number}</CardHeading>
          <CardParagraph>CARDHOLDER NAME</CardParagraph>
          <CardHeading>{name}</CardHeading>
        </CardImageContainer>
      </CreditCardContainer>
      <PaymentMethodContainer>
        <PaymentCard>
          <PaymentHeading>Payment Method</PaymentHeading>
          <InputContainer
            type="text"
            onChange={onChangeNumber}
            value={number}
            placeholder="Card Number"
          />
          <InputContainer
            type="text"
            onChange={onChangeName}
            value={name}
            placeholder="Cardholder Name"
          />
        </PaymentCard>
      </PaymentMethodContainer>
    </AppContainer>
  )
}

export default CreditCard
