import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import LinkGenerator from '../../src/utils/LinkGenerator.js';

describe('LinkGenerator', () => {
    it('generate empty link', () => {
        const header = LinkGenerator.generate();
        assert.equal(header, ``);
    });

    it('generate url only', () => {
        const header = LinkGenerator.generate("my url");
        assert.equal(header, `<a href="my url">my url</a>`);
    });

    it('generate url and name', () => {
        const header = LinkGenerator.generate("my url", "name");
        assert.equal(header, `<a href="my url">name</a>`);
    });
});
