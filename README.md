# corso-js-4biAngular è un framework potente e versatile per la creazione di applicazioni web moderne.  

# TypeScript
TypeScript è un superset di JavaScript che aggiunge funzionalità come il tipato statico e le classi. In Angular, TypeScript è il linguaggio principale utilizzato per scrivere il codice.

# Prerequisiti
Node.js e npm: Assicurati di aver installato Node.js (un ambiente di runtime JavaScript) e npm (un gestore di pacchetti).Si può verificare le versioni installate eseguendo 
*i seguenti comandi nel terminale:*  
```node -v```
```npm -v```

# Installazione di Angular  
*Installa l'Angular CLI:*  
```npm install -g @angular/cli```  
L'Angular CLI è uno strumento fondamentale per creare e gestire progetti Angular.  

# Creazione di un Nuovo Progetto  
*Genera un nuovo progetto:*  
```ng new my-first-app```  
Sostituisci my-first-app con il nome desiderato per il tuo progetto. Ricorda di usare trattini (-) per separare le parole e di evitare il camel case (es. my-first-app invece di myFirstApp).  

# Struttura di un Progetto Angular  
*Un progetto Angular ha una struttura ben definita:*  
```node_modules```: Contiene tutte le librerie necessarie per il progetto.  
```src```: Contiene il codice sorgente dell'applicazione.  
```public```: Contiene file statici come immagini o CSS.  
```angular.json```: Contiene la configurazione globale del progetto.  
```package.json```: Contiene informazioni sul progetto e le sue dipendenze.  
```src``` è la cartella più importante:  
```app```: Contiene i componenti, i servizi e altri elementi dell'applicazione.  
```index.html```: È il punto di ingresso dell'applicazione.  
```main.ts```: Contiene la configurazione principale dell'applicazione.  
```styles.css```: Contiene gli stili globali dell'applicazione.  

# Componenti Angular  
Un componente è un blocco fondamentale di un'applicazione Angular.  
*È composto da:*  
Template (HTML): Definisce la struttura visiva del componente.  
Style (CSS): Definisce gli stili del componente.  
Logic (TypeScript): Contiene la logica del componente.  

# Creazione di un componente:  
```ng generate component my-component```


# Data Binding  
*Angular offre diversi tipi di data binding per sincronizzare i dati tra template e componente:*  
Interpolation: Inserisce il valore di una proprietà del componente nel template. ```Es: {{ titolo }}```  
Property binding: Assegna un valore a una proprietà di un elemento nel template. ```Es: <input [value]="nome">```  
Event binding: Associa un evento di un elemento nel template a un metodo del componente. ```Es: <button (click)="saluta()">Saluta</button>```  

# Signal
Una Signal è una funzione che agisce come un ```wrapper``` attorno a un valore. Questa funzione avvolge un valore numerico (o altro) e aggiunge funzionalità che permettono di monitorare o manipolare il valore in modo dinamico. In contesti di programmazione reattiva, le Signal vengono utilizzate per tracciare i cambiamenti di un dato e reagire automaticamente quando il valore cambia.

/
read only o writtable signal 
per modificare il valore bisogna modificare due metodi:
set e update
update sull'array va scritto in maniera diversa. es: this.colori.update(coloreAttuale => [...coloreAttuale, nuovoColore] )
/

# Generics
I Generics consentono di dichiarare strutture dati (come array o liste) e definire tutte le operazioni su di esse, senza specificare immediatamente il tipo di dato. In questo modo, permettono di progettare funzioni o classi più flessibili e riutilizzabili. Il tipo di dato viene deciso solo in un secondo momento, quando effettivamente necessario. Questo permette di creare funzionalità che possono lavorare con diversi tipi di dati, mantenendo il codice più generale e adattabile.

# Computed
Un Computed è una funzione che restituisce un valore calcolato in base ad altre variabili o Signal. A differenza delle variabili normali, un Computed si aggiorna automaticamente ogni volta che cambiano le dipendenze da cui dipende il suo valore. Questo è particolarmente utile in contesti di programmazione reattiva, dove vuoi che i dati derivati siano sempre sincronizzati con le modifiche delle loro dipendenze.


# Model
model è una funzione wrapper che crea un collegamento a doppia via (two-way binding) tra i dati di un componente padre (parent) e quelli di un componente figlio (child). Questo meccanismo permette al valore di un dato di riflettersi e aggiornarsi in entrambi i componenti.

# Interface
Le interface in TypeScript consentono di definire la struttura dei dati, specificando il tipo delle proprietà che un oggetto deve avere. È possibile importare e utilizzare le interface in diversi file per garantire coerenza e facilità di lettura del codice.

Funzioni di Callback
Le funzioni di callback vengono passate come argomenti ad altre funzioni per essere eseguite in un secondo momento. In Angular, sono utili per definire azioni che devono avvenire in seguito a un evento o in risposta a un cambio di stato.

# Service
I service in Angular sono oggetti che non appartengono a un singolo componente, ma piuttosto servono a centralizzare e condividere dati o logiche riutilizzabili in tutta l'applicazione. Grazie all'Dependency Injection (DI), è possibile fornire un'istanza unica di un service a più componenti.

# Dependency Injection e il Root Provider
Angular crea un'istanza della classe di un service all'avvio dell'applicazione, se il service è contrassegnato con providedIn: 'root'. In questo modo, l'istanza viene condivisa in tutta l'applicazione, e ogni componente che inietta il service fa riferimento alla stessa istanza.

```typescript
@Injectable({
  providedIn: 'root'
})
export class PlaylistService { ... }
```

L'istanza della classe PlaylistService viene creata all'inizio dell'applicazione e può essere utilizzata in qualsiasi componente, evitando duplicazioni.

# Writable Signal per Array
Un Writable Signal che gestisce un array, come una playlist, può essere condiviso tra componenti. Grazie a questo, tutti i componenti che ne hanno bisogno possono accedere e modificare lo stesso array di playlist.

Per aggiornare un array con update si usa questa sintassi:

typescript
```this.playlist.update(currentPlaylists => [...currentPlaylists, newPlaylist]);```
# Assegnazione di Variabili con l'Operatore !
L'operatore ! permette di dichiarare una variabile senza assegnarle subito un valore. Questo è utile quando si vuole indicare che la variabile verrà inizializzata più avanti nel codice, evitando errori di "non assegnazione".

meccanisco del cash del browser.
codici di riposta delle richieste http

localstorage del browser.


