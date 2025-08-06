import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import DateTimeTools from '../../src/utils/DateTimeTools.js';

describe('DateTimeTools', () => {
    it('generate empty date', () => {
        const header = DateTimeTools.generate("en", "");
        assert.equal(header, `<time datetime="">Invalid Date</time>`);
    });

    it('generate years only in english', () => {
        const header = DateTimeTools.generate("en", "2012");
        assert.equal(header, `<time datetime="2012">Jan 2012</time>`);
    });

    it('generate years only in french', () => {
        const header = DateTimeTools.generate("fr", "2012");
        assert.equal(header, `<time datetime="2012">janv. 2012</time>`);
    });

    it('generate april in english', () => {
        const header = DateTimeTools.generate("en", "2012-04");
        assert.equal(header, `<time datetime="2012-04">Apr 2012</time>`);
    });

    it('generate april in french', () => {
        const header = DateTimeTools.generate("fr", "2012-04");
        assert.equal(header, `<time datetime="2012-04">avr. 2012</time>`);
    });
});
