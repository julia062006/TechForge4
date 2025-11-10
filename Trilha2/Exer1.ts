//Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number).
//Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.

class ContaBancaria {

    titular: string;

    saldo: number;

    constructor(titular: string, saldo: number = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log("Deposito realizado com sucesso. Novo saldo: " + this.saldo);
        }else {
            console.log("Valor de depósito inválido.");
        }        
    }

    sacar(valor:number) : void {
        if (valor> 0  && valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque realizado com sucesso. Novo saldo: " + this.saldo);
        } else {
            console.log("Saldo insuficiente ou valor inválido para saque.");
        }
    }
}