import Icon from '../utils/IconGenerator.js';
import Link from '../utils/LinkGenerator.js';
export default class HeaderGenerator {
    static formatCountry(countryCode) {
        return Intl.DisplayNames ? new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode) : countryCode;
    }
    static calculateAge(birthday) {
        var ageDifMs = Date.now() - birthday.getDate();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    static generate(basics) {
        const { email, birth, label, location, name, phone, profiles = [] } = basics;
        return `
            <header class="masthead">
                <div class="menu">
                    <div><h6>${name}</h6></div>
                    <div>${birth ? `Age: ${HeaderGenerator.calculateAge(new Date(birth))}` : ''}</div>
                    <ul class="icon-list">
                        ${HeaderGenerator.generateCity(location)}
                        ${HeaderGenerator.generateEMail(email)}
                        ${HeaderGenerator.generatePhone(phone)}
                        ${profiles.map((profile) => HeaderGenerator.generateProfile(profile)).join('')}
                    </ul>
                </div>
                <div class="content"><h1>${label}</h1></div>
            </header>`;
    }
    static generateProfile({ network, url, username }) {
        return `
            <li>
                ${network && Icon.generate(network, 'user')} ${Link.generate(url, username)}
                ${network && `<span class="network">(${network})</span>`}
            </li>`;
    }
    static generateCity(location) {
        const htmlCity = `${location.city}, ${HeaderGenerator.formatCountry(location.countryCode)}`;
        const css = 'font-size: 10px;';
        return HeaderGenerator.generateLineWithIcon('map-pin', htmlCity, css);
    }
    static generatePhone(phone) {
        const htmlPhone = `<a href="tel:${phone.replace(/\s/g, '')}">${phone}</a>`;
        return HeaderGenerator.generateLineWithIcon('phone', htmlPhone);
    }
    static generateLink(url) {
        return HeaderGenerator.generateLineWithIcon('link', Link.generate(url));
    }
    static generateEMail(email) {
        const htmlMail = `<a href="mailto:${email}">${email}</a>`;
        return HeaderGenerator.generateLineWithIcon('mail', htmlMail);
    }
    static generateLineWithIcon(name, text, css) {
        return `
            <li${css ? ` style="${css}"` : ''}>
                ${Icon.generate(name)}
                ${text}
            </li>`;
    }
}
