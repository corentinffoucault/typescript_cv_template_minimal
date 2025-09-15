
import type { ResumeSchema } from '../../packages/json_cv_schema/src/type/Type.js';
import EducationGenerator from './EducationGenerator.js';
import HeaderGenerator from './HeaderGenerator.js';
import InterestGenerator from './InterestsGenerator.js';
import LanguagesGenerator from './LanguagesGenerator.js';
import MetaGenerator from './MetaGenerator.js';
import SkillsGenerator from './SkillsGenerator.js';
import SimplifyWorksGenerator from './SimplifyWorksGenerator.js';
import SkillWorksGenerator from './SkillWorksGenerator.js';
import InternshipsGenerator from './InternshipsGenerator.js';

export default class ResumeGenerator {

    public constructor(
        private metaGenerator: MetaGenerator,
        private headerGenerator: HeaderGenerator,
        private educationGenerator: EducationGenerator,
        private languagesGenerator: LanguagesGenerator,
        private skillsGenerator: SkillsGenerator,
        private interestGenerator: InterestGenerator,
        private skillWorksGenerator: SkillWorksGenerator,
        private simplifyWorksGenerator: SimplifyWorksGenerator,
        private internshipsGenerator: InternshipsGenerator,
    ) {

    }

    public generate(lang: Intl.LocalesArgument, resume: ResumeSchema, css: Buffer, js: Buffer): string {
        return `
        <!doctype html>
        <html lang="en">
            <head>
                ${this.metaGenerator.generate(resume.basics)}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
                <style>
                    ${css.toString()}
                </style>
                <script type="module">
                    ${js.toString()}
                </script>
            </head>
            <body>
                <div class="headers">
                    ${this.headerGenerator.generate(resume.basics)} 
                </div>
                <div class="body">
                    <aside class="left-column">
                        ${this.educationGenerator.generate(resume.education, resume.labels)}
                        ${this.languagesGenerator.generate(resume.languages, resume.labels)}
                        ${this.skillsGenerator.generate(resume.skills)} 
                        ${this.interestGenerator.generate(resume.interests, resume.labels)}
                    </aside>
                    <div class="vl"></div>
                    <div class="right-column">
                        ${this.skillWorksGenerator.generate(resume.work, resume.labels)} 
                        ${this.simplifyWorksGenerator.generate(lang, resume.work, resume.labels)} 
                        ${this.internshipsGenerator.generate(lang, resume.internships, resume.labels)} 
                    </div>
                </div>
            </body>
        </html>`;
    }
}