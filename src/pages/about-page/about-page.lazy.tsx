import { lazy } from "react";

export const AboutPageLazy = lazy(() => import('./about-page').then(module=>({default:module.AboutPage})));