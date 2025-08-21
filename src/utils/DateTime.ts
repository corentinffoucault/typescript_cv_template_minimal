
export default class DateTime {
    public static generate(date: string): string {
        return `<time datetime="${date}">${DateTime.formatDate(date)}</time>`;
    }

    private static formatDate(dateString: string): string {
        return new Date(dateString).toLocaleDateString('en', {
            month: 'short',
            year: 'numeric',
            timeZone: 'UTC',
        });
    }
}
