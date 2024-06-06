const assert = require('assert');

describe('Calculs avion - Boeing 747-400', function () {

    let flyable;
    before(async function () {
        const module = await import('../../avion/calculs.mjs');
        flyable = module.flyable;
    });

    /*it('should be flyable with default parameters', function () {
        const poidsVide = 183040;
        const poidsMaxSansCarburant = 246070;
        const poidsMaxDecollage = 396893;
        const poidsMaxAtterrissage = 265350;
        const capaciteCarburantMax = 173997;
        const poidsMaxPassagers = 400 * 100;
        const nbPassagers = 400;
        const poidsCarburantPassagers = nbPassagers * 3.1 * 100 * 0.81;
        const poidsCharge = poidsVide + poidsCarburantPassagers;

        let response = flyable(poidsVide, poidsCharge, poidsMaxDecollage, poidsMaxSansCarburant, poidsMaxAtterrissage, capaciteCarburantMax, poidsMaxPassagers, nbPassagers);

        assert.equal(response, true);
    });*/

    it('should not be flyable if poidsVide >= poidsCharge', function () {
        const poidsVide = 183040;
        const poidsCharge = 182000;
        let response = flyable(poidsVide, poidsCharge, 396893, 246070, 265350, 173997, 400 * 100, 400);

        assert.equal(response, false);
    });

    it('should not be flyable if poidsVide >= poidsMaxDecollage', function () {
        const poidsVide = 400000;
        const poidsCharge = 183040;

        let response = flyable(poidsVide, poidsCharge, 396893, 246070, 265350, 173997, 400 * 100, 400);

        assert.equal(response, false);
    });

    it('should not be flyable if poidsCharge >= poidsMaxDecollage', function () {
        const poidsVide = 183040;
        const poidsCharge = 400000;
        let response = flyable(poidsVide, poidsCharge, 396893, 246070, 265350, 173997, 400 * 100, 400);

        assert.equal(response, false);
    });

    it('should not be flyable if poidsAvecPassagers >= poidsMaxSansCarburant', function () {
        const poidsVide = 183040;
        const poidsCharge = 240000;
        const nbPassagers = 500;
        let response = flyable(poidsVide, poidsCharge, 396893, 246070, 265350, 173997, 400 * 100, nbPassagers);

        assert.equal(response, false);
    });

    it('should not be flyable if poidsCarburantPassagers >= capaciteCarburantMax', function () {
        const poidsVide = 183040;
        const poidsCharge = 183040;
        const nbPassagers = 10000;
        let response = flyable(poidsVide, poidsCharge, 396893, 246070, 265350, 173997, 400 * 100, nbPassagers);

        assert.equal(response, false);
    });

    it('should not be flyable if nbPassagers > poidsMaxPassagers', function () {
        const poidsVide = 183040;
        const poidsCharge = 183040;
        const nbPassagers = 500;
        let response = flyable(poidsVide, poidsCharge, 396893, 246070, 265350, 173997, 400 * 100, nbPassagers);

        assert.equal(response, false);
    });
});
