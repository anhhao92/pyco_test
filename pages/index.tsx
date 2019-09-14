import React from 'react'
import dynamic from 'next/dynamic'

const MainFeature = dynamic(() => import('../features/main'))
const DashboardPage = () => <MainFeature />

// DashboardPage.getInitialProps = async () => {
//   const res = await store.init()
//   return { initData: res }
// }

export default DashboardPage
