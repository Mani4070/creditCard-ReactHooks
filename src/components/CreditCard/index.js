// Write your code here
import {useState} from 'react'

import {
  Container,
  CreditCardContainer,
  CardHeadingContainer,
  CardHeading,
  HorizontalLine,
  CardContainer,
  Card,
  CardNumber,
  CardholderNameText,
  CardholderName,
  PaymentContainer,
  PaymentMethodContainer,
  PaymentHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardholderName, setCardHolderName] = useState('')
  const cardholderNameInUppercase = cardholderName.toUpperCase()

  const onChangeCardholderName = event => {
    setCardHolderName(event.target.value)
  }

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  return (
    <Container>
      <CreditCardContainer>
        <CardHeadingContainer>
          <CardHeading>CREDIT CARD</CardHeading>
          <HorizontalLine />
        </CardHeadingContainer>
        <CardContainer>
          <Card data-testid="creditCard">
            <CardNumber>{cardNumber}</CardNumber>
            <CardholderNameText>CARDHOLDER NAME</CardholderNameText>
            <CardholderName>{cardholderNameInUppercase}</CardholderName>
          </Card>
        </CardContainer>
      </CreditCardContainer>
      <PaymentContainer>
        <PaymentMethodContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <Input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeCardNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={cardholderName}
            onChange={onChangeCardholderName}
          />
        </PaymentMethodContainer>
      </PaymentContainer>
    </Container>
  )
}

export default CreditCard
