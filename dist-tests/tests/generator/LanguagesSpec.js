import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import LanguagesGenerator from '../../src/generator/Languages.js';
describe('Languages', () => {
    it('generate minimal language', () => {
        const languages = LanguagesGenerator.generate([], {
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
        assert.equal(languages, ``);
    });
    it('generate full language', () => {
        const languages = LanguagesGenerator.generate([
            {
                fluency: 'native',
                language: 'language1'
            }, {
                fluency: 'fluent',
                language: 'language2'
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
        assert.equal(languages, `
        <div class="container languages-container">
            <h3 class="bold">language</h3>
            <ul class="minimal">
                
            <li>
                <div class="subWorkInfo"><h6>language1:</h6>  <em>native</em></div>
            </li>
            <li>
                <div class="subWorkInfo"><h6>language2:</h6>  <em>fluent</em></div>
            </li>
            </ul>
        </div>`);
    });
});
