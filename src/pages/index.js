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
const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 6%;
  padding-left: 5%;
  max-width: 50%;
`

const Title = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
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
  font-size: 1.5rem;
  padding: ;
`

const IndexPage = () => (
  <Container>
    <link
      href="https://fonts.googleapis.com/css?family=Heebo:900|Kanit:800|Montserrat:900|Noto+Sans|Open+Sans:800&display=swap"
      rel="stylesheet"
    />
    <Header>
      <Title>
        <Left>MINERVA</Left>
        <Right>HEALTH</Right>
      </Title>
      <Text>
        We offer industry-leading distribution services, including thousands of
        branded, generic and specialty pharmaceuticals, sophisticated online
        ordering, and a full range of packaging solutions.
      </Text>
    </Header>
    <Background src="https://res.cloudinary.com/dg8szh4ec/image/upload/v1561796730/test2.svg"></Background>
  </Container>
)

export default IndexPage
