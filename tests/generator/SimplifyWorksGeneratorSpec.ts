import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import SimplifyWorksGenerator from '../../src/generator/SimplifyWorksGenerator.js';

describe('WorkGenerator', () => {
    describe('in english', () => {
        const simplifyWorksGenerator = new SimplifyWorksGenerator();
        it('generate minimal workSimplify', () => {
            const header = simplifyWorksGenerator.generate("en", [], {
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

        it('generate one minimal workSimplify', () => {
            const header = simplifyWorksGenerator.generate("en", [{
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
        <div id="work">
        <h3>works</h3>
        <div class="stackSimple">
          
              <article>
                <header>
                  <h4><a href="https://CompanyUrl/">Company Name</a></h4>
                  <div class="meta"><div>Description of the company</div></div>
                </header>
                <div class="timeline">
                  
            <div>
                <span>
                    <div>
                        <span class="simplifyWorkPosition">
                            <b>My position in the company</b>
                        </span>
                        : <time-duration>2021 – <time datetime="24 March 2025">Mar 2025</time></time-duration>
                    </div>
                </span>
            </div>
                </div>
              </article>
            
        </div>
      </div>`);
        });

        it('generate two workSimplify from two company', () => {
            const header = simplifyWorksGenerator.generate("en", [{
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
        <div id="work">
        <h3>works</h3>
        <div class="stackSimple">
          
              <article>
                <header>
                  <h4><a href="https://CompanyUrl/">First Company Name</a></h4>
                  <div class="meta"><div>Description of the company</div></div>
                </header>
                <div class="timeline">
                  
            <div>
                <span>
                    <div>
                        <span class="simplifyWorkPosition">
                            <b>My position in the company</b>
                        </span>
                        : <time-duration>2021 – <time datetime="24 March 2025">Mar 2025</time></time-duration>
                    </div>
                </span>
            </div>
                </div>
              </article>
            
              <article>
                <header>
                  <h4><a href="https://CompanyUrl/">Second Company Name</a></h4>
                  <div class="meta"><div>Description of the company</div></div>
                </header>
                <div class="timeline">
                  
            <div>
                <span>
                    <div>
                        <span class="simplifyWorkPosition">
                            <b>My position in the company</b>
                        </span>
                        : <time-duration>2021 – <time datetime="24 March 2025">Mar 2025</time></time-duration>
                    </div>
                </span>
            </div>
                </div>
              </article>
            
        </div>
      </div>`);
        });

        it('generate two workSimplify from one company', () => {
            const header = simplifyWorksGenerator.generate("en", [{
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
        <div id="work">
        <h3>works</h3>
        <div class="stackSimple">
          
              <article>
                <header>
                  <h4><a href="https://CompanyUrl/">First Company Name</a></h4>
                  <div class="meta"><div>Description of the company</div></div>
                </header>
                <div class="timeline">
                  
            <div>
                <span>
                    <div>
                        <span class="simplifyWorkPosition">
                            <b>My position in the company</b>
                        </span>
                        : <time-duration>2021 – <time datetime="24 March 2025">Mar 2025</time></time-duration>
                    </div>
                </span>
            </div>
            <div>
                <span>
                    <div>
                        <span class="simplifyWorkPosition">
                            <b>My position in the company</b>
                        </span>
                        : <time-duration>2021 – <time datetime="24 March 2025">Mar 2025</time></time-duration>
                    </div>
                </span>
            </div>
                </div>
              </article>
            
        </div>
      </div>`);
        });
    });
    describe('in french', () => {
        const simplifyWorksGenerator = new SimplifyWorksGenerator();
        it('generate minimal workSimplify', () => {
            const header = simplifyWorksGenerator.generate("fr", [], {
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

        it('generate one minimal workSimplify', () => {
            const header = simplifyWorksGenerator.generate("fr", [{
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
        <div id="work">
        <h3>works</h3>
        <div class="stackSimple">
          
              <article>
                <header>
                  <h4><a href="https://CompanyUrl/">Company Name</a></h4>
                  <div class="meta"><div>Description of the company</div></div>
                </header>
                <div class="timeline">
                  
            <div>
                <span>
                    <div>
                        <span class="simplifyWorkPosition">
                            <b>My position in the company</b>
                        </span>
                        : <time-duration>2021 – <time datetime="24 March 2025">mars 2025</time></time-duration>
                    </div>
                </span>
            </div>
                </div>
              </article>
            
        </div>
      </div>`);
        });

        it('generate two workSimplify from two company', () => {
            const header = simplifyWorksGenerator.generate("fr", [{
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
        <div id="work">
        <h3>works</h3>
        <div class="stackSimple">
          
              <article>
                <header>
                  <h4><a href="https://CompanyUrl/">First Company Name</a></h4>
                  <div class="meta"><div>Description of the company</div></div>
                </header>
                <div class="timeline">
                  
            <div>
                <span>
                    <div>
                        <span class="simplifyWorkPosition">
                            <b>My position in the company</b>
                        </span>
                        : <time-duration>2021 – <time datetime="24 March 2025">mars 2025</time></time-duration>
                    </div>
                </span>
            </div>
                </div>
              </article>
            
              <article>
                <header>
                  <h4><a href="https://CompanyUrl/">Second Company Name</a></h4>
                  <div class="meta"><div>Description of the company</div></div>
                </header>
                <div class="timeline">
                  
            <div>
                <span>
                    <div>
                        <span class="simplifyWorkPosition">
                            <b>My position in the company</b>
                        </span>
                        : <time-duration>2021 – <time datetime="24 March 2025">mars 2025</time></time-duration>
                    </div>
                </span>
            </div>
                </div>
              </article>
            
        </div>
      </div>`);
        });

        it('generate two workSimplify from one company', () => {
            const header = simplifyWorksGenerator.generate("fr", [{
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
        <div id="work">
        <h3>works</h3>
        <div class="stackSimple">
          
              <article>
                <header>
                  <h4><a href="https://CompanyUrl/">First Company Name</a></h4>
                  <div class="meta"><div>Description of the company</div></div>
                </header>
                <div class="timeline">
                  
            <div>
                <span>
                    <div>
                        <span class="simplifyWorkPosition">
                            <b>My position in the company</b>
                        </span>
                        : <time-duration>2021 – <time datetime="24 March 2025">mars 2025</time></time-duration>
                    </div>
                </span>
            </div>
            <div>
                <span>
                    <div>
                        <span class="simplifyWorkPosition">
                            <b>My position in the company</b>
                        </span>
                        : <time-duration>2021 – <time datetime="24 March 2025">mars 2025</time></time-duration>
                    </div>
                </span>
            </div>
                </div>
              </article>
            
        </div>
      </div>`);
        });
    });
});
