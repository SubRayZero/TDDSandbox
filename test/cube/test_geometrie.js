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
        assert.equal(response, 9);
    });

    it('Surface', function surfaceCube() {
        let response = geometrie.surfaceCube(3);
        assert.equal(response, 54);
    });

    it('Volume', function volume() {
        let response = geometrie.volumeCube(3);
        assert.equal(response, 27);
    });
});

const Cube = require('../../cube/cube').Cube

describe('Géométrie cube class', function () {

    const cube = new Cube(3);

    it('Perimétre de 3', function perimetre() {
        let response = geometrie.perimetre(3);
        assert.equal(response, 12);
    });

    it('Air de 3', function air() {
        let response = cube.airFace(3);
        assert.equal(response, 9);
    });

    it('Surface', function surfaceCube() {
        let response = cube.surfaceCube(3);
        assert.equal(response, 54);
    });

    it('Volume', function volume() {
        let response = cube.volumeCube(3);
        assert.equal(response, 27);
    });
});
