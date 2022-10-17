import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { AppRouter } from 'app/router'
import { userActions } from 'entities/user'
import { classNames } from 'shared/lib/class-names'
import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sidebar'

const App = (): JSX.Element => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
