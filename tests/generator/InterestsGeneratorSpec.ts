import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import InterestsGenerator from '../../src/generator/InterestsGenerator.js';

describe('InterestGenerator', () => {
    const interestsGenerator = new InterestsGenerator();
    it('generate empty Interests', () => {
        const interests = interestsGenerator.generate([], {
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
        });
        assert.equal(interests, ``);
    });

    it('generate full Interests', () => {
        const interests = interestsGenerator.generate([
            {
                name: 'first interrest'
            },
            {
                name: 'second interrest'
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
            interests: 'interests'
        });
        assert.equal(interests, `
            <div class="container interests-container">
                <h3 class="bold">interests</h3>
                
            <section class="item">
                <div class="main-skill skill left">first interrest</div>
            </section> 
            <section class="item">
                <div class="main-skill skill left">second interrest</div>
            </section> 
            </div>`);
    });
});
