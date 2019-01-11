"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getProvider", {
  enumerable: true,
  get: function get() {
    return _regionCore.getProvider;
  }
});
Object.defineProperty(exports, "Region", {
  enumerable: true,
  get: function get() {
    return _regionCore.Region;
  }
});
exports.Provider = exports.reducer = exports.connectWith = exports.connect = exports.load = exports.set = exports.getError = exports.getFetchTimes = exports.getResults = exports.getLoading = exports.setConfig = exports.mapResultToProps = void 0;

var _regionCore = require("region-core");

console.warn('redux-loading is deprecated, use region-shortcut instead');
var Provider = (0, _regionCore.getProvider)();
exports.Provider = Provider;
var region = new _regionCore.Region('region');
var mapResultToProps = region.private_selectorFactory;
exports.mapResultToProps = mapResultToProps;
var setConfig = region.setConfig,
    getLoading = region.getLoading,
    getResults = region.getResults,
    getFetchTimes = region.getFetchTimes,
    getError = region.getError,
    set = region.set,
    load = region.load,
    connect = region.connect,
    connectWith = region.connectWith,
    reducer = region.reducer;
exports.reducer = reducer;
exports.connectWith = connectWith;
exports.connect = connect;
exports.load = load;
exports.set = set;
exports.getError = getError;
exports.getFetchTimes = getFetchTimes;
exports.getResults = getResults;
exports.getLoading = getLoading;
exports.setConfig = setConfig;