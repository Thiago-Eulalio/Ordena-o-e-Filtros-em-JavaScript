let numbers = [] // array vazio para receber os valores do gets()

 // definindo a estrutura de repetição
for (let i = 0; i <= 105; i ++){
  // recebendo os valores dos gets()
  numbers[i] = gets()
}  

// verificando os numeros pares
const par = total.filter((value) => {if(value % 2 === 0){return value++}})

// verificando os numeros impares
const impar = total.filter((value) => {if(value % 2 != 0){return value++}})

// retirando o primeiro item do array
par.splice(0,1)

// ordenando os numeros em ordem crescente
par.sort((a,b) => a - b).forEach(par => console.log(par))

// ordenando os numeros impares em horário descrescente
impar.sort((a,b) => b - a).forEach(impar => console.log(impar))
