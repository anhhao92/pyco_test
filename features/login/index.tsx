import React from 'react'
import styled from 'styled-components'
import { LoginLayout } from '../../components'
import { Form, Input, Icon, Checkbox, Button } from 'antd'
import Link from 'next/link'

const LoginButton = styled(Button)`
  width: 100%;
`
const ForgotLink = styled.a`
  float: right;
`

const Login: React.FC<any> = ({ form }) => {
  const onSubmit = (e) => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  return (
    <LoginLayout>
      <Form onSubmit={onSubmit} className="login-form">
        <Form.Item>
          {form.getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {form.getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {form.getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <ForgotLink href="">Forgot password</ForgotLink>
          <LoginButton type="primary" htmlType="submit">
            Log in
          </LoginButton>
          <Link href="/">
            <a>register or go back now!</a>
          </Link>
        </Form.Item>
      </Form>
    </LoginLayout>
  )
}

export default Form.create({ name: 'normal_login' })(Login)
