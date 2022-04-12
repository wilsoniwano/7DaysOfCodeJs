const randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let counter = 1
const attempts = 3

alert('👉 Vou sortear um número entre 1 e 10 e você terá 3 chances para adivinhá-lo, ok? \n\nPreparado? Clique em OK para começar.')

while(counter <= attempts) {
  const answer = prompt('Qual o seu chute? 🤔');
  
  if(answer == randomNumber) {
    alert(`🎉🎉🎉 PARABÉNS! Você acertou! 🎉🎉🎉 \n\nA resposta era ${randomNumber}.`);
    counter = attempts;
  } else if(answer != randomNumber && counter < attempts) {
    alert(`Ihh, errou! 😅 Você tem mais ${attempts - counter} tentativas.`);
  } else {
    alert(`Você errou e suas tentativas acabaram! 😢 \nA resposta era ${randomNumber}`);
  }
  counter++;
}
