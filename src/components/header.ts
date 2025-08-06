import markdown from '../utils/markdown.js';
import Icon from '../utils/icon.js';
import Link from '../utils/link.js';
import type { Basics, Location, Profiles } from '../../../json_cv_schema/src/type/type.js';

export class HeaderGenerator {

    private static formatCountry(countryCode: string): string {
        return Intl.DisplayNames ? new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode)! : countryCode;
    }

    private static calculateAge(birthday: Date): Number {
        var ageDifMs = Date.now() - birthday.getDate();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    public static generate(basics: Basics): string {
        const { email, birth, label, location, name, phone, profiles = [], summary, url } = basics;

        return `
            <header class="masthead">
                <div class="menu">
                    <div>${name && `<h6>${name}</h6>`}</div>
                    <div>${birth && `Age: ${HeaderGenerator.calculateAge(new Date(birth))}`}</div>
                    ${summary && `<article>${markdown(summary)}</article>`}
                    <ul class="icon-list">
                        ${location?.city && HeaderGenerator.generateCity(location)}
                        ${email && HeaderGenerator.generateEMail(email)}
                        ${phone && HeaderGenerator.generatePhone(phone)}
                        ${url && HeaderGenerator.generateLink(url)}
                        ${profiles.map((profile) => HeaderGenerator.generateProfile(profile)).join('')}
                    </ul>
                </div>
                <div class="content">${label && `<h1>${label}</h1>`}</div>
            </header>`;
    }

    private static generateProfile({ network, url, username }: Profiles): string {
        return `
            <li>
                ${network && Icon(network as feather.FeatherIconNames, 'user')} ${Link(url, username)}
                ${network && `<span class="network">(${network})</span>`}
            </li>`;
    }

    private static generateCity(location: Location): string {
        const countryCode = location.countryCode && `, ${HeaderGenerator.formatCountry(location.countryCode)}`;
        const htmlCity = `${location.city}${countryCode}`;
        const css = 'font-size: 10px;';
        return HeaderGenerator.generateLineWithIcon('map-pin', htmlCity, css);
    }

    private static generatePhone(phone: string): string {
        const htmlPhone = `<a href="tel:${phone.replace(/\s/g, '')}">${phone}</a>`;
        return HeaderGenerator.generateLineWithIcon('phone', htmlPhone);
    }

    private static generateLink(url: string): string {
        return HeaderGenerator.generateLineWithIcon('link', Link(url));
    }

    private static generateEMail(email: string): string {
        const htmlMail = `<a href="mailto:${email}">${email}</a>`;
        return HeaderGenerator.generateLineWithIcon('mail', htmlMail);
    }

    private static generateLineWithIcon(name: feather.FeatherIconNames, text: string, css?: string): string {
        return `
            <li ${css && `style="${css}"`}>
                ${Icon(name)}
                ${text}
            </li>`;
    }

}