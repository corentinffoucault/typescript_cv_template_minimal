
export default class DateTimeTools {
    public static generate(date: string): string {
        return `<time datetime="${date}">${DateTimeTools.formatDate(date)}</time>`;
    }

    private static formatDate(dateString: string): string {
        return new Date(dateString).toLocaleDateString('en', {
            month: 'short',
            year: 'numeric',
            timeZone: 'UTC',
        });
    }
}
