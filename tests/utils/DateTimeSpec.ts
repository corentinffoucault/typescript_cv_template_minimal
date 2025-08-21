import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import DateTime from '../../src/utils/DateTime.js';

describe('DateTime', () => {
    it('generate empty date', () => {
        const header = DateTime.generate("");
        assert.equal(header, `<time datetime="">Invalid Date</time>`);
    });

    it('generate years only', () => {
        const header = DateTime.generate("2012");
        assert.equal(header, `<time datetime="2012">Jan 2012</time>`);
    });
});
