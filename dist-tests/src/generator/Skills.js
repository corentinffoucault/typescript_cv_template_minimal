export default class SkillGenerator {
    generate(skills) {
        if (skills.length == 0) {
            return '';
        }
        return `
            <div class="container skill-container">
                <section id="skills">
                ${skills.map(skill => this.generateSkill(skill)).join('')}
                </section>
            </div>`;
    }
    generateSkill(skill) {
        return `
            <section class="container">
                <div class="title">
                    <h3 class="bold">${skill.name}</h3>
                    <div class="keyline"></div>
                </div>
                <div class="minimal flex-container">
                    ${skill.keywords?.map(key => this.generateKeyword(key)).join('')}
                </div>
            </section>`;
    }
    generateKeyword(keyword) {
        return `<div class="main-skill skill left">${keyword}</div>`;
    }
}
