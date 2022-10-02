import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { routeConfig } from 'shared/config/route-config'
import { PageLoader } from 'widgets/page-loader'

export const AppRouter = (): JSX.Element => {
  return (
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={(
              <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                  {element}
                </div>
              </Suspense>
            )}
          />
        ))}
      </Routes>
  )
}
