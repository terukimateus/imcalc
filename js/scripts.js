const peso = document.querySelector('#peso') // constante para pegar o valor do PESO
const altura = document.querySelector('#altura')   // constante para pegar o valor da altura
const resultado = document.querySelector('#resultado')
const nome = document.querySelector('#nome') // constante para pegar o valor do nome


const calcular = () => {


    if (altura.value !== '' && peso.value !== '') { // se a altura for diferente de nulo e o peso diferente de  nulo =


    const imc = (peso.value / (altura.value * altura.value)).toFixed(2) // a constate imc recebe peso dividido pela altura ao quadrado // toFixed é para limitar os fracionais
    let classification = ''

    if (imc<=18) { // se o IMC for menor que 18
        classification = 'abaixo do peso'

    } else if (imc>=18 && imc<=25) { // se o IMC for entre 18 e 25
        classification = 'no peso normal'
    } else if (imc>=25 && imc<=30) { // se o IMC for entre 25 e 30
        classification = 'com sobrepeso'
    } else if(imc>=30 && imc<=35) { // se o IMC estiver entre 30 e 35
        classification = 'com obesidade Classe 1'
    } else if(imc>=35 && imc<=40) { // se o IMC estiver entre 35 e 40
        classification = 'com obesidade Classe 2'
    } else {
        classification = 'com obesidade Classe 3'
    }

    resultado.innerHTML= nome.value + `, seu IMC é: ${imc}, você está ${classification}!`  // Mensagem que ira passar ao clicar em calcular
    }
}
