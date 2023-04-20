import { simpleArraySum } from '.';

describe('simpleArraySum func', () => {
    test('Return 31', () => {
        const ar = [1, 2, 3, 4, 10, 11];
        expect(simpleArraySum(ar)).toBe(31);
    });
});
