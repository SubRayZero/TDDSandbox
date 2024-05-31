
class Cube {

    constructor(lgCote) {
        this.lgCote = lgCote;
    }

    perimetre(lgCote) {
        return 4 * lgCote;
    }

    airFace(lgCote) {
        return lgCote * lgCote;
    }


    surfaceCube(lgCote) {
        return 6 * lgCote * lgCote;
    }

    volumeCube(lgCote) {
        return lgCote * lgCote * lgCote;
    }
}


module.exports = {
    Cube: Cube
};