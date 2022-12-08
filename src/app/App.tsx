import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppRouter } from '@/app/router'
import { getUserInited, userActions } from '@/entities/user'
import { classNames } from '@/shared/lib/class-names'
import { Navbar } from '@/widgets/navbar'
import { Sidebar } from '@/widgets/sidebar'

const App = (): JSX.Element => {
  const dispatch = useDispatch()
  const inited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  )
}

export default App
