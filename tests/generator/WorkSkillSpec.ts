import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import WorkSkillGenerator from '../../src/generator/WorkSkill.js';
// TODO: corriger les test
describe('Work', () => {
    it('generate minimal workSkill', () => {
        const header = WorkSkillGenerator.generate([], {
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
        assert.equal(header, ``);
    });

    it('generate one minimal workSkill', () => {
        const header = WorkSkillGenerator.generate([{
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
                    subject: 'first subject',
                    details: [
                        'first detail',
                        'second detail'
                    ]
                },
                {
                    subject: 'second subject'
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
            interests: 'interests'
        });
        assert.equal(header, `
            <div id="workSkill">
                <div class="highlights">
                    aaaa
                </div>
            </div>`);
    });

    it('generate two workSkill from two company', () => {
        const header = WorkSkillGenerator.generate([{
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
                    subject: 'first subject',
                    details: [
                        'first detail',
                        'second detail'
                    ]
                },
                {
                    subject: 'second subject'
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
                    subject: 'first subject',
                    details: [
                        'first detail',
                        'second detail'
                    ]
                },
                {
                    subject: 'second subject'
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
            interests: 'interests'
        });
        assert.equal(header, `
            <div id="workSkill">
                <div class="highlights">
                    aaaaa
                </div>
            </div>`);
    });

    it('generate two workSkill from one company', () => {
        const header = WorkSkillGenerator.generate([{
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
                    subject: 'first subject',
                    details: [
                        'first detail',
                        'second detail'
                    ]
                },
                {
                    subject: 'second subject'
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
                    subject: 'first subject',
                    details: [
                        'first detail',
                        'second detail'
                    ]
                },
                {
                    subject: 'second subject'
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
            interests: 'interests'
        });
        assert.equal(header, `
            <div id="workSkill">
                <div class="highlights">
                    aaaa
                </div>
            </div>`);
    });
});
