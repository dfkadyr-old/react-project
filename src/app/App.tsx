import { Suspense } from 'react'

import { AppRouter } from 'app/router'
import { classNames } from 'shared/lib/class-names'
import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sidebar'

const App = (): JSX.Element => {
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
