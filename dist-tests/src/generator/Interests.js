export default class InterestGenerator {
    static generate(interests, labels) {
        if (interests.length == 0) {
            return '';
        }
        return `
            <div class="container interests-container">
                <h3 class="bold">${labels.interests}</h3>
                ${interests.map(InterestGenerator.generateInterest).join('')}
            </div>`;
    }
    static generateInterest(interest) {
        return `
            <section class="item">
                <div class="main-skill skill left">${interest.name}</div>
            </section> `;
    }
}
