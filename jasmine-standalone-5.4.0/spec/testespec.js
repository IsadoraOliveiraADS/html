// TESTESPEC.JS RESULTADO DO TESTE

// it("Lista de Teste", function(){
//     expect(inteiro(1)).toBe(1);
//     expect(inteiro(2)).toBe(2);
//     expect(inteiro(3)).toBe(3);
//     expect(inteiro(4)).toBe(4)
// })

// describe("Teste de números", function(){
//     it("Fizz Buzz", function(){
//         expect(jogo(1)).toBe(1);
//         expect(jogo(2)).toBe(2);
//         expect(jogo(3)).toBe("Fizz");
//         expect(jogo(4)).toBe(4);
//         expect(jogo(5)).toBe("Buzz");
//         expect(jogo(6)).toBe("Fizz");
//         expect(jogo(7)).toBe(7);
//         expect(jogo(8)).toBe(8);
//         expect(jogo(9)).toBe("Fizz");
//         expect(jogo(10)).toBe("Buzz");
//     })
    
// })

// describe("Teste de Média", function(){
//     it("Resultado", function(){
//         let res = aluno();
//         expcet(res).toEqual("Reprovado")
//     })
// })

// describe("Pessoas", function(){
//     let nome = "Isadora";
//     let sobrenome ="Oliveira"; 
//     let idade = 18; 

//     let pessoa = new Pessoa(nome, sobrenome, idade);

//    it('Teste - Nome', function(){
//     expect("Isadora").toBe(pessoa.nome())
//    }) 

//    it('Teste - Nome e Sobrenome', function(){
//     expect("Isadora Oliveira").toBe(pessoa.nome_completo())
//    }) 

//    it('Teste - Nome, Sobrenome e Idade', function(){
//     expect("Isadora Oliveira tem idade de 18").toBe(pessoa.nome_tudo())
//    }) 
// })

/////////////////////////////////////////////////////////////////////////
//Exercícios ISADORA OLIVEIRA 

//Exercicio 1 
// describe ("Teste Multiplicar", function(){
//     it("Produto", function(){
//         expect(multiplicar (2, 3, 4)).toBe(24);
//         expect(multiplicar (1, 5, 2)).toBe(10);
//         expect(multiplicar (1, 0, 3)).toBe(0);
//     })
// })

// Exercício 2
// describe("Teste Dividir", function(){
//     it("Divisor", function(){
//         expect(dividir (10, 2)).toBe(5); 
//         expect(dividir (7, 0)).toBe("Não é possível dividir por 0")
//     })
// })

//Exercício 3
// describe("Teste Graus", function() {
//     it("Conversão de Celsius para Fahrenheit", function() {
//         expect(celsiusFahrenheint(0)).toEqual(32);
//     });

//     it("Conversão de Fahrenheit para Celsius", function() {
//         expect(fahrenheintCelsius(32)).toEqual(0);
//     });
// });

//Exercício 4 
// describe("Teste Media", function(){
//     it("Calcular Média", function(){
//     expect(calcularMedia (3, 4, 5)).toBe(4);
//     expect(calcularMedia(10, 20, 30)).toBe(20)
//     })
// })

//Exercício 5
// describe("Teste String", function(){
//     it("String", function(){
//         expect(contarCaracteres("hello")).toBe(5);
//         expect(contarCaracteres("12345")).toBe(5)
//     })
// })

// //Exercício 6
// describe("Teste da Função Calculadora", function() {
//     it("Soma", function() {
//         expect(calculadora(4, 2, "+")).toBe(6);
//         expect(calculadora(10, 5, "+")).toBe(15);
//     });

//     it("subtrai", function() {
//         expect(calculadora(4, 2, "-")).toBe(2);
//         expect(calculadora(10, 5, "-")).toBe(5);
//     });

//     it("Multiplica", function() {
//         expect(calculadora(4, 2, "*")).toBe(8);
//         expect(calculadora(10, 5, "*")).toBe(50);
//     });

//     it("Divide", function() {
//         expect(calculadora(4, 2, "/")).toBe(2);
//         expect(calculadora(10, 5, "/")).toBe(2);
//     });

//     it("Dividir por zero", function() {
//         expect(calculadora(4, 0, "/")).toBe("Erro: Divisão por zero");
//     });

//     it("Sem operador", function() {
//         expect(calculadora(4, 2, "%")).toBe("Operador inválido");
//     });
// });