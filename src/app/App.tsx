import { Suspense } from 'react'

import { useTheme } from 'app/providers/theme-provider'
import { AppRouter } from 'app/router'
import { classNames } from 'shared/lib/class-names'
import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sidebar'

const App = (): JSX.Element => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
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
