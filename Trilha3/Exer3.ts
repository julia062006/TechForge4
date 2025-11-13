//Crie uma classe Pagamento com um método processar(). 
//Crie subclasses PagamentoCartao e PagamentoBoleto, 
//cada uma com sua própria implementação do método processar(). 
//A classe PagamentoCartao deve validar o número do cartão e processar 
//o pagamento, e PagamentoBoleto deve gerar um código de boleto. 
//Crie uma função que aceite diferentes tipos de pagamento e processe-os usando polimorfismo.

abstract class Pagamento {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    abstract processar(): void;
}

class PagamentoCartao extends Pagamento {
    numeroCartao: string;

    constructor(valor: number, numeroCartao: string) {
        super(valor);
        this.numeroCartao = numeroCartao;
    }

    private validarNumeroCartao(): boolean {
        return /^\d{16}$/.test(this.numeroCartao);
    }

    processar(): void {
        if (this.validarNumeroCartao()) {
            console.log(`Pagamento de R$${this.valor.toFixed(2)} processado com cartão ${this.numeroCartao}.`);
        } else {
            console.log("Número de cartão inválido. Pagamento não processado.");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    processar(): void {
        const codigoBoleto = Math.floor(Math.random() * 1000000000000000).toString().padStart(13, "0");
        console.log(`Pagamento de R$${this.valor.toFixed(2)} via boleto gerado. Código: ${codigoBoleto}`);
    }
}

function processarPagamento(pagamento: Pagamento): void {
    pagamento.processar();
}

const pagamento1 = new PagamentoCartao(150.0, "1234567812345678");
const pagamento2 = new PagamentoBoleto(200.0);

processarPagamento(pagamento1);
processarPagamento(pagamento2);

