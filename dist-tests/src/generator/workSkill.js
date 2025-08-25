import MarkdownGenerator from '../utils/MarkdownGenerator.js';
export default class WorkSkillGenerator {
    generate(work, labels) {
        if (work.length == 0) {
            return '';
        }
        const highlightsByCat = this.groupHighlightByCategory(work);
        return `
            <div id="workSkill">
                <div class="highlights">
                    ${Array.from(highlightsByCat).map(cat => this.generateCategory(cat)).join('')}
                </div>
            </div>`;
    }
    generateCategory([category, highlights]) {
        return `
            <h3>${category}</h3>
            <ul>
                ${Array.from(highlights).sort().map(highlight => this.generateHighlight(highlight)).join('')}
            </ul>`;
    }
    generateHighlight(highlight) {
        return `<li>${MarkdownGenerator.generate(highlight)}</li>`;
    }
    groupHighlightByCategory(work) {
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
