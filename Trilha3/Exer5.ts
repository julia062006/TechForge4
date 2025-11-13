//Crie uma classe abstrata Funcionario com atributos encapsulados nome, salario e um método abstrato calcularBonus(). 
//Crie subclasses Gerente e Operario. O Gerente tem um bônus de 10% sobre o salário, e o Operario tem um bônus de 5%. 
//Crie uma função calcularSalarioComBonus() que aceite um array de funcionários e calcule o salário final, 
//aplicando o bônus específico de cada um, usando polimorfismo.

abstract class Funcionario {
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    getNome(): string {
        return this.nome;
    }

    getSalario(): number {
        return this.salario;
    }

    protected setSalario(novoSalario: number): void {
        this.salario = novoSalario;
    }

    abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.10;
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        const bonus = funcionario.calcularBonus();
        const salarioFinal = funcionario.getSalario() + bonus;
        console.log(`${funcionario.getNome()} - Salário base: R$${funcionario.getSalario().toFixed(2)} | Bônus: R$${bonus.toFixed(2)} | Salário final: R$${salarioFinal.toFixed(2)}`);
    });
}

const gerente = new Gerente("Carlos", 8000);
const operario1 = new Operario("João", 3000);
const operario2 = new Operario("Ana", 3500);

const funcionarios: Funcionario[] = [gerente, operario1, operario2];

calcularSalarioComBonus(funcionarios);
