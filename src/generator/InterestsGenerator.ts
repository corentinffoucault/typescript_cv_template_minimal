import type { Interest, Labels } from '../../packages/json_cv_schema/src/type/Type.js';

export default class InterestGenerator {

    public generate(interests: Interest[], labels: Labels): string {
        if (interests.length == 0) {
            return '';
        }
        return `
            <div class="container interests-container">
                <h3 class="bold">${labels.interests}</h3>
                ${interests.map(this.generateInterest).join('')}
            </div>`;
    }

    private generateInterest(interest: Interest): string {
        return `
            <section class="item">
                <div class="main-skill skill left">${interest.name}</div>
            </section> `;
    }
}