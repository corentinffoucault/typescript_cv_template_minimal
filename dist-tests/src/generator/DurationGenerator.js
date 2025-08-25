import DateTimeTools from '../utils/DateTimeTools.js';
export default class DurationGenerator {
    static print(startDate, endDate) {
        if (!startDate) {
            return '';
        }
        if (endDate === startDate) {
            return DurationGenerator.getDate(endDate);
        }
        return `<time-duration>${DurationGenerator.getDate(startDate)} – ${endDate ? DurationGenerator.getDate(endDate) : 'Present'}</time-duration>`;
    }
    static getDate(dateToConvert) {
        return dateToConvert.length === 4 ? dateToConvert : DateTimeTools.generate(dateToConvert);
    }
}
