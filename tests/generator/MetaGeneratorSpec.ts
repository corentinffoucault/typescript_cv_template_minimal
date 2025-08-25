import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import MetaGenerator from '../../src/generator/MetaGenerator.js';

describe('MetaGenerator', () => {
    const metaGenerator = new MetaGenerator();
    it('generate minimal meta', () => {
        const meta = metaGenerator.generate({
            name: 'firstName lastName',
            label: 'BackEnd Developer Engineer',
            email: 'myemail@email.com',
            phone: '001122334455',
            location: {
                city: 'myCity',
                countryCode: 'FR'
            }
        });
        assert.equal(meta, `
                <meta charset="utf-8" />
                    <title>firstName lastName</title>
                    
                <meta name="viewport" content="width=device-width, initial-scale=1" />`);
    });

    it('generate full meta', () => {
        const meta = metaGenerator.generate({
            name: 'firstName lastName',
            label: 'BackEnd Developer Engineer',
            email: 'myemail@email.com',
            phone: '001122334455',
            birth: '04/04/1900',
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
        assert.equal(meta, `
                <meta charset="utf-8" />
                    <title>firstName lastName</title>
                    
                <meta name="viewport" content="width=device-width, initial-scale=1" />`);
    });
});
