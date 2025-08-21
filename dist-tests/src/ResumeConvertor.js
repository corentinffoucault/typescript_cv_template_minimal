import { promises as fs } from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import ResumeGenerator from "./generator/Resume.js";
export default class ResumeConvertor {
    async generateResume(resumeJson) {
        const __filename = fileURLToPath(import.meta.url);
        const _srcPath = path.dirname(__filename);
        const _projectPath = path.dirname(_srcPath);
        const css = await fs.readFile(path.join(_projectPath, "resources/page.css"));
        const js = await fs.readFile(path.join(_projectPath, "resources/page.js"));
        return ResumeGenerator.generate(resumeJson, css, js);
    }
}
