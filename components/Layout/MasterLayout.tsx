import React from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import { Menu, Layout } from 'antd'
import styled from 'styled-components'

const MainLayout = styled(Layout)`
  height: 100%;
`

const MainContent = styled.div`
  background: ${(props) => props.theme.colors.white};
  padding: 24px;
  min-height: 280px;
  margin: 24px 24px 0;
`

const MasterLayoutPage: React.FC<any> = ({
  children,
  router: { pathname },
}) => {
  return (
    <MainLayout>
      <Layout className="layout">
        <Layout.Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="2">
              <Link href="/">
                <a>Home</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link href="/login">
                <a>Login</a>
              </Link>
            </Menu.Item>
          </Menu>
        </Layout.Header>
        <Layout.Content style={{ padding: '0 50px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <MainContent>{children}</MainContent>
        </Layout.Content>
      </Layout>
    </MainLayout>
  )
}

export default withRouter(MasterLayoutPage)
