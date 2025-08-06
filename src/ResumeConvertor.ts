import { ResumeGenerator } from "./components/resume.js";
import { ResumeSchema } from "./type/type.js";
import * as fs from 'fs/promises';

export default class ResumeConvertor {
    public async generateResume(resumeJson: ResumeSchema) {
        const css = await fs.readFile("resource/page.css");
        const js = await fs.readFile("resource/page.js");
        return ResumeGenerator.generate(resumeJson, css, js);
    }
}