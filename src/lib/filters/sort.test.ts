import { describe, it, expect } from 'vitest';
import { sortNum } from './sort';

describe('Sort Filter', () => {
    it('sorts a sequence', () => {
        const input = [8, 4, 25, 17, 43, 11];
        const expected = [4, 8, 11, 17, 25, 43]
        expect(sortNum(input)).toEqual(expected);
    });
});