export default class LanguagesGenerator {
    static generate(languages, labels) {
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
    static generateLanguage(language) {
        return `
            <li>
                <div class="subWorkInfo"><h6>${language.language}:</h6>  ${LanguagesGenerator.generateFluency(language)}</div>
            </li>`;
    }
    static generateFluency(language) {
        if (language.fluency) {
            return `<em>${language.fluency}</em>`;
        }
        return '';
    }
}
