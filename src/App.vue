
<template>
<div>
<header>
  <navbarComp></navbarComp>
</header>



<div>

<div id="t">Regularização Imobiliária</div>

<div id="t1">Advocacia Imobiliária</div>

<div id="t2">Regularização Imobiliária e Consultoria Jurídica</div>

  
  <!-- <video id="videozinho" width="100%" poster="./assets/logo.png" autoplay loop muted >
    <source src="./assets/teclado-de-computador-3188.mp4" type="video/mp4">
    Seu navegador não suporta a reprodução de vídeo.
  </video> -->


<video  id="background-video" autoplay loop muted>
  <source src="./assets/tarde-29980.mp4" type="video/mp4">
  
  Seu navegador não suporta a reprodução de vídeo.
</video>


</div>



 

    <!-- <carrosselComp></carrosselComp> -->
    <sobreComp></sobreComp>
    <endereçoComp></endereçoComp>

    <redeSocialComp></redeSocialComp>

</div>





</template>

<style scoped>

@keyframes  myAnimation {
        from {left: 0%;}
        to {left: 10%;}
    }
    /* Hien thi cho Firefox */
    @-moz-keyframes myAnimation {
        from {left: 0%;}
        to {left: 10%;}
    }
    /* Hien thi cho Safari and Chrome */
    @-webkit-keyframes myAnimation {
        from {left: 0%;}
        to {left: 10%;}
    }
    /* Hien thi cho Opera */
    @-o-keyframes myAnimation {
        from {left: 0%;}
        to {left: 10%;}
    }


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
    background-color: black;
    margin-top: 15%;
    padding-left: 15%;
    margin-right: 15%;
    color:aliceblue;
    z-index: 1;
    font-family: 'Roboto', sans-serif;
    font-size: 5rem;
    text-align:center;
    /* text-transform: uppercase; */

    animation: myAnimation2 2s ease 0.5s 1 normal forwards;
  -moz-animation: myAnimation2 2s ease 0.5s 1 normal forwards;
  -webkit-animation: myAnimation2 2s ease 0.5s 1 normal forwards;
  -o-animation: myAnimation2 2s ease 0.5s 1 normal forwards;
  animation-fill-mode: forwards;
  }

  #t1{

    background-color: black;
    margin-top: 40%;
    
    color:aliceblue;
    position: relative;
    z-index: 1;
    font-family: 'Roboto', sans-serif;
    font-size: 5rem;
    text-align: center;
    /* text-transform: uppercase; */
   

  animation: myAnimation2 2s ease 0.5s 1 normal forwards;
  -moz-animation: myAnimation2 2s ease 0.5s 1 normal forwards;
  -webkit-animation: myAnimation2 2s ease 0.5s 1 normal forwards;
  -o-animation: myAnimation2 2s ease 0.5s 1 normal forwards;
  animation-fill-mode: forwards;
  }

  
@keyframes  myAnimation2 {
        from {right: 0%;}
        to {right: 10%;}
    }
    /* Hien thi cho Firefox */
    @-moz-keyframes myAnimation2 {
        from {right: 0%;}
        to {right: 10%;}
    }
    /* Hien thi cho Safari and Chrome */
    @-webkit-keyframes myAnimation2 {
        from {right: 0%;}
        to {right: 10%;}
    }
    /* Hien thi cho Opera */
    @-o-keyframes myAnimation2 {
        from {right: 0%;}
        to {right: 10%;}
    }

    #h5{-webkit-box-shadow: 11px 13px 24px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 11px 13px 24px 0px rgba(0,0,0,0.75);
box-shadow: 11px 13px 24px 0px rgba(0,0,0,0.75);}

  #t2 {

    background-color: black;
 
    padding-bottom: 3%;
    position: relative;
    z-index: 1;
    font-family: 'Roboto', sans-serif;
    font-size: 3rem;
    font-weight: 2500;
    color:aliceblue;
    text-align: center;

    animation: myAnimation2 2s ease 0.5s 1 normal forwards;
    -moz-animation: myAnimation2 2s ease 0.5s 1 normal forwards;
   -webkit-animation: myAnimation2 2s ease 0.5s 1 normal forwards;
   -o-animation: myAnimation2 2s ease 0.5s 1 normal forwards;
   animation-fill-mode: forwards;

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