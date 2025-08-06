import type { Interest, Labels } from '../../../json_cv_schema/src/type/type.js';

export class InterestGenerator {

    public static generate(interests: Interest[], labels: Labels): string {
        if (interests.length == 0) {
            return '';
        }
        return `
            <div class="container interests-container">
                <h3 class="bold">${labels.interests}</h3>
                ${interests.map(InterestGenerator.generateInterest).join('')}
            </div>`;
    }

    private static generateInterest(interest: Interest): string {
        return `
            <section class="item">
                <div class="main-skill skill left">${interest.name}</div>
            </section> `;
    }
}