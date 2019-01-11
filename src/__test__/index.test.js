import {
  set, load, connect, connectWith, Region, Provider, getProvider, reducer,
  setConfig, getLoading, getResults, getFetchTimes, getError, mapResultToProps,
} from '../index';

describe('exports', () => {
  test('exports', () => {
    expect(typeof set).toBe('function');
    expect(typeof load).toBe('function');
    expect(typeof connect).toBe('function');
    expect(typeof connectWith).toBe('function');
    expect(typeof Region).toBe('function');
    expect(typeof Provider).toBe('function');
    expect(typeof getProvider).toBe('function');
    expect(typeof reducer).toBe('function');
    expect(typeof setConfig).toBe('function');
    expect(typeof getLoading).toBe('function');
    expect(typeof getResults).toBe('function');
    expect(typeof getFetchTimes).toBe('function');
    expect(typeof getError).toBe('function');
    expect(typeof mapResultToProps).toBe('function');
  });
});
