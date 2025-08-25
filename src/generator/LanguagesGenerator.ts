
import type { Labels, Language } from '../../packages/json_cv_schema/src/type/Type.js';

export default class LanguagesGenerator {

    public generate(languages: Language[], labels: Labels): string {
        if (languages.length == 0) {
            return '';
        }
        return `
        <div class="container languages-container">
            <h3 class="bold">${labels.language}</h3>
            <ul class="minimal">
                ${languages.map(lang => this.generateLanguage(lang)).join('')}
            </ul>
        </div>`;
    }

    private generateLanguage(language: Language): string {
        return `
            <li>
                <div class="subWorkInfo"><h6>${language.language}:</h6>  ${this.generateFluency(language)}</div>
            </li>`;
    }

    private generateFluency(language: Language): string {
        if (language.fluency) {
            return `<em>${language.fluency}</em>`;
        }
        return '';
    }
}