//Crie uma classe Agenda que tenha um atributo compromissos (array de strings). 
//Adicione métodos para adicionar compromissos e listar todos os compromissos

class Agenda {

    compromissos: string[];

    constructor() {
        this.compromissos = [];
    }

    adicionarCompromisso(compromisso: string): void {
        this.compromissos.push(compromisso);
        console.log(`Compromisso "${compromisso}" adicionado à agenda.`);
    }

    listarCompromissos(): void {
        console.log("Compromissos na agenda:"); 
        this.compromissos.forEach((compromisso, index) => {
            console.log(`${index + 1}. ${compromisso}`);
        });
    }
}
