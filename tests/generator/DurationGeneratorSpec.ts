import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import DurationGenerator from '../../src/generator/DurationGenerator.js';

describe('DurationGenerator', () => {
    it('generate empty duration', () => {
        const duration = DurationGenerator.print('en');
        assert.equal(duration, '');
    });
    describe('in english', () => {
        it('generate duration without end', () => {
            const start = new Date(1692008376000).toDateString();
            const duration = DurationGenerator.print('en', start);
            assert.equal(duration, `<time-duration><time datetime="Mon Aug 14 2023">Aug 2023</time> – Present</time-duration>`);
        });

        it('generate duration with start and end', () => {
            const end = new Date(1755166776000).toDateString();
            const start = new Date(1692008376000).toDateString();
            const duration = DurationGenerator.print('en', start, end);
            assert.equal(duration, `<time-duration><time datetime="Mon Aug 14 2023">Aug 2023</time> – <time datetime="Thu Aug 14 2025">Aug 2025</time></time-duration>`);
        });
    });

    describe('in french', () => {
        it('generate duration without end', () => {
            const start = new Date(1692008376000).toDateString();
            const duration = DurationGenerator.print('fr', start);
            assert.equal(duration, `<time-duration><time datetime="Mon Aug 14 2023">août 2023</time> – Present</time-duration>`);
        });

        it('generate duration with start and end', () => {
            const end = new Date(1755166776000).toDateString();
            const start = new Date(1692008376000).toDateString();
            const duration = DurationGenerator.print('fr', start, end);
            assert.equal(duration, `<time-duration><time datetime="Mon Aug 14 2023">août 2023</time> – <time datetime="Thu Aug 14 2025">août 2025</time></time-duration>`);
        });
    });
});
