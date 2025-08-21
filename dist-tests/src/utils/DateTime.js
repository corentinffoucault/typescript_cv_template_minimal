export default class DateTime {
    static generate(date) {
        return `<time datetime="${date}">${DateTime.formatDate(date)}</time>`;
    }
    static formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en', {
            month: 'short',
            year: 'numeric',
            timeZone: 'UTC',
        });
    }
}
