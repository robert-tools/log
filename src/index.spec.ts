import { sample } from './index';

describe('add', () => {
    const FN = sample;
    it('return sample', () => {
        expect(FN('foo')).toEqual('foo.');
    });
});
