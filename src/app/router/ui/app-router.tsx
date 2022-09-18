import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { index } from 'shared/config/route-config';

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(index).map(({element, path}) => (
          <Route
            key={path}
            path={path}
            element={(
              <div className="page-wrapper">
                {element}
              </div>
            )}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
