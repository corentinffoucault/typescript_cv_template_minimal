import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import SkillWorksGenerator from '../../src/generator/SkillWorksGenerator.js';

describe('SkillWorksGenerator', () => {
    const skillWorksGenerator = new SkillWorksGenerator();
    it('generate minimal workSkill', () => {
        const header = skillWorksGenerator.generate([], {
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
        assert.equal(header, ``);
    });

    it('generate one minimal workSkill', () => {
        const header = skillWorksGenerator.generate([{
            name: 'Company Name',
            description: 'Description of the company',
            position: 'My position in the company',
            team: {
                back: 4,
                front: 3,
                fullStack: 0,
                description: 'Agile scrum'
            },
            url: 'https://CompanyUrl/',
            startDate: '2021',
            endDate: '24 March 2025',
            summary: 'Resume of the current job',
            highlights: [
                {
                    cat: 'firstCat',
                    subject: 'first subject',
                    details: [
                        'first detail',
                        'second detail'
                    ]
                },
                {
                    cat: 'secondCat',
                    subject: 'second subject'
                },
                {
                    subject: 'third subject'
                }
            ],
            planguages: [
                'planguages1',
                'planguages2'
            ],
            env: [
                'env1',
                'env2'
            ],
            tools: [
                'tools1',
                'tools2'
            ],
            method: [
                'method1',
                'method2'
            ]
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
        assert.equal(header, `
            <div id="workSkill">
                <div class="highlights">
                    
            <h3>firstCat</h3>
            <ul>
                <li><p>first subject</p></li>
            </ul>
            <h3>secondCat</h3>
            <ul>
                <li><p>second subject</p></li>
            </ul>
                </div>
            </div>`);
    });

    it('generate two workSkill from two job', () => {
        const header = skillWorksGenerator.generate([{
            name: 'First Company Name',
            description: 'Description of the company',
            position: 'My position in the company',
            team: {
                back: 4,
                front: 3,
                fullStack: 0,
                description: 'Agile scrum'
            },
            url: 'https://CompanyUrl/',
            startDate: '2021',
            endDate: '24 March 2025',
            summary: 'Resume of the current job',
            highlights: [
                {
                    cat: 'firstCat',
                    subject: 'first subject',
                    details: [
                        'first detail',
                        'second detail'
                    ]
                },
                {
                    cat: 'secondCat',
                    subject: 'second subject'
                },
                {
                    subject: 'third subject'
                }
            ],
            planguages: [
                'planguages1',
                'planguages2'
            ],
            env: [
                'env1',
                'env2'
            ],
            tools: [
                'tools1',
                'tools2'
            ],
            method: [
                'method1',
                'method2'
            ]
        }, {
            name: 'Second Company Name',
            description: 'Description of the company',
            position: 'My position in the company',
            team: {
                back: 4,
                front: 3,
                fullStack: 0,
                description: 'Agile scrum'
            },
            url: 'https://CompanyUrl/',
            startDate: '2021',
            endDate: '24 March 2025',
            summary: 'Resume of the current job',
            highlights: [
                {
                    cat: 'firstCat',
                    subject: 'first subject for other job',
                    details: [
                        'first detail',
                        'second detail'
                    ]
                },
                {
                    cat: 'secondCat',
                    subject: 'second subject for other job'
                },
                {
                    cat: 'thirdCat',
                    subject: 'third subject for other job'
                }
            ],
            planguages: [
                'planguages1',
                'planguages2'
            ],
            env: [
                'env1',
                'env2'
            ],
            tools: [
                'tools1',
                'tools2'
            ],
            method: [
                'method1',
                'method2'
            ]
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
        assert.equal(header, `
            <div id="workSkill">
                <div class="highlights">
                    
            <h3>firstCat</h3>
            <ul>
                <li><p>first subject</p></li><li><p>first subject for other job</p></li>
            </ul>
            <h3>secondCat</h3>
            <ul>
                <li><p>second subject</p></li><li><p>second subject for other job</p></li>
            </ul>
            <h3>thirdCat</h3>
            <ul>
                <li><p>third subject for other job</p></li>
            </ul>
                </div>
            </div>`);
    });
});
