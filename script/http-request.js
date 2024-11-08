function getAereoport(){
    //http://google.com inditizzo assoluto
    fetch('./data/aereoporti.json') //indirizzo relativo
    .then(Response => {
        console.log(Response);
    })
    .catch( error => {
        console.log(error);
    })
}

getAereoport();