import type { Basics } from '../type/type.js';
import markdown from '../utils/markdown.js';

export class MetaGenerator {
    public static generate(basics: Basics): string {
        const { name, summary } = basics;

        return `
            ${name && `<title>${name}</title>`}
            ${summary && `<meta name="description" content="${markdown(summary, true)}" />`}`;
    }
}
