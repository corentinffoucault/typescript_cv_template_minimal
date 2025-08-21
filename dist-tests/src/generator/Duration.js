import DateTime from '../utils/DateTime.js';
export default class Duration {
    static print(startDate, endDate) {
        if (!startDate) {
            return '';
        }
        if (endDate === startDate) {
            return Duration.getDate(endDate);
        }
        return `<time-duration>${Duration.getDate(startDate)} – ${endDate ? Duration.getDate(endDate) : 'Present'}</time-duration>`;
    }
    static getDate(dateToConvert) {
        return dateToConvert.length === 4 ? dateToConvert : DateTime.generate(dateToConvert);
    }
}
