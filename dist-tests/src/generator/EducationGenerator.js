import LinkGenerator from '../utils/LinkGenerator.js';
export default class EducationGenerator {
    generate(educations, labels) {
        if (educations.length == 0) {
            return '';
        }
        return `
            <div class="container education-container">
                <h3 class="bold">${labels.diploma}</h3>
                <section id="education">
                    <div>
                    ${educations.map(this.generateDiploma).join('')}
                    </div>
                </section>
            </div>`;
    }
    generateDiploma(education) {
        return `
            <article>
                <header>
                  <h5>${LinkGenerator.generate(education.url, education.institution)}</h5>
                  <div>
                    ${education.area && `<strong>${education.area}</strong>`}
                    ${education.endDate}
                  </div>
                </header>
              </article>`;
    }
}
