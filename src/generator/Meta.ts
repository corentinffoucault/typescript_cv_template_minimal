import type { Basics } from '../../packages/json_cv_schema/src/type/type.js';
import Markdown from '../utils/MarkdownGenerator.js';

export default class MetaGenerator {
    public static generate(basics: Basics): string {
        const { name, summary } = basics;

        return `
                <meta charset="utf-8" />
                    <title>${name}</title>
                    ${summary ? `<meta name="description" content="${Markdown.generate(summary, true)}" /> ` : ''}
                <meta name="viewport" content="width=device-width, initial-scale=1" />`;
    }
}
