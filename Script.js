var numerosecreto = parseInt(Math.random() * 11);

// 'While', Enquanto o chte for diferente do número secreto
while(chute != numerosecreto){
  var chute = prompt('Digite um número entre 0 e 10')
  //Se o chute chute for igual ao número secreto
  if (chute == numerosecreto) {
    alert('Acertou!')
  } else if (chute > numerosecreto) {
    alert('Errou... o número secreto é menor!')
  } else if (chute < numerosecreto) {
    alert('Errou... o número secreto é maior!')
  }
