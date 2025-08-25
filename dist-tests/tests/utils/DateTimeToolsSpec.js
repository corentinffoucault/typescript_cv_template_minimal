import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import DateTimeTools from '../../src/utils/DateTimeTools.js';
describe('DateTimeTools', () => {
    it('generate empty date', () => {
        const header = DateTimeTools.generate("");
        assert.equal(header, `<time datetime="">Invalid Date</time>`);
    });
    it('generate years only', () => {
        const header = DateTimeTools.generate("2012");
        assert.equal(header, `<time datetime="2012">Jan 2012</time>`);
    });
});
