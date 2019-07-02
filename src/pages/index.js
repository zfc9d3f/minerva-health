import React from "react"
import styled, { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  body{
    background-color: #e1e5ea;
  }
  @keyframes toTop {
    0%{
      opacity: 0;
      transform: translateY(5rem)
    }
    100%{
      opacity: 1;
      transform: translateY(0rem)
    }
  }
`

const Background = styled.img`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
`
const Container = styled.div`
  position: relative;
  height: 100vh;
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
  padding-left: 5rem;
  max-width: 45%;
`

const TitleTitle = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
  border-bottom: 7px solid #21262e;
  animation-name: toTop;
  animation-duration: 700ms;
  animation-timing-function: ease-out;
  padding-bottom: 0.4rem;
  /* justify-content: center; */
`
const Left = styled.h1`
  padding: 0;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 3.5rem;
  color: #21262e;
`

const Right = styled(Left)`
  color: #606e85;
`

const Text = styled.div`
  font-size: 1.4rem;
  font-family: "Merriweather", sans-serif;
  line-height: 1.8rem;
  letter-spacing: 1px;
  animation-name: toTop;
  padding-right: 0.5rem;
  animation-duration: 700ms;
  animation-timing-function: ease-out;
  animation-delay: 300ms;
  animation-fill-mode: forwards;
  opacity: 0;
  padding-left: 0.5rem;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 1rem;
  padding-right: 6rem;
`

const LearnButton = styled.button`
  padding: 0.5rem 0rem;
  border: 3px solid #21262e;
  border-radius: 4px;
  background-color: #e1e5ea;
  color: #21262e;
  margin-top: 1rem;
  margin-left: 0.5rem;
  font-family: "Lora", serif;
  font-size: 1.5rem;
  width: 13rem;
  transition-duration: 150ms;
  animation-name: toTop;
  transition-timing-function: ease-in;
  animation-duration: 700ms;
  animation-timing-function: ease-out;
  animation-delay: 300ms;
  animation-fill-mode: forwards;
  opacity: 0;
  outline: none;
  cursor: pointer;
  &:hover {
    color: #e1e5ea;
    background-color: #21262e;
  }
`

const HeaderLink = styled.a`
  font-family: "Lora", serif;
  font-size: 1.3rem;
  padding: 0.3rem 0rem 0.3rem 2rem;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  &:visited,
  &:active,
  &:link {
    color: #21262e;
  }
`

const Links = styled.div`
  height: 100vh;
`

const Card = styled.div`
  height: 23.5rem;
  width: 25%;
  background-color: #21262e;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardText = styled.div`
  color: #e1e5ea;
  font-family: "Merriweather", serif;
  font-size: 1.1rem;
  padding: 1.3rem;
  line-height: 1.6rem;
`

const CardButton = styled.button`
  outline: none;
  border: 3px solid #e1e5ea;
  border-radius: 4px;
  background-color: #e1e5ea;
  color: #21262e;
  font-family: "Lora", serif;
  padding: 0.5rem 0.8rem;
  font-size: 1.2rem;
  margin-left: 6rem;
  transition-duration: 150ms;
  transition-timing-function: ease-in;
  cursor: pointer;
  &:hover {
    background-color: #21262e;
    color: #e1e5ea;
  }
`

const CardImg = styled.img`
  width: 100%;
  margin-bottom: 0rem;
`

const CardContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  margin-top: 5rem;
`

const IndexPage = () => (
  <>
    <Container>
      <Global />

      <Header>
        <HeaderLink>Why Minerva</HeaderLink>
        <HeaderLink>Doctors & Locations</HeaderLink>
        <HeaderLink>Health & Wellness</HeaderLink>
        <HeaderLink>Careers</HeaderLink>
      </Header>
      <Title>
        <TitleTitle>
          <Left>MINERVA</Left>
          <Right>HEALTH</Right>
        </TitleTitle>
        <Text>
          We operate the backbone of the healthcare supply chain. We drive the
          future of local care delivery. We guide medical innovations to market.
          This is what it means to create healthier futures.
        </Text>
        <LearnButton>Learn More</LearnButton>
      </Title>
      <Background src="https://res.cloudinary.com/dg8szh4ec/image/upload/v1562061170/test2.svg"></Background>
    </Container>
    <Links>
      <CardContainer>
        <Card>
          <CardImg src="https://res.cloudinary.com/dg8szh4ec/image/upload/w_400/c_crop,w_400,h_200/q_auto/v1562101917/pexels-photo-668298.jpg" />
          <CardText>
            Our partners and clients have specific and complicated use cases,
            find out how we solve these problems.
          </CardText>
          <CardButton>Learn More</CardButton>
        </Card>

        <Card>
          <CardImg src="https://res.cloudinary.com/dg8szh4ec/image/upload/w_400/c_crop,w_400,h_200/q_auto/v1562101917/doctor-medical-medicine-health-42273.jpg" />
        </Card>
        <Card>
          <CardImg src="https://res.cloudinary.com/dg8szh4ec/image/upload/w_400/c_crop,w_400,h_200/v1562101917/pexels-photo-1170979.jpg" />
        </Card>
      </CardContainer>
    </Links>
  </>
)

export default IndexPage
