interface Produto{
    id: number
    nome: string
    preco: number
}

class ItemLoja implements Produto{
    
    id: number
    nome: string
    preco: number

    constructor(id: number, nome: string, preco: number){
        this.id = id
        this.nome = nome
        this. preco = preco
    }
}

const item1 = new ItemLoja(1, "Mesa", 5000)
console.log(item1);