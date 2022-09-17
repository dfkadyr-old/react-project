import { lazy } from "react";
export var MainPageLazy = lazy(function () { return import('./main-page').then(function (module) { return ({ default: module.MainPage }); }); });
