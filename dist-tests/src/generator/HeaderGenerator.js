import IconGenerator from '../utils/IconGenerator.js';
import LinkGenerator from '../utils/LinkGenerator.js';
export default class HeaderGenerator {
    formatCountry(countryCode) {
        return Intl.DisplayNames ? new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode) : countryCode;
    }
    calculateAge(birthday) {
        var ageDifMs = Date.now() - birthday.getDate();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    generate(basics) {
        const { email, birth, label, location, name, phone, profiles = [] } = basics;
        return `
            <header class="masthead">
                <div class="menu">
                    <div><h6>${name}</h6></div>
                    <div>${birth ? `Age: ${this.calculateAge(new Date(birth))}` : ''}</div>
                    <ul class="icon-list">
                        ${this.generateCity(location)}
                        ${this.generateEMail(email)}
                        ${this.generatePhone(phone)}
                        ${profiles.map((profile) => HeaderGenerator.generateProfile(profile)).join('')}
                    </ul>
                </div>
                <div class="content"><h1>${label}</h1></div>
            </header>`;
    }
    static generateProfile({ network, url, username }) {
        return `
            <li>
                ${network && IconGenerator.generate(network, 'user')} ${LinkGenerator.generate(url, username)}
                ${network && `<span class="network">(${network})</span>`}
            </li>`;
    }
    generateCity(location) {
        const htmlCity = `${location.city}, ${this.formatCountry(location.countryCode)}`;
        const css = 'font-size: 10px;';
        return this.generateLineWithIcon('map-pin', htmlCity, css);
    }
    generatePhone(phone) {
        const htmlPhone = `<a href="tel:${phone.replace(/\s/g, '')}">${phone}</a>`;
        return this.generateLineWithIcon('phone', htmlPhone);
    }
    generateEMail(email) {
        const htmlMail = `<a href="mailto:${email}">${email}</a>`;
        return this.generateLineWithIcon('mail', htmlMail);
    }
    generateLineWithIcon(name, text, css) {
        return `
            <li${css ? ` style="${css}"` : ''}>
                ${IconGenerator.generate(name)}
                ${text}
            </li>`;
    }
}
