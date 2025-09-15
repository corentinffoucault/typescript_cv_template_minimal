import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import EducationGenerator from '../../src/generator/EducationGenerator.js';

describe('EducationGenerator', () => {
    const educationGenerator = new EducationGenerator();
    it('generate empty education', () => {
        const education = educationGenerator.generate([], {
            works: 'works',
            planguages: 'planguages',
            team: 'team',
            tools: 'tools',
            environment: 'environment',
            methods: 'methods',
            worksSkill: 'worksSkill',
            diploma: 'diploma',
            language: 'language',
            interests: 'interests',
            internships: 'internships'
        });
        assert.equal(education, '');
    });

    it('generate full education', () => {
        const education = educationGenerator.generate([{
            area: "area",
            endDate: "2012",
            institution: "institution",
            url: "url",
        }], {
            works: 'works',
            planguages: 'planguages',
            team: 'team',
            tools: 'tools',
            environment: 'environment',
            methods: 'methods',
            worksSkill: 'worksSkill',
            diploma: 'diploma',
            language: 'language',
            interests: 'interests',
            internships: 'internships'
        });
        assert.equal(education, `
            <div class="container education-container">
                <h3 class="bold">diploma</h3>
                <section id="education">
                    <div>
                    
            <article>
                <header>
                  <h5><a href="url">institution</a></h5>
                  <div>
                    <strong>area</strong>
                    2012
                  </div>
                </header>
              </article>
                    </div>
                </section>
            </div>`);
    });
});
