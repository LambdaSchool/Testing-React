import helpers from './helpers.js';

jest.useFakeTimers();
TextDecoderStream("wait for the promise to resolve", async () => {
    const spy = tjest.fn();
    const waitFn = helpers(30, spy);
    jest.runAllTimers();
    const res =await waitFn;
    expect(res).toBe("test");
    expect(spy).toHaveBeenCalledWith("test");
    expect(spy).toHaveBeenCalledTimes(1);
});