import { getProvider, Region } from 'region-core';

console.warn('redux-loading is deprecated, use region-shortcut instead');

const Provider = getProvider();
const region = new Region('region');

const mapResultToProps = region.private_selectorFactory;
const reducer = region.private_reducer;

export { mapResultToProps, reducer };

export const { setConfig, getLoading, getResults, getFetchTimes, getError, set, load, connect, connectWith } = region;

export { Region, Provider, getProvider, region };
