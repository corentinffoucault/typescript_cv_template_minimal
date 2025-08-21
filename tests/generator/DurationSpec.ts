import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import Duration from '../../src/generator/Duration.js';

describe('Duration', () => {
    it('generate empty duration', () => {
        const duration = Duration.print();
        assert.equal(duration, '');
    });

    it('generate duration without end', () => {
        const start = new Date(1692008376000).toDateString();
        const duration = Duration.print(start);
        assert.equal(duration, `<time-duration><time datetime="Mon Aug 14 2023">Aug 2023</time> – Present</time-duration>`);
    });

    it('generate duration with start and end', () => {
        const end = new Date(1755166776000).toDateString();
        const start = new Date(1692008376000).toDateString();
        const duration = Duration.print(start, end);
        assert.equal(duration, `<time-duration><time datetime="Mon Aug 14 2023">Aug 2023</time> – <time datetime="Thu Aug 14 2025">Aug 2025</time></time-duration>`);
    });
});
