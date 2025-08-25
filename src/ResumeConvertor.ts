import { promises as fs } from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

import ResumeGenerator from "./generator/ResumeGenerator.js";
import EducationGenerator from './generator/EducationGenerator.js';
import HeaderGenerator from './generator/HeaderGenerator.js';
import InterestGenerator from './generator/InterestsGenerator.js';
import LanguagesGenerator from './generator/LanguagesGenerator.js';
import MetaGenerator from './generator/MetaGenerator.js';
import SkillGenerator from './generator/SkillsGenerator.js';
import WorkSimplifyGenerator from './generator/WorkSimplifyGenerator.js';
import WorkSkillGenerator from './generator/WorkSkillGenerator.js';

import { ResumeSchema } from "../packages/json_cv_schema/src/Index.js";
import { IResumeConvertor } from "../packages/json_cv_schema/src/type/IResumeConvertor.js";

export default class ResumeConvertor implements IResumeConvertor {
    private resumeGenerator: ResumeGenerator;

    constructor() {
        this.resumeGenerator = new ResumeGenerator(
            new MetaGenerator(),
            new HeaderGenerator(),
            new EducationGenerator(),
            new LanguagesGenerator(),
            new SkillGenerator(),
            new InterestGenerator(),
            new WorkSkillGenerator(),
            new WorkSimplifyGenerator());
    }

    public async generateResume(resumeJson: ResumeSchema) {
        const __filename = fileURLToPath(import.meta.url);
        const _srcPath = path.dirname(__filename);
        const _projectPath = path.dirname(_srcPath);
        const css = await fs.readFile(path.join(_projectPath, "resources/page.css"));
        const js = await fs.readFile(path.join(_projectPath, "resources/page.js"));
        return this.resumeGenerator.generate(resumeJson, css, js);
    }
}