import React, { Suspense, useContext } from 'react';
import { Link, Route, Routes } from "react-router-dom";

import { MainPageLazy } from "./pages/main-page/main-page.lazy";
import { AboutPageLazy } from "./pages/about-page/about-page.lazy";
import { Theme, ThemeContext } from "./theme/theme-context";
import './styles/index.scss';
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/class-names/class-names";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path={'/'} element={<MainPageLazy />}/>
          <Route path={'/about'} element={<AboutPageLazy />}/>
      </Routes>
      </Suspense>
    </div>
  );
};

export default App;