/*
                    Variaveis em JavaScript
Vamos ver na prática o que aprendemos no arquivo "variaveis.md". 
 */
console.log("\n🎨---- Variáveis em JavaScript ----📌")

//     Declarando variaveis com var
console.log("\n🌟-- Declarando variaveis com var --🌟\n ")
// Ao declaramos uma varivael com var e não atribuirmos um valor a ela, então, seu valor será sempre undefined

var variavelVar
console.log(variavelVar)

// Podemos reatribuir seu valor a qualquer momento dentro do código
console.log("\n-> Reatribuindo valor a var \n")
variavelVar = "Primerio valor de var\n"
console.log(variavelVar)
variavelVar = "Segundo valor de var\n"
console.log(variavelVar)

// Podemos também usar as variaveis var antes de serem declarandas
console.log("\n-> Usando variaveis var antes de serem declaradas \n ")
console.log("Antes de declaranda: ",numVar)
var numVar = 123
console.log("Declarada e iniciada: ",numVar)

//______________________________________________________________________________________

//      Declarando variáveis com let
console.log("\n💥-- Declarando variáveis com let --💥\n")
// Assim como variáveis var, as let também recebem por padrão o valor undefined quando não iniciadas

let variavelLet
console.log(variavelLet)

// També podemos reatribuir seu valor a qualquer momento dentro do código
console.log("\n-> Reatribundo valor a let \n")
variavelLet = "Primerio valor de let\n"
console.log(variavelLet)
variavelLet = "Segundo valor de let\n"
console.log(variavelLet)

// Declarando variáveis let dentro de block de código

if (true) {
    let numeroLet = 1024
    console.log(`O valor da variável let que está dentro do bloco if é ${numeroLet}\n`)
}
console.log("📢 Ao tentarmos acessar a variável numeroLet de fora do if temos o seguinte erro (retire o comentario da linha 53)\n")

// OBS: Retire o comentario da linha 53 para visualizar o erro

//console.log(numeroLet)

// Podemos redeclarar uma variável com o mesmo nome em blocos de código diferente

let numeroLet = 3060
console.log(`O valor da variável let que está fora do bloco if é ${numeroLet}\n`)

//      Declarando variáveis com const
console.log("\n🚀-- Declarando variáveis com const --🚀\n")
// As const devem ser iniciadas mediante a sua declaração

const variavelConst = "\nIniciando a varíavel const\n"
console.log(variavelConst)

// Não podemos reatribuir valores a uma Const
// OBS: retire o comentario da linha 71 para visualizar o erro
console.log("📢 Ao tertarmos reatribuir valor a uma const teremos o seguinte erro (retire o comentario da linha 71)\n")

//variavelConst = "Mudando valor da varíavel const"


// As const podem ser acessadas de qualquer parte do código

if(true){
    console.log("-- Dentro do bloco if --\n", variavelConst)
}