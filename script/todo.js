class Todo {
    constructor(id, data, categoria, descrizione) {
        this.id = id;
        this.data = data;
        this.categoria = categoria;
        this.descrizione = descrizione;
        this.completato = false;
    }
}

class Todos {
    constructor(){
        this.todos = [];
    }

    salvaLs() {
        localStorage.setItem('todos', JSON.stringify(this.Todos));
    }

    caricaLs(){
        let top = localStorage.getItem('todos');
        if(tmp){
            this.todos = JSON.parse(tmp);
        }
    }

    rimuoviLs(){
        localStorage.removeItem('todos');
    }

    aggiungi(todo) {
        this.todos.push(todo);
    }

//implementa metodi rimuovi modifica e completa 

}