

function formatURL(url: string): string {
    return url.replace(/^(https?:|)\/\//, '').replace(/\/$/, '');
}

export default function Link(url?: string, name?: string): string {
    return name ? (url ? `<a href="${url}">${name}</a>` : name) : url ? `<a href="${url}">${formatURL(url)}</a>` : '';
}
