const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const resultado = document.querySelector('#resultado')
const nome = document.querySelector('#nome')


const calcular = () => {


    if (altura.value !== '' && peso.value !== '') {


    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
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

    resultado.innerHTML= nome.value + `, seu IMC é: ${imc}, você está ${classification}!` 
    }
}