/*var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it*/

const assert = require('assert');
const geometrie = require('../../cube/geometrie');

describe('Géométrie cube', function () {
    it('Perimétre de 3', function perimetre() {
        let response = geometrie.perimetre(3);
        assert.equal(response, 12);
    });
    it('Air de 3', function air() {
        let response = geometrie.airFace(3);
        assert.equal(response, 12);
    });
});
