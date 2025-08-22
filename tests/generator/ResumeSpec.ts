import { before, describe, it } from 'node:test';
import * as sinon from 'sinon';
import assert from 'node:assert/strict';

import ResumeGenerator from '../../src/generator/Resume.js';
import EducationGenerator from '../../src/generator/Education.js';
import InterestGenerator from '../../src/generator/Interests.js';
import HeaderGenerator from '../../src/generator/Header.js';
import LanguageGenerator from '../../src/generator/Languages.js';
import MetaGenerator from '../../src/generator/Meta.js';
import SkillGenerator from '../../src/generator/Skills.js';
import WorkSimplifyGenerator from '../../src/generator/WorkSimplify.js';
import WorkSkillGenerator from '../../src/generator/WorkSkill.js';

describe('Header', async () => {
    let resumeGenerator: ResumeGenerator;

    before(() => {
        var educationGenerator = sinon.createStubInstance(EducationGenerator, {
            generate: sinon.stub(),
        });
        educationGenerator.generate.returns("generated education");
        var headerGenerator = sinon.createStubInstance(HeaderGenerator, {
            generate: sinon.stub(),
        });
        headerGenerator.generate.returns("generated header");
        var interestGenerator = sinon.createStubInstance(InterestGenerator, {
            generate: sinon.stub(),
        });
        interestGenerator.generate.returns("generated interest");
        var languageGenerator = sinon.createStubInstance(LanguageGenerator, {
            generate: sinon.stub(),
        });
        languageGenerator.generate.returns("generated language");
        var metaGenerator = sinon.createStubInstance(MetaGenerator, {
            generate: sinon.stub(),
        });
        metaGenerator.generate.returns("generated meta");
        var skillGenerator = sinon.createStubInstance(SkillGenerator, {
            generate: sinon.stub(),
        });
        skillGenerator.generate.returns("generated skill");
        var workSimplifyGenerator = sinon.createStubInstance(WorkSimplifyGenerator, {
            generate: sinon.stub(),
        });
        workSimplifyGenerator.generate.returns("generated workSimplify");
        var workSkillGenerator = sinon.createStubInstance(WorkSkillGenerator, {
            generate: sinon.stub(),
        });
        workSkillGenerator.generate.returns("generated workSkill");

        resumeGenerator = new ResumeGenerator(
            metaGenerator,
            headerGenerator,
            educationGenerator,
            languageGenerator,
            skillGenerator,
            interestGenerator,
            workSkillGenerator,
            workSimplifyGenerator
        );
    });

    await it('generate minimal resume', async () => {
        const resume = resumeGenerator.generate({
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

        assert.equal(resume, `
        <!doctype html>
        <html lang="en">
            <head>
                generated meta
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
                <style>
                    
                </style>
                <script type="module">
                    
                </script>
            </head>
            <body>
                <div class="headers">
                    generated header 
                </div>
                <div class="body">
                <aside class="left-column">
                    generated education
                    generated language
                    generated skill 
                    generated interest
                </aside>
                <div class="vl"></div>
                    <div class="right-column">
                        generated workSkill 
                        generated workSimplify 
                    </div>
                </div>
            </body>
        </html>`);
    });

    await it('generate full resume', async () => {
        const resume = resumeGenerator.generate({
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
        }, Buffer.from('style'), Buffer.from('script'));

        assert.equal(resume, `
        <!doctype html>
        <html lang="en">
            <head>
                generated meta
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
                <style>
                    style
                </style>
                <script type="module">
                    script
                </script>
            </head>
            <body>
                <div class="headers">
                    generated header 
                </div>
                <div class="body">
                <aside class="left-column">
                    generated education
                    generated language
                    generated skill 
                    generated interest
                </aside>
                <div class="vl"></div>
                    <div class="right-column">
                        generated workSkill 
                        generated workSimplify 
                    </div>
                </div>
            </body>
        </html>`);
    });
});
