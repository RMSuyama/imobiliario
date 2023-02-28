
<template>
<nav class="navbar navbar-expand-lg .bg-body-secondary fixed-top" id="navbar">
  <div class="container-fluid">
    <a class="navbar-brand" href=""><img id="logo" src="./assets/hc.png" alt="Example Image" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.instagram.com/suyama.adv/">Fotos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.linkedin.com/in/rafael-moreira-suyama-0043bb189/">Spotify</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://wa.me/5513996267989">Shows</a>
        </li>
      </ul>
      <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Entre em contato comigo!
          </a>
          
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="https://www.instagram.com/riqcarneiro/"><img id="ico2" src="./assets/instagram.svg" alt="Insta" /> Instagram</a></li>
            <li><a class="dropdown-item" href="https://www.linkedin.com/in/rafael-moreira-suyama-0043bb189/"><img id="ico2" src="./assets/linkedin.svg" alt="Linkedin" /> LinkedIn</a></li>
            <li><a class="dropdown-item" href="https://wa.me/5513996267989"><img id="ico2" src="./assets/whatsapp.svg" alt="Whats" />Whatsapp</a></li>

            
          </ul>
        </div>
    </div>
  </div>
</nav>
    <div id="sobremim">

      <div class="card-body" id="left">
        <p> Conheça Henrique Carneiro, um cantor e violonista talentoso que faz a alma do choro e do samba vibrar. Formado no Conservatório de Música, Henrique é um músico experiente e possui um vasto repertório que varia de clássicos a novas composições.</p>

        <p>Com sua habilidade no violão, ele cria melodias que enchem a plateia de emoção e vida, envolvendo a todos em uma atmosfera única e envolvente. Seu estilo único de interpretar o choro e o samba, com a essência da música brasileira, cativa a todos que o ouvem.</p>

        <p>Não perca a oportunidade de ver Henrique Carneiro ao vivo em seu próximo show. Acompanhado de outros músicos talentosos, Henrique promete uma noite inesquecível com muito ritmo, harmonia e emoção. Venha sentir a música brasileira de uma forma única e autêntica, com Henrique Carneiro. Garanta já seu ingresso e venha celebrar conosco!</p>       </div>
    </div>

    <div id="carousel" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./assets/violão1.png" class="d-block w-100" alt="1..">
    </div>
    <div class="carousel-item">
      <img src="./assets/violão2.png" class="d-block w-100" alt="2..">
    </div>
    <div class="carousel-item">
      <img src="./assets/violão3.png" class="d-block w-100" alt="3..">
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

<footer class="navbar navbar-expand-lg .bg-body-secondary fixed-bot" id="navbar">teste</footer>
</template>

<style scoped>

#navbar {
  z-index: 9999;
}

#sobremim {
  padding-top: 10vh; /* ajuste o valor conforme necessário */
  padding-left: -30vw;
}

#logo{
  width:5vw;
  height:4.5vw;
}

#left{
  text-indent: 20px;
  text-align: justify;
  padding: 5px;
  margin: 2vw;
}

#ico2{
  width:1.5vw;
  height:1.5vw;
  margin-right: 1vw;
}

#carousel{
  padding-top:15vh;
}
</style>
