
function perimetre(lgCote) {
    return 4 * lgCote;
}

function airFace(lgCote) {
    return lgCote * lgCote;
}


function surfaceCube(lgCote) {
    return 6 * lgCote * lgCote;
}

function volumeCube(lgCote) {
    return lgCote * lgCote * lgCote;
}


module.exports = {
    perimetre: perimetre,
    airFace: airFace,
    surfaceCube: surfaceCube,
    volumeCube: volumeCube
};
