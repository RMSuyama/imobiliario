<template>

<container id="inscreva">
  <h1>Receba Conteúdos Exclusivos</h1>
  <h2>Receba novidades incríveis direto em seu e-mail.</h2>
  
    </container>

    <container>
  <div class="form-floating mb-3" id="floatingInputContainer">
    <input type="nome" class="form-control" style="width: 20rem;" id="floatingInput" placeholder="name name">
    <label for="floatingInput">Nome</label>
  </div>
    <div class="form-floating">
    <input type="email" class="form-control" style="width: 20rem;" id="floatingInput" placeholder="name@example.com">
    <label for="floatingPassword">E-mail</label>
  </div> 
    </container>



   <container>

      <input class="form-check-input" type="checkbox" value="" id="checkNovidades">
    <label class="form-check-label" for="checkNovidades">
      Aceito receber e-mails com novidades!
    </label>
  <div id="concordo"> Ao informar meus dados, eu concordo com a Política de Privacidade e com os Termos de Uso.</div>
  <div class="form-check">

    <button type="button" class="btn btn-dark">Quero me inscrever!</button>


  </div>
</container>


    </template>
    
      <style scoped>
    
      
      #foot{
     
            padding-top: 5%;
            justify-content: space-between;
            flex-wrap: nowrap;
      }
    
      #recursos{
            display: flex;
            flex-direction:column; 
            padding-bottom: 5%;
                   
    
      }
            p2{
            text-align: left;
         
            }
    
            h5{
            text-align-last: left;
         
    
            }
    
            #sMLogo{
            text-align: left;
    
    
            }
    
    
      </style>
      
      <script>
    
      export default {
        data() {
          return {
            mensagem: 'Olá, mundo!'
          }
        }
      }
      </script>