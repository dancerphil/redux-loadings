import { set, load, connectWith } from '..';

describe('exports', () => {
  test('exports', () => {
    expect(typeof set).toBe('function');
    expect(typeof load).toBe('function');
    expect(typeof connectWith).toBe('function');
  });
});
