import DurationGenerator from './DurationGenerator.js';
import type { Labels, Internship, } from '../../packages/json_cv_schema/src/type/Type.js';
import LinkGenerator from '../utils/LinkGenerator.js';

export default class SimplifyWorksGenerator {

    public generate(lang: Intl.LocalesArgument, internships: Internship[] = [], labels: Labels): string {
        if (internships.length == 0) {
            return '';
        }
        return `
        <div id="internships">
        <h3>${labels.internships}</h3>
        <div class="internships">
          ${internships.map(internship => this.generateIntership(lang, internship)).join('')}
        </div>
      </div>`;
    }

    private generateIntership(lang: Intl.LocalesArgument, internship: Internship): string {
        return `
            <p>${internship.startDate && `${DurationGenerator.print(lang, internship.startDate, internship.endDate)}: `} ${LinkGenerator.generate(internship.url, internship.name)} ${internship.subject}</p>
            `;
    }

}