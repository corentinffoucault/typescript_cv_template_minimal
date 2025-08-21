import Link from '../utils/LinkGenerator.js';
import type { Education, Labels } from '../../packages/json_cv_schema/src/type/type.js';

export default class EducationGenerator {
    public static generate(educations: Education[], labels: Labels): string {
        if (educations.length == 0) {
            return '';
        }
        return `
            <div class="container education-container">
                <h3 class="bold">${labels.diploma}</h3>
                <section id="education">
                    <div>
                    ${educations.map(EducationGenerator.generateDiploma).join('')}
                    </div>
                </section>
            </div>`;
    }

    public static generateDiploma(education: Education): string {
        return `
            <article>
                <header>
                  <h5>${Link.generate(education.url, education.institution)}</h5>
                  <div>
                    ${education.area && `<strong>${education.area}</strong>`}
                    ${education.endDate}
                  </div>
                </header>
              </article>`;
    }
}

