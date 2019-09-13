import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from '../theme'
import AppProvider from '../features/app/AppProvider'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Dashboard Enterprise</title>
        </Head>
        <ThemeProvider theme={theme}>
          <AppProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </AppProvider>
        </ThemeProvider>
      </>
    )
  }
}
