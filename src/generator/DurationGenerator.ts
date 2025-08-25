import DateTimeTools from '../utils/DateTimeTools.js';

export default class DurationGenerator {

    public static print(startDate?: string, endDate?: string): string {
        if (!startDate) {
            return '';
        }
        if (endDate === startDate) {
            return DurationGenerator.getDate(endDate);
        }
        return `<time-duration>${DurationGenerator.getDate(startDate)} – ${endDate ? DurationGenerator.getDate(endDate) : 'Present'}</time-duration>`;
    }

    private static getDate(dateToConvert: string): string {
        return dateToConvert.length === 4 ? dateToConvert : DateTimeTools.generate(dateToConvert);
    }
}
