import Icon from '../utils/IconGenerator.js';
import Link from '../utils/LinkGenerator.js';
import type { Basics, Location, Profiles } from '../../packages/json_cv_schema/src/type/type.js';

export default class HeaderGenerator {

    private static formatCountry(countryCode: string): string {
        return Intl.DisplayNames ? new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode)! : countryCode;
    }

    private static calculateAge(birthday: Date): Number {
        var ageDifMs = Date.now() - birthday.getDate();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    public static generate(basics: Basics): string {
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

    private static generateProfile({ network, url, username }: Profiles): string {
        return `
            <li>
                ${network && Icon.generate(network as feather.FeatherIconNames, 'user')} ${Link.generate(url, username)}
                ${network && `<span class="network">(${network})</span>`}
            </li>`;
    }

    private static generateCity(location: Location): string {
        const htmlCity = `${location.city}, ${HeaderGenerator.formatCountry(location.countryCode)}`;
        const css = 'font-size: 10px;';
        return HeaderGenerator.generateLineWithIcon('map-pin', htmlCity, css);
    }

    private static generatePhone(phone: string): string {
        const htmlPhone = `<a href="tel:${phone.replace(/\s/g, '')}">${phone}</a>`;
        return HeaderGenerator.generateLineWithIcon('phone', htmlPhone);
    }

    private static generateLink(url: string): string {
        return HeaderGenerator.generateLineWithIcon('link', Link.generate(url));
    }

    private static generateEMail(email: string): string {
        const htmlMail = `<a href="mailto:${email}">${email}</a>`;
        return HeaderGenerator.generateLineWithIcon('mail', htmlMail);
    }

    private static generateLineWithIcon(name: feather.FeatherIconNames, text: string, css?: string): string {
        return `
            <li${css ? ` style="${css}"` : ''}>
                ${Icon.generate(name)}
                ${text}
            </li>`;
    }

}