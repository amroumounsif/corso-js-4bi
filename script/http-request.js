function getAereoport(){
    //http://google.com inditizzo assoluto
    fetch('./data/aereoporti.json') //indirizzo relativo
    .then(response => response.json())
    .then(dati => {
        console.log(dati)
    })
    .catch( error => {
        console.log(error);
    })
}

async function getAereoporti2(){

    try
    {
        const risposta = await fetch('./data/aereoporti.js');
        const dati = await risposta.json();
        console.log(dati);
    }

    catch(error){
        console.log(error);
    }
}


function createTable(dai){

}

function createTableHeader(){

}

function createTableRow(createTable){

}


getAereoport();
console.log('Terminato');