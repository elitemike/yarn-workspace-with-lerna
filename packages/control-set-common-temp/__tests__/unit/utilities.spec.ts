import { Utilities } from './../../src/utilities';
jest.useFakeTimers();

describe('Utilities', () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  test('csv to array - no header', () => {
    const input = `alpha,bravo,charlie,delta\recho,foxtrot,golf,hotel`;
    const array = Utilities.csvStringToArray(input);

    expect(array).toHaveLength(2);
    expect(array[0]).toHaveLength(4);
    expect(array[1]).toHaveLength(4);
    expect(array[0]).toContain('alpha');
    expect(array[0]).toContain('delta');
    expect(array[1]).toContain('echo');
    expect(array[1]).toContain('hotel');
  });

  test('csv to array - with header', () => {
    const input = `1,2,3,4\ralpha,bravo,charlie,delta\recho,foxtrot,golf,hotel`;
    const array = Utilities.csvStringToArray(input, true);

    expect(array).toHaveLength(2);
    expect(array[0]['1']).toBe('alpha');
    expect(array[0]['4']).toBe('delta');
    expect(array[1]['1']).toBe('echo');
    expect(array[1]['4']).toBe('hotel');
  });

  test('csv to array - with header and quoted comma value', () => {
    const input = `1,2,3,4\ralpha,"bravo, you win",charlie,delta\recho,foxtrot,golf,hotel`;
    const array = Utilities.csvStringToArray(input, true);

    expect(array).toHaveLength(2);
    expect(array[0]['1']).toBe('alpha');
    expect(array[0]['2']).toBe('bravo, you win');
    expect(array[0]['4']).toBe('delta');
    expect(array[1]['1']).toBe('echo');
    expect(array[1]['2']).toBe('foxtrot');
    expect(array[1]['4']).toBe('hotel');
  });

  test('debounce', () => {
    const debouncedFunction = jest.fn();
    const trigger = Utilities.debounce(() => { debouncedFunction(); }, 500);

    trigger();
    trigger();
    trigger();

    expect(debouncedFunction).not.toBeCalled();

    // Fast-forward until all timers have been executed
    jest.advanceTimersByTime(10000);

    expect(debouncedFunction).toBeCalled();
    expect(debouncedFunction).toBeCalledTimes(1);
  });

  test('debounce', () => {
    const debouncedFunction = jest.fn();
    const trigger = Utilities.debounce(() => { debouncedFunction(); }, 500);

    trigger();
    trigger();
    trigger();

    expect(debouncedFunction).not.toBeCalled();

    // Fast-forward until all timers have been executed
    jest.advanceTimersByTime(10000);

    expect(debouncedFunction).toBeCalled();
    expect(debouncedFunction).toBeCalledTimes(1);
  });

  test('debounce - immediate', () => {
    const debouncedFunction = jest.fn();
    const timeout = 500;
    const trigger = Utilities.debounce(() => { debouncedFunction(); }, timeout, true);

    trigger();
    expect(debouncedFunction).toBeCalled();
    expect(debouncedFunction).toBeCalledTimes(1);

    jest.advanceTimersByTime(timeout);
    trigger();
    trigger();

    // Fast-forward until all timers have been executed
    jest.advanceTimersByTime(timeout);

    expect(debouncedFunction).toBeCalledTimes(2);
  });
});
