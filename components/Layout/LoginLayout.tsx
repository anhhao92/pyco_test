import React from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'

const LoginLayout: React.FC<any> = ({ children, router: { pathname } }) => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <div> Login</div>
      <div>{children}</div>
    </div>
  )
}

export default withRouter(LoginLayout)
