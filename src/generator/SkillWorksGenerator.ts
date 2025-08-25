
import type { Labels, Work } from '../../packages/json_cv_schema/src/type/Type.js';
import MarkdownGenerator from '../utils/MarkdownGenerator.js';

export default class SkillWorksGenerator {

    public generate(work: Work[], labels: Labels): string {
        if (work.length == 0) {
            return '';
        }

        const highlightsByCat: Map<string, Set<string>> = this.groupHighlightByCategory(work);

        return `
            <div id="workSkill">
                <div class="highlights">
                    ${Array.from(highlightsByCat).map(cat => this.generateCategory(cat)).join('')}
                </div>
            </div>`;
    }

    private generateCategory([category, highlights]: [string, Set<string>]): string {
        return `
            <h3>${category}</h3>
            <ul>
                ${Array.from(highlights).sort().map(highlight => this.generateHighlight(highlight)).join('')}
            </ul>`;
    }

    private generateHighlight(highlight: string): string {
        return `<li>${MarkdownGenerator.generate(highlight)}</li>`;
    }

    private groupHighlightByCategory(work: Work[]): Map<string, Set<string>> {
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