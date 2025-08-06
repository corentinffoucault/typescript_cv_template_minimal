import IconGenerator from '../utils/IconGenerator.js';
import LinkGenerator from '../utils/LinkGenerator.js';
import type { Basics, Location, Profiles } from '../../packages/json_cv_schema/src/type/Type.js';

export default class HeaderGenerator {

    private formatCountry(countryCode: string): string {
        return Intl.DisplayNames ? new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode)! : countryCode;
    }

    private calculateAge(birthday: Date): Number {
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    public generate(basics: Basics): string {
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

    private static generateProfile({ network, url, username }: Profiles): string {
        return `
            <li>
                ${network && IconGenerator.generate(network as feather.FeatherIconNames, 'user')} ${LinkGenerator.generate(url, username)}
                ${network && `<span class="network">(${network})</span>`}
            </li>`;
    }

    private generateCity(location: Location): string {
        const htmlCity = `${location.city}, ${this.formatCountry(location.countryCode)}`;
        const css = 'font-size: 10px;';
        return this.generateLineWithIcon('map-pin', htmlCity, css);
    }

    private generatePhone(phone: string): string {
        const htmlPhone = `<a href="tel:${phone.replace(/\s/g, '')}">${phone}</a>`;
        return this.generateLineWithIcon('phone', htmlPhone);
    }

    private generateEMail(email: string): string {
        const htmlMail = `<a href="mailto:${email}">${email}</a>`;
        return this.generateLineWithIcon('mail', htmlMail);
    }

    private generateLineWithIcon(name: feather.FeatherIconNames, text: string, css?: string): string {
        return `
            <li${css ? ` style="${css}"` : ''}>
                ${IconGenerator.generate(name)}
                ${text}
            </li>`;
    }

}