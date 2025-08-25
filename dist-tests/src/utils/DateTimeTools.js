export default class DateTimeTools {
    static generate(date) {
        return `<time datetime="${date}">${DateTimeTools.formatDate(date)}</time>`;
    }
    static formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en', {
            month: 'short',
            year: 'numeric',
            timeZone: 'UTC',
        });
    }
}
