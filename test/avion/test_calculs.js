const calculs = require('../../avion/calculs');
const expect = require('chai').expect;

describe('Calculs avion - Boeing 747-400', function () {
    it('Vérifier la capacité de vol du Boeing 747-400', function () {
       
        const poidsVide = 183040;
        const poidsMaxSansCarburant = 246070;
        const poidsMaxDecollage = 396893;
        const poidsMaxAtterrissage = 265350;
        const capaciteCarburantMax = 173997;
        const poidsMaxPassagers = 400 * 100;
        const nbPassagers = 400;
        const poidsCarburantPassagers = nbPassagers * 3.1 * 100 * 0.81;
        const poidsCharge = poidsVide + poidsCarburantPassagers;

        let isFlyable = calculs.flyable(poidsVide, poidsCharge, poidsMaxDecollage, poidsMaxSansCarburant, poidsMaxAtterrissage, capaciteCarburantMax, poidsMaxPassagers, nbPassagers);

        expect(isFlyable).to.be.true;
    });
});
