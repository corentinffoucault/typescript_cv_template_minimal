import micromark from "micromark";
import striptags from 'striptags';
export default class MarkdownGenerator {
    static generate(doc, stripTags = false) {
        if (!doc) {
            return '';
        }
        const html = micromark(doc);
        return stripTags ? striptags(html) : html;
    }
}
