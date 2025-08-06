function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en', {
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC',
    });
}

export default function DateTime(date: string): string {
    return `<time datetime="${date}">${formatDate(date)}</time>`;
}
