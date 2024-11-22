// Função opara somar dois números 
function adicionar(a, b){
    return a+b;
}

//Função para calxular o dobro do número 
function calcularDobro(valor){
    return valor*2;
}

//Teste de integração
describe("Teste de Integração", function(){
    it("deve somar dois números e calcular o dobro", function(){
        const resultadoSoma = adicionar(2, 3);
        const resultadoDobro = calcularDobro
        (resultadoSoma)
        //Verifica se o dobro esrá correto 
        expect(resultadoDobro).toBe(10)
    });

    it("Deve calcular o sobro mesmo com números negativos", function(){
        const resultadoSoma= adicionar(-2, -3); 
        const resultadoDobro = calcularDobro (resultadoSoma); 
        expect (resultadoDobro).toBe(-10)
    })
})

//Função para concatenar duas partes de texto
function concatenarTexto(parte1, parte2){
    return parte1 +' ' + parte2; 
}
 //Função para deixar os textos maíusculos 
 function converter(texto){
    return texto.toUpperCase()
 }

 //Teste 
 describe("segundo teste de integração", function(){
    it("Deve juntar dois textos e deixar em maíusculo", function(){
        const texto = concatenarTexto("tudo", "bem")
        const textoMaiusculo = converter(texto)

        expect(textoMaiusculo).toBe("TUDO BEM")
    })

    it("Deve lidar com string vazia", function(){
        const texto = concatenarTexto(" ", "teste")
        const textoMaiusculo = converter(texto)

        expect(textoMaiusculo).toBe("  TESTE")
    })
 })

 ////////////////////////////////////////////////////////////////////////////
 /////////////////// LISTA DE EXERCÍCIOS ///////////////////////////////////

 // EXERCÍCIO 1 
// Função para somar as notas
function somarNotas(nota1, nota2, nota3, nota4) {
    return nota1 + nota2 + nota3 + nota4;
}

// Função para calcular a média e verificar aprovação
function calcularMedia(somaDasNotas, quantidadeDeNotas) {
    const media = somaDasNotas / quantidadeDeNotas;
    return media >= 6 ? "Aprovado" : "Reprovado";
}

// Testes de integração
describe("cálculo de média", function() {

    it("a soma de quatro notas", function() {
        const soma = somarNotas(7, 8, 6, 9);
        expect(soma).toBe(30);
    });

    it("aprovar o aluno quando a média for 7", function() {
        const soma = somarNotas(8, 7, 6, 7);
        const status = calcularMedia(soma, 4);
        expect(status).toBe("Aprovado");
    });

    it("reprovar o aluno quando a média for 5", function() {
        const soma = somarNotas(5, 4, 6, 5);
        const status = calcularMedia(soma, 4);
        expect(status).toBe("Reprovado");
    });

});

//EXECÍCIO 2
// Função opara somar dois números 
function multiplicar(a, b){
    return a*b;
}

//Função para calxular o dobro do número 
function calcularTriplo(valor){
    return valor*3;
}

//Teste de integração
describe("Teste Multiplicar e Triplo", function(){
    it("deve somar dois números e calcular o triplo", function(){
        const resultadoSoma = multiplicar(2, 3);
        const resultadoTriplo = calcularTriplo
        (resultadoSoma)
        //Verifica se o dobro esrá correto 
        expect(resultadoTriplo).toBe(18)
    });

    it("Deve calcular o triplo mesmo com números negativos", function(){
        const resultadoSoma= multiplicar(-2, -3); 
        const resultadoTriplo = calcularTriplo (resultadoSoma); 
        expect (resultadoTriplo).toBe(18)
    })

    it("Deve calcular o triplo mesmo com números negativos/positivos", function(){
        const resultadoSoma= multiplicar(2, -3); 
        const resultadoTriplo = calcularTriplo (resultadoSoma); 
        expect (resultadoTriplo).toBe(-18)
    })
})

// EXERCÍCIO 3
function calcularDesconto(valorTotal) {
    if (valorTotal <= 100) {
        return 0.05;
    } else if (valorTotal>101 && valorTotal<= 500) {
        return 0.10;
    } else {
        return 0.15;
    }
}

// Função para aplicar o desconto ao valor total
function aplicarDesconto(valorTotal, desconto) {
    return valorTotal - (valorTotal * desconto);
}

// Testes de integração
describe("desconto", function() {

    it("desconto de 5% para compras de até R$ 100", function() {
        const desconto = calcularDesconto(100);
        const valorComDesconto = aplicarDesconto(100, desconto);
        expect(valorComDesconto).toBe(95); 
    });

    it("desconto de 10% para compras entre R$ 101 e R$ 500", function() {
        const desconto = calcularDesconto(200);
        const valorComDesconto = aplicarDesconto(200, desconto);
        expect(valorComDesconto).toBe(180);
    });

    it("desconto de 15% para compras acima de R$ 500", function() {
        const desconto = calcularDesconto(600);
        const valorComDesconto = aplicarDesconto(600, desconto);
        expect(valorComDesconto).toBe(510); 
    });

});
