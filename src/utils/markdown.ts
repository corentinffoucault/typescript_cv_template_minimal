import micromark from "micromark";
import striptags from 'striptags';

export default function markdown(doc?: string, stripTags = false) {
    if (!doc) {
        return '';
    }
    const html = micromark(doc);
    return stripTags ? striptags(html) : html;
}
