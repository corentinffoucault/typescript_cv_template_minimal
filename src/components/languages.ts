
import type { Labels, Language } from '../type/type.js';

export class LanguagesGenerator {

    public static generate(languages: Language[], labels: Labels): string {
        if (languages.length == 0) {
            return '';
        }
        return `
        <div class="container languages-container">
            <h3 class="bold">${labels.language}</h3>
            <ul class="minimal">
                ${languages.map(LanguagesGenerator.generateLanguage).join('')}
            </ul>
        </div>`;
    }

    private static generateLanguage(language: Language): string {
        return `
            <li>
                <div class="subWorkInfo"><h6>${language.language}:</h6>  ${LanguagesGenerator.generateFluency(language)}</div>
            </li>`;
    }

    private static generateFluency(language: Language): string {
        if (language.fluency) {
            return `<em>${language.fluency}</em>`;
        }
        return '';
    }
}