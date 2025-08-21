export default class SkillGenerator {
    static generate(skills) {
        if (skills.length == 0) {
            return '';
        }
        return `
            <div class="container skill-container">
                <section id="skills">
                ${skills.map(SkillGenerator.generateSkill).join('')}
                </section>
            </div>`;
    }
    static generateSkill(skill) {
        return `
            <section class="container">
                <div class="title">
                    <h3 class="bold">${skill.name}</h3>
                    <div class="keyline"></div>
                </div>
                <div class="minimal flex-container">
                    ${skill.keywords?.map(SkillGenerator.generateKeyword).join('')}
                </div>
            </section>`;
    }
    static generateKeyword(keyword) {
        return `<div class="main-skill skill left">${keyword}</div>`;
    }
}
