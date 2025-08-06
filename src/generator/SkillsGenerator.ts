import type { Skill } from "../../packages/json_cv_schema/src/type/Type.js";

export default class SkillsGenerator {

    public generate(skills: Skill[]): string {
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

    private generateSkill(skill: Skill): string {
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

    private generateKeyword(keyword: string): string {
        return `<div class="main-skill skill left">${keyword}</div>`;
    }
}