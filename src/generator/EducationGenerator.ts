import LinkGenerator from '../utils/LinkGenerator.js';
import type { Education, Labels } from '../../packages/json_cv_schema/src/type/Type.js';

export default class EducationGenerator {
    public generate(educations: Education[], labels: Labels): string {
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

    public generateDiploma(education: Education): string {
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

