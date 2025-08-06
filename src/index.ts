import ResumeGenerator from "./ResumeConvertor.js";
import * as fs from 'fs/promises';
import { ResumeSchema } from "./type/type.js";

async function main() {
    const resume = await fs.readFile("resource/resume.json");
    const a = await (new ResumeGenerator()).generateResume(JSON.parse(resume.toString()) as ResumeSchema);
    await fs.writeFile("resource/result.html", a);
}

void main();