export default class LinkGenerator {
    static generate(url, name) {
        return name ? (url ? `<a href="${url}">${name}</a>` : name) : url ? `<a href="${url}">${LinkGenerator.formatURL(url)}</a>` : '';
    }
    static formatURL(url) {
        return url.replace(/^(https?:|)\/\//, '').replace(/\/$/, '');
    }
}
