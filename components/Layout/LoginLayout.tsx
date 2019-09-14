import React from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import { slideDownAnimate } from '../../theme'

const Container = styled.div`
  background: url(//tikicdn.com/assets/img/bg-form.png) #ddf3fe center bottom
    repeat-x;
  background-attachment: fixed;
  min-width: 320px;
  height: 100%;
`

const Box = styled.div`
  margin: auto;
  width: 80%;
  min-width: 300px;
  max-width: 378px;
  max-height: 300px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  padding: 20px;
  background: #fff;
  box-shadow: 1px 1px 1px #ccc;
  border-radius: 8px;

  ${slideDownAnimate}
`

const LoginLayout: React.FC<any> = ({ children, router: { pathname } }) => {
  return (
    <Container>
      <Box>{children}</Box>
    </Container>
  )
}

export default withRouter(LoginLayout)
