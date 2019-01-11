import { getProvider, Region } from 'region-core';

console.warn('redux-loading is deprecated, use region-shortcut instead');

const Provider = getProvider();
const region = new Region('region');

const mapResultToProps = region.private_selectorFactory;

export { mapResultToProps };

export const { setConfig, getLoading, getResults, getFetchTimes, getError, set, load, connect, connectWith, reducer } = region;

export { Region, Provider, getProvider };
