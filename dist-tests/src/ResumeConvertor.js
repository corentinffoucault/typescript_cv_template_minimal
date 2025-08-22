import { promises as fs } from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import ResumeGenerator from "./generator/Resume.js";
import EducationGenerator from './generator/Education.js';
import HeaderGenerator from './generator/Header.js';
import InterestGenerator from './generator/Interests.js';
import LanguagesGenerator from './generator/Languages.js';
import MetaGenerator from './generator/Meta.js';
import SkillGenerator from './generator/Skills.js';
import WorkSimplifyGenerator from './generator/WorkSimplify.js';
import WorkSkillGenerator from './generator/WorkSkill.js';
export default class ResumeConvertor {
    resumeGenerator;
    constructor() {
        this.resumeGenerator = new ResumeGenerator(new MetaGenerator(), new HeaderGenerator(), new EducationGenerator(), new LanguagesGenerator(), new SkillGenerator(), new InterestGenerator(), new WorkSkillGenerator(), new WorkSimplifyGenerator());
    }
    async generateResume(resumeJson) {
        const __filename = fileURLToPath(import.meta.url);
        const _srcPath = path.dirname(__filename);
        const _projectPath = path.dirname(_srcPath);
        const css = await fs.readFile(path.join(_projectPath, "resources/page.css"));
        const js = await fs.readFile(path.join(_projectPath, "resources/page.js"));
        return this.resumeGenerator.generate(resumeJson, css, js);
    }
}
