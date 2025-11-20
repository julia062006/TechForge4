interface ProdutoLoja {
    codigo: number
    nome: string
}

class Loja{
    produtos: ProdutoLoja[]

    constructor(produtos: ProdutoLoja[]){
        this.produtos = produtos
    }

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined{
        return this.produtos.find(produtos => produtos.codigo === codigo)
    }
}

const produtosAdicionados: ProdutoLoja[] = [
    {codigo: 1, nome: "Notebook"},
    {codigo: 2, nome: "Teclado"},
    {codigo: 3, nome: "Mouse"},
    {codigo: 4, nome: "Fone"},   
]

const loja = new Loja(produtosAdicionados)

const produto1 = loja.buscarProdutoPorCodigo(2)
console.log("Produto: ", produto1);