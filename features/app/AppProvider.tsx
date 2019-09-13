import React from 'react'
import { observer } from 'mobx-react-lite'
import { AppContext } from '../../hooks/context'
import { store } from '../../stores'
import { restClient } from '../../services'
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'

const AppProvider = ({ children }) => {
  React.useEffect(() => {
    loadProgressBar(
      {
        easing: 'ease',
        speed: 500,
      },
      restClient.instance,
    )
  }, [])
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>
}

export default observer(AppProvider)
