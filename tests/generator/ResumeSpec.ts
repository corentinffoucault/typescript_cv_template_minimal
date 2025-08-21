import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import * as fs from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

import ResumeGenerator from '../../src/generator/Resume.js';

describe('Header', async () => {
    await it('generate minimal resume', async () => {
        const resume = ResumeGenerator.generate({
            basics: {
                name: 'firstName lastName',
                label: 'BackEnd Developer Engineer',
                email: 'myemail@email.com',
                phone: '001122334455',
                location: {
                    city: 'myCity',
                    countryCode: 'FR'
                }
            },
            education: [],
            skills: [],
            work: [],
            languages: [],
            interests: [],
            labels: {
                works: 'works',
                planguages: 'planguages',
                team: 'team',
                tools: 'tools',
                environment: 'environment',
                methods: 'methods',
                worksSkill: 'worksSkill',
                diploma: 'diploma',
                language: 'language',
                interests: 'interests'
            }
        }, Buffer.from(''), Buffer.from(''));

        const __filename = fileURLToPath(import.meta.url);
        const _srcPath = path.dirname(__filename);

        const expectedResult = await fs.readFile(path.join(_srcPath, "../../../testResources/resumeEmpty.html"));
        assert.equal(resume, expectedResult.toString());
    });

    await it('generate full resume', async () => {
        const resume = ResumeGenerator.generate({
            basics: {
                name: 'firstName lastName',
                label: 'BackEnd Developer Engineer',
                email: 'myemail@email.com',
                phone: '001122334455',
                location: {
                    city: 'myCity',
                    countryCode: 'FR'
                }
            },
            education: [],
            skills: [],
            work: [],
            languages: [],
            interests: [],
            labels: {
                works: 'works',
                planguages: 'planguages',
                team: 'team',
                tools: 'tools',
                environment: 'environment',
                methods: 'methods',
                worksSkill: 'worksSkill',
                diploma: 'diploma',
                language: 'language',
                interests: 'interests'
            }
        }, Buffer.from('</style>'), Buffer.from('</script>'));

        const __filename = fileURLToPath(import.meta.url);
        const _srcPath = path.dirname(__filename);

        const expectedResult = await fs.readFile(path.join(_srcPath, "../../../testResources/resumeWithoutJsAndCss.html"));
        assert.equal(resume, expectedResult.toString());
    });
});
