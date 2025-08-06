import ResumeGenerator from "./ResumeConvertor.js";
import * as fs from 'fs/promises';
import { Controler } from "../packages/json_cv_schema/src/Index.js";

async function main() {
    const resume = JSON.parse((await fs.readFile("resource/resume.json")).toString());
    Controler.isValidResume(resume);
    const a = await (new ResumeGenerator()).generateResume("fr", resume);
    await fs.writeFile("resource/result.html", a);
}

void main();