// 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

const question1 = prompt('Você quer seguir para front ou back?')

// 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

let question2 = ''

if(question1 === 'front') {
  question2 = prompt('Quer aprender React ou Vue?')
} else if(question1 === 'back') {
  question2 = prompt('Quer aprender C# ou Java?')
}

// 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

let question3 = prompt('Você quer se especializar ou tornar-se fullstack?')

if(question3 === 'especializar') {
  alert('Especializar')
} else if(question3 === 'fullstack') {
  alert('Fullstack')
}

// 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

let answer = ''
let tecnologies = ''

while(answer !== 'não') {
  answer = prompt('Tem mais alguma tecnologia que você gostaria de aprender?')
  if(answer !== 'não') {
    tecnologies += `${answer}\n`
  }
}

alert(tecnologies)
