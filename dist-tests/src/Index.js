import ResumeGenerator from "./ResumeConvertor.js";
import * as fs from 'fs/promises';
async function main() {
    const resume = await fs.readFile("resource/resume.json");
    const a = await (new ResumeGenerator()).generateResume(JSON.parse(resume.toString()));
    await fs.writeFile("resource/result.html", a);
}
void main();
