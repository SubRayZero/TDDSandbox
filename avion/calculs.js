function flyable(poidsVide, poidsCharge, poidsMaxDecollage, poidsMaxSansCarburant, poidsMaxAtterrissage, capaciteCarburantMax, poidsMaxPassagers, nbPassagers) {

    if (poidsVide >= poidsCharge ||
        poidsVide >= poidsMaxDecollage ||
        poidsVide >= poidsMaxSansCarburant ||
        poidsVide >= poidsMaxAtterrissage ||
        poidsVide >= capaciteCarburantMax ||
        poidsVide >= poidsMaxPassagers) {
        return false;
    }

    if (poidsCharge <= poidsVide) {
        return false;
    }

    if (poidsCharge >= poidsMaxDecollage) {
        return false;
    }

    let poidsAvecPassagers = poidsCharge + nbPassagers;
    if (poidsAvecPassagers >= poidsMaxSansCarburant || poidsAvecPassagers >= poidsMaxAtterrissage) {
        return false;
    }

    let poidsCarburantPassagers = nbPassagers * poidsVide;
    if (poidsCarburantPassagers >= capaciteCarburantMax) {
        return false;
    }

    let poidsTotal = poidsAvecPassagers + poidsCarburantPassagers;
    if (poidsTotal >= poidsMaxDecollage) {
        return false;
    }

    if (nbPassagers > poidsMaxPassagers) {
        return false;
    }

    return true;
}

module.exports = {
    flyable: flyable
};
