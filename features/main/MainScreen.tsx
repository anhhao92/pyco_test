import React from 'react'
import { Spin } from 'antd'
import { observer } from 'mobx-react-lite'
import { useAppContext } from '../../hooks/context'
import { AppStore } from '../../stores'
import { MasterLayout } from '../../components'
import ListCard from './components/ListCard'
import ViewCard from './components/ViewCard'

const MainScreen: React.FC = () => {
  const store = useAppContext() as AppStore
  React.useEffect(() => {
    store.init()
  }, [])

  return (
    <MasterLayout>
      <Spin spinning={store.loading}>
        {store.initialized && (
          <ListCard openPreview={store.openPreview} images={store.gifs} />
        )}
      </Spin>

      {store.visible && (
        <ViewCard item={store.card} closePreview={store.closePreview} />
      )}
    </MasterLayout>
  )
}

export default observer(MainScreen)
