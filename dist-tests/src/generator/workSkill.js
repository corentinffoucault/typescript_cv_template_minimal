import Markdown from '../utils/MarkdownGenerator.js';
export default class WorkSkillGenerator {
    static generate(work = [], labels) {
        if (work.length == 0) {
            return '';
        }
        const highlightsByCat = WorkSkillGenerator.groupHighlightByCategory(work);
        return `
            <div id="workSkill">
                <div class="highlights">
                    ${Array.from(highlightsByCat).map(WorkSkillGenerator.generateCategory).join('')}
                </div>
            </div>`;
    }
    static generateCategory([category, highlights]) {
        return `
            <h3>${category}</h3>
            <ul>
                ${Array.from(highlights).sort().map(WorkSkillGenerator.generateHighlight).join('')}
            </ul>`;
    }
    static generateHighlight(highlight) {
        return `<li>${Markdown.generate(highlight)}</li>`;
    }
    static groupHighlightByCategory(work) {
        return work.reduce((acc, { highlights }) => {
            if (!highlights || highlights.length == 0) {
                return acc;
            }
            for (let item of highlights) {
                if (item.cat) {
                    if (!acc.has(item.cat)) {
                        acc.set(item.cat, new Set());
                    }
                    acc.get(item.cat).add(item.alternative || item.subject);
                }
            }
            return acc;
        }, new Map());
    }
}
