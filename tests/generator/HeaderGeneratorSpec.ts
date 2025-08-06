import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import HeaderGenerator from '../../src/generator/HeaderGenerator.js';

describe('HeaderGenerator', () => {
    const headerGenerator = new HeaderGenerator();
    it('generate minimal header', () => {
        const header = headerGenerator.generate({
            name: 'firstName lastName',
            label: 'BackEnd Developer Engineer',
            email: 'myemail@email.com',
            phone: '001122334455',
            location: {
                city: 'myCity',
                countryCode: 'FR'
            }
        });
        assert.equal(header, `
            <header class="masthead">
                <div class="menu">
                    <div><h6>firstName lastName</h6></div>
                    <div></div>
                    <ul class="icon-list">
                        
            <li style="font-size: 10px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                myCity, France
            </li>
                        
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:myemail@email.com">myemail@email.com</a>
            </li>
                        
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href="tel:001122334455">001122334455</a>
            </li>
                        
                    </ul>
                </div>
                <div class="content"><h1>BackEnd Developer Engineer</h1></div>
            </header>`);
    });

    it('generate full header', () => {
        const birth = '04/04/1990';
        const header = headerGenerator.generate({
            name: 'firstName lastName',
            label: 'BackEnd Developer Engineer',
            email: 'myemail@email.com',
            phone: '001122334455',
            birth: birth,
            location: {
                city: 'myCity',
                countryCode: 'FR',
                address: '2 street mystreet',
                postalCode: '38000',
                region: 'myrégion'
            },
            profiles: [{
                network: 'network',
                url: 'url',
                username: 'username'
            }]
        });
        assert.equal(header, `
            <header class="masthead">
                <div class="menu">
                    <div><h6>firstName lastName</h6></div>
                    <div>Age: ${calculateAge(birth)}</div>
                    <ul class="icon-list">
                        
            <li style="font-size: 10px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                myCity, France
            </li>
                        
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:myemail@email.com">myemail@email.com</a>
            </li>
                        
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href="tel:001122334455">001122334455</a>
            </li>
                        
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> <a href="url">username</a>
                <span class="network">(network)</span>
            </li>
                    </ul>
                </div>
                <div class="content"><h1>BackEnd Developer Engineer</h1></div>
            </header>`);
    });

    function calculateAge(birthday: string): Number {
        var ageDifMs = Date.now() - new Date(birthday).getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
});
