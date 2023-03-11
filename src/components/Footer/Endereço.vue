<template>
  <container class="row" id="containerend" style="display: flex; justify-content: center;">
    <div class="col-12">
        <div class="card" style="width: 100%; height: 700px;">

          
          <div class="card-body" id="endereco">
            <div id="recursos">

              <h5>Endereço:</h5>
              
              <a href="https://www.google.com/maps/@-24.4945346,-47.8467756,21z"
                  ><div>Rua Celso Xavier, 590 – Centro – Registro/SP</div></a
                >

              <a href="http://www.google.com">Endereço Eletrônico</a>

              <a href="http://www.google.com">Telefone de contato: (13) 3822-1879</a>


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
  font-size: 3rem;
  color: white;



 }

 a{
  text-align: center;
  font-family:Arial, Helvetica, sans-serif;
  font-size: 2rem;
  color:azure;
  background-color: black;
  
   
}

  #endereco {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    background-image: url('../../assets/pexels-sergio-souza-5047858.jpg');
    background-size:cover;
    background-position: center;

  
  }

  #recursos {
    display: flex;
    flex-direction: column;
    background-color: black;
    margin-top: 30%;
    padding:2rem;
    -webkit-box-shadow: 11px 13px 24px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 11px 13px 24px 0px rgba(0,0,0,0.75);
box-shadow: 11px 13px 24px 0px rgba(0,0,0,0.75);


  }

  .card-title {
    font-size: 20px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: white;
  }
</style>