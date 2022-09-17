var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export function classNames(cls, mods, additional) {
    return __spreadArray(__spreadArray([
        cls
    ], additional, true), Object.entries(mods)
        .filter(function (_a) {
        var className = _a[0], value = _a[1];
        return Boolean(value);
    })
        .map(function (_a) {
        var className = _a[0];
        return className;
    }), true).join(' ');
}
