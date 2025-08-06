
export default class LinkGenerator {
    public static generate(url?: string, name?: string): string {
        return name ? (url ? `<a href="${url}">${name}</a>` : name) : url ? `<a href="${url}">${LinkGenerator.formatURL(url)}</a>` : '';
    }

    private static formatURL(url: string): string {
        return url.replace(/^(https?:|)\/\//, '').replace(/\/$/, '');
    }
}
