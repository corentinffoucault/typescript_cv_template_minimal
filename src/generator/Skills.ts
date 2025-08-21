import type { Skill } from "../../packages/json_cv_schema/src/type/type.js";

export default class SkillGenerator {

    public static generate(skills: Skill[]): string {
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

    private static generateSkill(skill: Skill): string {
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

    private static generateKeyword(keyword: string): string {
        return `<div class="main-skill skill left">${keyword}</div>`;
    }
}