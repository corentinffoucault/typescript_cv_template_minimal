import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import MarkdownGenerator from '../../src/utils/MarkdownGenerator.js';

describe('MarkdownGenerator', () => {
    it('generate empty markdown', () => {
        const header = MarkdownGenerator.generate();
        assert.equal(header, ``);
    });

    it('generate doc without striptag', () => {
        const header = MarkdownGenerator.generate("## document *hello*");
        assert.equal(header, `<h2>document <em>hello</em></h2>`);
    });

    it('generate doc with striptag', () => {
        const header = MarkdownGenerator.generate("## document *hello*", true);
        assert.equal(header, `document hello`);
    });
});
