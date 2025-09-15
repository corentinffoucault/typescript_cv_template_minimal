import test from 'node:test';
import assert from 'node:assert/strict';
import * as fs from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

import ResumeConvertor from '../src/ResumeConvertor.js';

test('ResumeConvertor', async (t) => {
    await t.test('Create an empty resume', async (st) => {
        const resumeConvertor = new ResumeConvertor();
        const a = await resumeConvertor.generateResume('en', {
            labels: {
                works: 'works',
                planguages: 'languages',
                team: 'team',
                tools: 'tools',
                environment: 'environment',
                methods: 'methods',
                worksSkill: 'worksSkill',
                diploma: 'diploma',
                language: 'language',
                interests: 'interests',
                internships: 'internships'
            },
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
            languages: [],
            interests: [],
            work: []
        });

        const __filename = fileURLToPath(import.meta.url);
        const _srcPath = path.dirname(__filename);

        const result = await fs.readFile(path.join(_srcPath, "../../testResources/resumeWithCssAndJsOnly.html"));
        assert.equal(a, result.toString());
    });
});
