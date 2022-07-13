
/* IMPORTANTE! 

In Questo ho esercizio ho sbagliato due cose, fondamentalmente.
i parametri di spice sono invertiti. Come primo parametro richiede un indice,
come secondo parametro il numero di elementi da eliminare a partire dall'indice. 
io li ho invertiti.

in secondo luogo, più importante. la creazione dell'oggetto da pushare,
andava definita DENTRO il metodo addTask() e pushata nell'array.
definendola nei data, sostanzialmente ogni modifica del value dell'input,
agiva su tutti gli elementi creati dinamicamente. Richiamandola in una funzione,
che agisce su ogni elemento del for stampo l'elemento stesso.
*/





/*MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) */

console.log("Vue js ok", Vue)

const root = new Vue({
    el: "#root",
    data: {

        newTask: '',


        tasks: [

            {
                text: "lavare l'auto",
                done: true
            },

            {
                text: "fare la spesa",
                done: false
            },

            {
                text: "stirare",
                done: true
            },

            {
                text: "lavare le finestre",
                done: false
            }
        ]

    },
    methods: {
        deleteTask(index) {
            this.tasks.splice(index, 1)
        },

        addTask() {

            let obj = {
                text: this.newTask,
                done: false
            }

            this.tasks.push(obj)




        },


    }
})


