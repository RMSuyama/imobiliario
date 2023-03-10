
<template>
<div>
<header>

  <nav id="navbar" class="navbar navbar-expand-lg" >
  <div class="container-fluid">
    <a class="navbar-brand" href=""><img id="logo" src="./assets/logo.png" alt="Example Image" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.instagram.com/suyama.adv/">História</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.linkedin.com/in/rafael-moreira-suyama-0043bb189/">Serviços</a>
        </li>
        <li class="nav-item">
          
          <router-link to="/about" class="nav-link">Artigos</router-link>
        </li> 
      </ul>
      <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Me siga nas redes sociais!
          </a>
          
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="https://www.instagram.com/suyama.adv/"><img id="ico2" src="./assets/instagram.svg" alt="Insta" /> Instagram</a></li>
            <li><a class="dropdown-item" href="https://www.linkedin.com/in/rafael-moreira-suyama-0043bb189/"><img id="ico2" src="./assets/linkedin.svg" alt="Linkedin" /> LinkedIn</a></li>
            <li><a class="dropdown-item" href="https://wa.me/5513996267989"><img id="ico2" src="./assets//twitter.svg" alt="Whats" />Twitter</a></li>
            <li><a class="dropdown-item" href="https://wa.me/5513996267989"><img id="ico2" src="./assets/facebook.svg" alt="Whats" />Facebook</a></li>
         
          </ul>
        </div>
    </div>
  </div>
</nav>
</header>


<div id="floatingWhatsApp">


      <div><a class="dropdown-item" href="https://wa.me/5513996267989"><img id="whats" src="./assets/whatsapp.svg" alt="Whats" /></a></div>

</div>

<div id="t1">Advocacia Imobiliária</div>

<div id="t2"> Regularização Imobiliária e Consultoria Jurídica</div>



<div class="embed-responsive embed-responsive-16by9" id="videozinho">
<video width="800px" poster="./assets/logo.png" autoplay loop muted >
  <source src="./assets/teclado-de-computador-3188.mp4" type="video/mp4">
  Seu navegador não suporta a reprodução de vídeo.
</video>
</div>

  <div class="container text-center" id="body">
    <div class="row">
      <div class="col-12">

          <div id="sobremim">

          <div class="card-body" id="left">


          <p> Se você está precisando de um advogado imobiliário, você veio ao lugar certo! Com uma formação jurídica sólida e uma vasta experiência na área de regularização imobiliária, eu posso oferecer a você uma gama completa de serviços jurídicos de alta qualidade.</p>

          <p>Como ex-corretor de imóveis e técnico em transações imobiliárias, eu compreendo as necessidades e objetivos dos meus clientes e estou comprometido em oferecer soluções personalizadas para cada caso. Com minha expertise em questões como a obtenção de documentos e registros necessários para regularizar imóveis, resolução de problemas de titulação de imóveis, verificação de registros de propriedade e assessoria jurídica em processos de usucapião, você pode ter certeza de que seus problemas serão resolvidos de forma eficiente e profissional.</p>

          <p>Além disso, eu também ofereço serviços de consultoria em transações imobiliárias, como compra, venda e locação de imóveis. Eu trabalho de perto com meus clientes para entender suas necessidades e objetivos e garantir que seus interesses sejam protegidos em todas as negociações imobiliárias.</p>  

          <p>Meu compromisso com a excelência e a atenção aos detalhes garante que você receberá os melhores resultados possíveis. Então, se você quer contar com um advogado experiente e dedicado para ajudá-lo a resolver questões imobiliárias, entre em contato comigo hoje mesmo! Estou ansioso para ajudá-lo a alcançar seus objetivos imobiliários e fornecer a você a tranquilidade que você merece.</p>      
        
        </div>
        </div>
        </div>

       <div class="col" id="carouselDiv"  >
              <div id="carousel" class="carousel slide">
          <div class="carousel-inner">
           
            <div class="carousel-item active">
              <a href="https://www.instagram.com/suyama.adv/"><img src="./assets/como-funciona-a-regularizacao-imobiliaria.jpg"  class="d-block w-100" alt="1.."></a>
            </div>
            <div class="carousel-item">
              <img src="./assets/regularizacao-de-imoveis.jpeg" class="d-block w-100" alt="2..">
            </div>
            <div class="carousel-item">
              <img src="./assets/download.jfif" class="d-block w-100" alt="3..">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>

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

    <container class="row">
      <div class="col-12">
        <footer class="navbar navbar-expand-lg .bg-body-secondary" id="foot">

                  <div id="recursos">

                  <h3>Endereço:</h3>
                   <p2><a href="https://www.google.com/maps/@-24.4945346,-47.8467756,21z">Rua Celso Xavier, 590 – Centro – Registro/SP</a></p2> 
                   <p2><a href="http://www.google.com">Endereço Eletrônico</a></p2>
                   <p2><a href="http://www.google.com">Telefone de contato: (13) 3822-1879</a></p2>
                  </div>
                  <div id="recursos">

                  <h3>Sobre o Escritório:</h3>

                  <p2><a href="http://www.google.com">Nossa história</a></p2> 
                  <p2><a href="http://www.google.com">Nossa equipe</a></p2>
                  <p2><a href="http://www.google.com">Política de Privacidade</a></p2>
                  <p2><a href="http://www.google.com">FAQs</a></p2>
                  </div>

                  <div id="linksSocial">
                  <h3>Siga-nos nas redes sociais:</h3>
                  
                  <div id="sMLogo"><a class="dropdown-item" href="https://www.instagram.com/riqcarneiro/"><img id="ico2" src="./assets/instagram.svg" alt="Insta" /> Instagram</a></div>
                  <div id="sMLogo"><a class="dropdown-item" href="https://www.linkedin.com/in/rafael-moreira-suyama-0043bb189/"><img id="ico2" src="./assets/linkedin.svg" alt="Linkedin" /> LinkedIn</a></div>
                  <div id="sMLogo"><a class="dropdown-item" href="https://wa.me/5513996267989"><img id="ico2" src="./assets/twitter.svg" alt="Whats" />Twitter</a></div>
                  <div id="sMLogo"><a class="dropdown-item" href="https://wa.me/5513996267989"><img id="ico2" src="./assets/facebook.svg" alt="Whats" />Facebook</a></div>

                  </div>
  </footer>
      </div>
    </container>
  </div>
