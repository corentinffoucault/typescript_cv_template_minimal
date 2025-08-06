
export default class DateTimeTools {
    public static generate(lang: Intl.LocalesArgument, date: string): string {
        return `<time datetime="${date}">${DateTimeTools.formatDate(lang, date)}</time>`;
    }

    private static formatDate(lang: Intl.LocalesArgument, dateString: string): string {
        return new Date(dateString).toLocaleDateString(lang, {
            month: 'short',
            year: 'numeric',
            timeZone: 'UTC',
        });
    }
}
