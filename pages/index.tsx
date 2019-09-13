import React from 'react'
import dynamic from 'next/dynamic'

const MainFeature = dynamic(() => import('../features/main'))

const DashboardPage: React.FC = () => <MainFeature />

export default DashboardPage
