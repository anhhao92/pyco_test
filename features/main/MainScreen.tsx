import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppContext } from '../../hooks/context'
import { AppStore } from '../../stores'
import { MasterLayout } from '../../components'
import ListCard from './components/ListCard'
import ViewCard from './components/ViewCard'
import LoadingSkeleton from './components/Skeleton'

const MainScreen: React.FC<any> = ({ initData }) => {
  const store = useAppContext() as AppStore
  React.useEffect(() => {
    store.init()
  }, [])

  return (
    <MasterLayout>
      {store.loading || !store.initialized ? (
        <LoadingSkeleton />
      ) : (
        <ListCard openPreview={store.openPreview} images={store.gifs} />
      )}

      <ViewCard
        visible={store.visible}
        item={store.card}
        closePreview={store.closePreview}
      />
    </MasterLayout>
  )
}

export default observer(MainScreen)
