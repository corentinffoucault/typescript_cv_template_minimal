import type { Education, Labels } from '../type/type.js';

export class EducationGenerator {
    public static generate(educations: Education[], labels: Labels): string {
        if (educations.length == 0) {
            return '';
        }
        return `
            <div class="container education-container">
                <h3 class="bold">${labels.diploma}</h3>
            </div>`;
    }
}

