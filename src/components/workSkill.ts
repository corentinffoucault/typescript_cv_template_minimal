
import type { Labels, Work } from '../../../json_cv_schema/src/type/type.js';
import markdown from '../utils/markdown.js';

export class WorkSkillGenerator {

    public static generate(work: Work[] = [], labels: Labels): string {
        if (work.length == 0) {
            return '';
        }

        const highlightsByCat: Map<string, Set<string>> = WorkSkillGenerator.groupHighlightByCategory(work);

        return `
            <div id="workSkill">
                <div class="highlights">
                    ${Array.from(highlightsByCat).map(WorkSkillGenerator.generateCategory).join('')}
                </div>
            </div>`;
    }

    private static generateCategory([category, highlights]: [string, Set<string>]): string {
        return `
            <h3>${category}</h3>
            <ul>
                ${Array.from(highlights).sort().map(WorkSkillGenerator.generateHighlight).join('')}
            </ul>`;
    }

    private static generateHighlight(highlight: string): string {
        return `<li>${markdown(highlight)}</li>`;
    }

    private static groupHighlightByCategory(work: Work[]): Map<string, Set<string>> {
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