</div>



</template>

<style scoped>

#body{
  position: relative;
  z-index: 1;
}
#whats{
  height: 75px;

}

#inscreva{
  padding:20px;
}

#t1{
  position: relative;
  z-index: 1;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  text-transform: uppercase;
}

#t2{
  position: relative;
  z-index: 1;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: 2500;
  color: #333;
  text-align: center;
  padding-bottom: 40px;
}

#videozinho{
text-align: center;
opacity: 0.2; /* exemplo de valor, ajuste conforme desejar */
position: relative;
z-index: -1;

}

#sMLogo{
text-align: left;
padding:5px

}

#floatingWhatsApp {
  display: flex;
  flex-direction: row;
  padding:40px;
  position: fixed;
  bottom: 0;
  right: 0;
}

p2{
  text-align: left;
  padding:10px;

}

h1 {
  font-size:xx-large;
  text-align: center;
  padding-top: 3vw;
  }

h2 {
   padding-bottom: 3vw;
  font-size:large;
  text-align: center;
}


h3 {

  text-align: left;
  padding: 10px;

}

#linksSocial{
  width:40vw;
  height: 30vh;
  margin-bottom: 5vw;}



#recursos{
  width:40vw;
  height: 30vh;
  margin-bottom: 5vw;
  display:flex;
  flex-direction: column;

}

#navbar {
  z-index: 9999;
}

#foot {

  display: flex;
  padding-top: 7vw;
  justify-content: center;
  flex-wrap: nowrap;

}

#sobremim {
  padding-left: -30vw;
}

#logo{
  width:5vw;
}

#logo2{
 
  padding-left: 1.3vw;
  padding-bottom: 5px;
  width:7vw;
  height:5.5vw;
  display:flex;
  align-items: center;
  justify-content: center;
}



#left{
  text-indent: 20px;
  text-align: justify;
  padding: 5px;
  margin: 2vw;
}

#ico2{
  width:2vw;
  height:2vw;
  margin-right: 1vw;
}

#carousel{
  width:500px;
  height:300px;
  align-items: center;
  justify-items: center;
  justify-content: center;
  display: flex;

  }
  #carouselDiv{

  align-items: center;
  justify-items: center;
  justify-content: center;
  display: flex;
  } 

#navbar{
  background-color:white;
}

</style>
