import DateTime from '../utils/date-time.js';

export default function Duration(startDate?: string, endDate?: string): string {
    if (!startDate) {
        return '';
    }
    if (endDate === startDate) {
        return getDate(endDate);
    }
    return `<time-duration>${getDate(startDate)} – ${endDate ? getDate(endDate) : 'Present'}</time-duration>`;
}

function getDate(dateToConvert: string): string {
    return dateToConvert.length === 4 ? dateToConvert : DateTime(dateToConvert);
}
