
<template>
<div>
<header>
  <navbarComp></navbarComp>
</header>


<div id="floatingWhatsApp">



</div>
<div>
<div id="t">Regularização Imobiliária</div>

<div id="t1">Rafael Moreira Suyama</div>

<div id="t1">Advocacia Imobiliária</div>

<div id="t2">Regularização Imobiliária e Consultoria Jurídica</div>

  <!-- 
  <video id="videozinho" width="100%" poster="./assets/logo.png" autoplay loop muted >
    <source src="./assets/teclado-de-computador-3188.mp4" type="video/mp4">
    Seu navegador não suporta a reprodução de vídeo.
  </video> -->


<video id="background-video" autoplay loop muted>
  <source src="./assets/tarde-29980.mp4" type="video/mp4">
  
  Seu navegador não suporta a reprodução de vídeo.
</video>


</div>



 

    <!-- <carrosselComp></carrosselComp> -->

    <endereçoComp></endereçoComp>
    <sobreComp></sobreComp>
    <redeSocialComp></redeSocialComp>

</div>



</template>

<style scoped>


#background-video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}

#whats{
  height: 75px;

}

#inscreva{
  padding:20px;
}

#t{
    padding-top: 20%;
    color:aliceblue;
    position: relative;
    z-index: 1;
    font-family: 'Roboto', sans-serif;
    font-size: 6rem;
    text-align: center;
    /* text-transform: uppercase; */
  }

  #t1{
    padding-top: 40%;
    color:aliceblue;
    position: relative;
    z-index: 1;
    font-family: 'Roboto', sans-serif;
    font-size: 6rem;
    text-align: center;
    /* text-transform: uppercase; */
  }

  #t2 {
    position: relative;
    z-index: 1;
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    font-weight: 2500;
    color:aliceblue;
    text-align: center;
    padding-bottom: 50%;
  }

  #videozinho {
    text-align: center;
    opacity: 0.2; /* exemplo de valor, ajuste conforme desejar */
    position: relative;
    z-index: -1;
  }


#floatingWhatsApp {
  display: flex;
  flex-direction: row;
  padding: 40px;
  position: fixed;
  bottom: 0;
  right: 0;
  height: auto;
  z-index: 9999; /* set a high z-index value */
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
  padding-top: 20%;
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

<script>
import navbarComp from '@/components/Header/Navbar.vue'
import endereçoComp from '@/components/Footer/Endereço.vue'
import redeSocialComp from '@/components/Footer/RedesSociais.vue'
import sobreComp from '@/components/Footer/Sobre.vue'
import carrosselComp from '@/components/Carroussel.vue'


export default {
  components: {
    navbarComp,
    endereçoComp,
    redeSocialComp,
    sobreComp,
    carrosselComp,

  }
}
</script>