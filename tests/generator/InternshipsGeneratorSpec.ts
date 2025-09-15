import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import InternshipsGenerator from '../../src/generator/InternshipsGenerator.js';

describe('InternshipsGenerator', () => {
    const interestsGenerator = new InternshipsGenerator();
    it('generate empty Interests', () => {
        const interests = interestsGenerator.generate('fr', [], {
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
        assert.equal(interests, ``);
    });

    it('generate full Interests', () => {
        const interests = interestsGenerator.generate('fr', [
            {
                name: 'company name 1',
                startDate: '2012-04',
                endDate: '2012-06',
                subject: 'subject1',
                url: 'http://url.fr'
            },
            {
                name: 'company name 2',
                startDate: '2012-04',
                endDate: '2012-06',
                subject: 'subject2',
                url: 'http://url2.fr'
            }
        ], {
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
        assert.equal(interests, `
        <div id="internships">
        <h3>internships</h3>
        <div class="internships">
          
            <p><time-duration><time datetime="2012-04">avr. 2012</time> – <time datetime="2012-06">juin 2012</time></time-duration>:  <a href="http://url.fr">company name 1</a> subject1</p>
            
            <p><time-duration><time datetime="2012-04">avr. 2012</time> – <time datetime="2012-06">juin 2012</time></time-duration>:  <a href="http://url2.fr">company name 2</a> subject2</p>
            
        </div>
      </div>`);
    });
});
