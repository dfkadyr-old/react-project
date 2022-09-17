import { lazy } from "react";
export var AboutPageLazy = lazy(function () { return import('./about-page').then(function (module) { return ({ default: module.AboutPage }); }); });
