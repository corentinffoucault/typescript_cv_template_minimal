
import type { ResumeSchema } from '../../packages/json_cv_schema/src/type/type.js';
import EducationGenerator from './Education.js';
import HeaderGenerator from './Header.js';
import InterestGenerator from './Interests.js';
import LanguagesGenerator from './Languages.js';
import MetaGenerator from './Meta.js';
import SkillGenerator from './Skills.js';
import WorkSimplifyGenerator from './WorkSimplify.js';
import WorkSkillGenerator from './WorkSkill.js';

export default class ResumeGenerator {

    public constructor(
        private metaGenerator: MetaGenerator,
        private headerGenerator: HeaderGenerator,
        private educationGenerator: EducationGenerator,
        private languagesGenerator: LanguagesGenerator,
        private skillGenerator: SkillGenerator,
        private interestGenerator: InterestGenerator,
        private workSkillGenerator: WorkSkillGenerator,
        private workSimplifyGenerator: WorkSimplifyGenerator,
    ) {

    }

    public generate(resume: ResumeSchema, css: Buffer, js: Buffer): string {
        return `
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                ${this.metaGenerator.generate(resume.basics)}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                    ${this.skillGenerator.generate(resume.skills)} 
                    ${this.interestGenerator.generate(resume.interests, resume.labels)}
                </aside>
                <div class="vl"></div>
                    <div class="right-column">
                        ${this.workSkillGenerator.generate(resume.work, resume.labels)} 
                        ${this.workSimplifyGenerator.generate(resume.work, resume.labels)} 
                    </div>
                </div>
            </body>
        </html>`;
    }
}