<template>
 
        <nav id="navbar" class="navbar navbar-expand-lg" style="background-color: white; width: 100%;" >
                <a class="navbar-brand" href=""><img id="logoEscritorio" src="../../assets/logo.png" class="img-fluid img-thumbnail" alt="Logo do Escritório" /></a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="../index.html">Home</a>
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
                <div class="nav-item dropdown" id="redeSociais">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Me siga nas redes sociais!
                    </a>
                    
                    <ul class="dropdown-menu" id="menuRedesSociais">
                        <li><a class="dropdown-item" href="https://www.instagram.com/suyama.adv/"><img id="ico2" src="../../assets/instagram.svg" alt="Insta" /> Instagram</a></li>
                        <li><a class="dropdown-item" href="https://www.linkedin.com/in/rafael-moreira-suyama-0043bb189/"><img id="ico2" src="../../assets/linkedin.svg" alt="Linkedin" /> LinkedIn</a></li>
                        <li><a class="dropdown-item" href="https://wa.me/5513996267989"><img id="ico2" src="../../assets//twitter.svg" alt="Whats" />Twitter</a></li>
                        <li><a class="dropdown-item" href="https://wa.me/5513996267989"><img id="ico2" src="../../assets/facebook.svg" alt="Whats" />Facebook</a></li>
                    
                    </ul>
                </div> 
                </div>
          
        </nav>

  </template>

  <style scoped>

  #navbar{  padding: 1rem;
}
  
  #logoEscritorio{
        width: 4rem;

  }

  </style>
  
