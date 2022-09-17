var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { MainPageLazy } from "../pages/main-page/main-page.lazy";
import { AboutPageLazy } from "../pages/about-page/about-page.lazy";
import './styles/index.scss';
import { useTheme } from "providers/theme-provider/lib/useTheme";
import { classNames } from "../helpers/class-names/class-names";
var App = function () {
    var _a = useTheme(), theme = _a.theme, toggleTheme = _a.toggleTheme;
    return (_jsxs("div", __assign({ className: classNames('app', {}, [theme]) }, { children: [_jsx("button", __assign({ onClick: toggleTheme }, { children: "Toggle theme" }), void 0), _jsx(Link, __assign({ to: '/' }, { children: "Home" }), void 0), _jsx(Link, __assign({ to: '/about' }, { children: "About" }), void 0), _jsx(Suspense, __assign({ fallback: _jsx("div", { children: "Loading..." }, void 0) }, { children: _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(MainPageLazy, {}, void 0) }, void 0), _jsx(Route, { path: '/about', element: _jsx(AboutPageLazy, {}, void 0) }, void 0)] }, void 0) }), void 0)] }), void 0));
};
export default App;
