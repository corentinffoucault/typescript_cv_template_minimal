import DateTime from '../utils/DateTime.js';

export default class Duration {

    public static print(startDate?: string, endDate?: string): string {
        if (!startDate) {
            return '';
        }
        if (endDate === startDate) {
            return Duration.getDate(endDate);
        }
        return `<time-duration>${Duration.getDate(startDate)} – ${endDate ? Duration.getDate(endDate) : 'Present'}</time-duration>`;
    }

    private static getDate(dateToConvert: string): string {
        return dateToConvert.length === 4 ? dateToConvert : DateTime.generate(dateToConvert);
    }
}
