export default class LanguagesGenerator {
    generate(languages, labels) {
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
    generateLanguage(language) {
        return `
            <li>
                <div class="subWorkInfo"><h6>${language.language}:</h6>  ${this.generateFluency(language)}</div>
            </li>`;
    }
    generateFluency(language) {
        if (language.fluency) {
            return `<em>${language.fluency}</em>`;
        }
        return '';
    }
}
