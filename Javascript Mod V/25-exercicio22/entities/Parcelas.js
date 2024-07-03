//Parcelas: Deve possuir atributos para: o valor da parcela, o número dela e sua situação (paga ou pendente)

module.exports = class Parcelas {
    constructor(valorEmprestimo,quantidadeParcelas,numeroDaParcela,situacao){
        this.valorEmprestimo = valorEmprestimo
        this.quantidadeParcelas = quantidadeParcelas
        this.numeroDaParcela = numeroDaParcela
        this.situacao = situacao
        this.valorParcela = this.calcularParcela(valorEmprestimo, quantidadeParcelas);
        
        }
        calcularParcela(valorEmprestimo,quantidadeParcelas) {
            const valorParcela = this.valorEmprestimo / this.quantidadeParcelas;
            return valorParcela
        }

}

  