function getAereoport() {
    // Fetch dati dal file JSON
    fetch('./data/aereoporti.json') // indirizzo relativo
        .then(response => response.json())
        .then(dati => {
            console.log(dati);
        })
        .catch(error => {
            console.log(error);
        });
}

async function getAereoporti2() {
    try {
        // Ottieni la risposta in modo asincrono
        const risposta = await fetch('./data/aereoporti.json'); // Assicurati che il file esista
        const dati = await risposta.json();
        
        // Trova il div in cui appendere la tabella
        let divDati = document.getElementById('tabella-dati');
        
        // Aggiungi la tabella al div
        divDati.appendChild(createTable(dati));

        // Log dei dati
        console.log(dati);
    } catch (error) {
        console.log(error);
    }
}

// Crea la tabella HTML
function createTable(aereoporti) {
    let table = document.createElement('table');
    table.className = 'table table-striped';
    table.appendChild(createTableHeader());
    
    let tbody = document.createElement('tbody');
    aereoporti.forEach(aereoporto => {
        tbody.appendChild(createTableRow(aereoporto)); // Passa l'oggetto aereoporto
    });
    
    table.appendChild(tbody);
    return table;
}

// Crea l'intestazione della tabella
function createTableHeader() {
    let header = document.createElement('thead');
    header.innerHTML = `
        <tr>
            <th scope="col">id</th>
            <th scope="col">Code</th>
            <th scope="col">Name</th>
            <th scope="col">Country Code</th>
            <th scope="col">Elevation</th>
        </tr>`;
    return header;
}

// Crea una riga della tabella
function createTableRow(aereoporto) {
    let row = document.createElement('tr');
    row.innerHTML = `
        <th scope="row">${aereoporto.id}</th>
        <td>${aereoporto.code}</td>
        <td>${aereoporto.name}</td>
        <td>${aereoporto.country_code}</td>
        <td>${aereoporto.elevation}</td>`;
    return row;
}

// Avvia il processo di caricamento dei dati
getAereoporti2();
console.log('Terminato');
