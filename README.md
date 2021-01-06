# Dino Game 

Neste repositório fiz algumas alterações seguindo o tutorial da, **_DIO_**: **Recriando o famoso jogo do dinossauro sem internet**

## Incrementos

- Pontuação do usuário

  - Ao longo do jogo no canto superior direito aparece o score do usuário

    - ```js 
      //chamada da função passando se está em *Game Over* ou esta em *gamming*
      setScore(isOver)
      //iniciando o intervalo com o valor 0
         var interval = 0
         //função que renderiza o score
         function setScore() {
      ​    interval = setInterval(function () {
          //esse if verifica se está em gaming
      ​     if (!isOver) {
      ​      var elapsedTime = **Date**.now() - startTime;
          
      ​      count = (Math.round(elapsedTime / 100))
      ​   	//printando o score na tela em tempo de execução do game
      		document.querySelector(".score").innerHTML = 'Score: ' + count;
      ​     } else {
          	// etsado de Game Over
          	//para de somar o score
      ​      clearInterval(interval)
          	//printa o score final
      ​      document.querySelector(".score").innerHTML = 'Score: ' + count;
      ​     }
      ​    }, 100);
         }
      ```

  - Ao perder aparece o seu score

- O usuário pode apertar a tecla **_space_**  para acontecer o pulo do dinossauro tanto como **_clicar na setinha para cima_** 

  - ```js 
      function handleKeyUp(event) {
          if (event.keyCode === 32) {
              console.log('Your press space')
              !isJumping ? jump() : ''//verificação se não esta pulando para efetuar um novo pulo
          }
          if (event.keyCode === 38) {
              console.log('Your press up ')
              !isJumping ? jump() : ''//verificação se não esta pulando para efetuar um novo pulo
          }
      }
      ```
- Tela de **Game Over** com **_retry again_**:

  - Ao perder o usuário pode voltar clicando na **_seta para cima_** , no **_space_** ou no **botão** ao meio da tela.