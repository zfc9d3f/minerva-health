import React from "react"
import styled from "styled-components"

const Background = styled.img`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
`
const Container = styled.div`
  position: relative;
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8rem;
  padding-left: 5rem;
  max-width: 45%;
`

const TitleTitle = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
  border-bottom: 7px solid #21262e;
  padding-left: 1rem;
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
  font-family: "Merriweather", serif;
  line-height: 1.6rem;
  letter-spacing: 1.5px;
  padding-left: 1rem;
  padding-right: 1rem;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 1rem;
  padding-right: 6rem;
`

const HeaderLink = styled.a`
  font-family: "Merriweather", serif;
  font-size: 1.3rem;
  padding: 0.3rem 0rem 0.3rem 1rem;
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

const IndexPage = () => (
  <Container>
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:900|Merriweather:300i&display=swap"
      rel="stylesheet"
    />
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
    </Title>
    <Background src="https://res.cloudinary.com/dg8szh4ec/image/upload/v1562021147/test2.svg"></Background>
  </Container>
)

export default IndexPage
