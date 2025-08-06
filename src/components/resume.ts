
import type { ResumeSchema } from '../type/type.js';
import { EducationGenerator } from './education.js';
import { HeaderGenerator } from './header.js';
import { InterestGenerator } from './interests.js';
import { LanguagesGenerator } from './languages.js';
import { MetaGenerator } from './meta.js';
import { SkillGenerator } from './skills.js';
import { WorkSimplifyGenerator } from './workSimplify.js';
import { WorkSkillGenerator } from './workSkill.js';

export class ResumeGenerator {

    public static generate(resume: ResumeSchema, css: Buffer, js: Buffer): string {
        return `
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                ${MetaGenerator.generate(resume.basics)}
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
                    ${HeaderGenerator.generate(resume.basics)} 
                </div>
                <div class="body">
                <aside class="left-column">
                    ${EducationGenerator.generate(resume.education, resume.labels)}
                    ${LanguagesGenerator.generate(resume.languages, resume.labels)}
                    ${SkillGenerator.generate(resume.skills)} 
                    ${InterestGenerator.generate(resume.interests, resume.labels)}
                </aside>
                <div class="vl"></div>
                    <div class="right-column">
                        ${WorkSkillGenerator.generate(resume.work, resume.labels)} 
                        ${WorkSimplifyGenerator.generate(resume.work, resume.labels)} 
                    </div>
                </div>
            </body>
        </html>`;
    }
}