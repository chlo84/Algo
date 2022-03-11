function sumR(x) {
    if(x.length === 0){
     return 0; 
    }
     return x[0] + sumR(x.slice(1))
}

function chirp(n) {
    return (n > 1) ? 'chirp-'+ chirp(n-1) : 'chirp'
}

function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}

    function validateUsr(username) {
        return /^[0-9a-z_]{4,16}$/.test(username)
}