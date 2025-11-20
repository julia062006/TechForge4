interface Documentos{
    titulo: string
    conteudo: string
}

class Texto implements Documentos{
    titulo: string
    conteudo: string

    constructor(titulo: string, conteudo: string){
        this.titulo = titulo
        this.conteudo = conteudo
    }

    exibir (): string{
        return "Título: " + this.titulo + ". Conteúdo: " + this.conteudo + "."
    }
}

const documento1 = new Texto("Bem-vindo", "Este é um documento de exemplo.")
console.log(documento1);