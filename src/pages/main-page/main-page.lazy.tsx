import { lazy } from "react";

export const MainPageLazy = lazy(() => import('./main-page').then(module=>({default:module.MainPage})));