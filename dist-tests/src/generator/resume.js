export default class ResumeGenerator {
    metaGenerator;
    headerGenerator;
    educationGenerator;
    languagesGenerator;
    skillGenerator;
    interestGenerator;
    workSkillGenerator;
    workSimplifyGenerator;
    constructor(metaGenerator, headerGenerator, educationGenerator, languagesGenerator, skillGenerator, interestGenerator, workSkillGenerator, workSimplifyGenerator) {
        this.metaGenerator = metaGenerator;
        this.headerGenerator = headerGenerator;
        this.educationGenerator = educationGenerator;
        this.languagesGenerator = languagesGenerator;
        this.skillGenerator = skillGenerator;
        this.interestGenerator = interestGenerator;
        this.workSkillGenerator = workSkillGenerator;
        this.workSimplifyGenerator = workSimplifyGenerator;
    }
    generate(resume, css, js) {
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
