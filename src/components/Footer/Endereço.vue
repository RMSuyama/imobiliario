<template>
  <container class="row" id="containerend" style="display: flex; justify-content: center;">
    <div class="col-12">
        <div class="card" style="width: 100%; height: 700px;">

          
          <div class="card-body" id="endereco">
            <div id="recursos">
              <h5>Endereço:</h5>
              <p><a href="https://www.google.com/maps/@-24.4945346,-47.8467756,21z"
                  >Rua Celso Xavier, 590 – Centro – Registro/SP</a
                ></p>
              <p><a href="http://www.google.com">Endereço Eletrônico</a></p>
              <p><a href="http://www.google.com">Telefone de contato: (13) 3822-1879</a></p>


            </div>
          </div>
        </div>

    </div>        
  </container>  
</template>

<style scoped>
 
 h5{
  text-align: left;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 250%;
 }

 a{
  text-align: center;
  font-family:Arial, Helvetica, sans-serif;
  font-size: 250%;
  color:azure;
  padding: 20%;
}

  #endereco {
    padding-top: 5%;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    background-image: url('../../assets/pexels-photo-450066.jpeg');
    background-size:contain;
    background-position: center;
  
  }

  #recursos {
    display: flex;
    flex-direction: column;
    padding-bottom: 5%;
  }

  .card-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    margin: 0;
    font-size: 16px;
    line-height: 24px;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  a:hover {
    color: #666;
  }
</style>