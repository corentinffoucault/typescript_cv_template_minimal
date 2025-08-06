import DateTimeTools from '../utils/DateTimeTools.js';

export default class DurationGenerator {

    public static print(lang: Intl.LocalesArgument, startDate?: string, endDate?: string): string {
        if (!startDate) {
            return '';
        }
        if (endDate === startDate) {
            return DurationGenerator.getDate(lang, endDate);
        }
        return `<time-duration>${DurationGenerator.getDate(lang, startDate)} – ${endDate ? DurationGenerator.getDate(lang, endDate) : 'Present'}</time-duration>`;
    }

    private static getDate(lang: Intl.LocalesArgument, dateToConvert: string): string {
        return dateToConvert.length === 4 ? dateToConvert : DateTimeTools.generate(lang, dateToConvert);
    }
}
