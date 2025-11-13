//Crie uma classe Animal com um atributo privado energia e um método comer() que aumenta a energia.
//Crie subclasses Leao e Passaro, onde Leao usa o método comer() para caçar (gasta energia primeiro e depois recupera) e 
//Passaro usa comer() para se alimentar (só aumenta energia).
//Crie um método statusEnergia() que exibe o nível de energia do animal.
//Use polimorfismo para chamar esses métodos para diferentes animais.

abstract class Animal {
    private energia: number;

    constructor(energiaInicial: number) {
        this.energia = energiaInicial;
    }

    protected alterarEnergia(valor: number): void {
        this.energia += valor;
        if (this.energia < 0) this.energia = 0; 
    }

    abstract comer(): void;

    statusEnergia(): void {
        console.log(`Energia atual: ${this.energia}`);
    }
}

class Leao extends Animal {
    comer(): void {
        console.log("O leão sai para caçar...");
        this.alterarEnergia(-20);
        console.log("O leão caçou com sucesso e comeu a presa!");
        this.alterarEnergia(+50);
    }
}

class Passaro extends Animal {
    comer(): void {
        console.log("O pássaro encontrou algumas sementes e começou a comer.");
        this.alterarEnergia(+20); 
    }
}

function alimentarAnimal(animal: Animal): void {
    animal.comer();
    animal.statusEnergia();
}

const leao = new Leao(80);
const passaro = new Passaro(40);

alimentarAnimal(leao);
alimentarAnimal(passaro);
