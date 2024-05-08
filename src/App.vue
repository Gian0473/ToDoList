<template lang="es">
  <div id= "grid">
    <header id="encabezado" data-bs-theme="dark" class="p-3 m-0 mb-0">
      <h1 id="h1app">My to do list</h1>
    </header>
    <nav id="menu_principal" class="nav navbar navbar-expand-lg p-2 m-0 mt-0" data-bs-theme="dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse container-fluid" id="navbarSupportedContent">
          <ul class="navbar-nav nav-underline me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link" aria-current="page">INICIO</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/comp_to_do_list" class="nav-link">TO DO LIST</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main id="bloque_principal" class=" text-primary-emphasis flex ">
      <router-view/>    
    </main>

    <footer id="pie_pagina"  class="p-3 m-0 mt-2">
      <address><a href="mailto: cjuan0473@gmail.com">cjuan0473@gmail.com</a></address>
      <small>&copy; Derechos Reservados 2024</small>
      <br><br>
      <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank"><img alt="Licencia Creative Commons" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"/></a>
      <br>
      <small>
        <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">to do list </span>por <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Gian Carlo Velez O</span> 
        <br>se distribuye bajo una<br> 
        <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional.</a>
      </small>
    </footer>

  </div>
</template>

<script>
  export default {

    components: {
    },

    setup() {

      return {
      }; 

    },
    
  };
</script>

<style scoped lang="css">

  * {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  #grid { 
    background: white;
    display: grid;
    /*grid-gap: 5px;*/
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(5, auto);

    grid-template-areas:    "H H H H"                             
                            "N N N N"
                            "M M M M"
                            "M M M M"
                            "F F F F";  
  }
  header {
    background-color: #023047;
    text-align: center;
    grid-area: H;
    margin-bottom: 0; 
    height: 70px;
  }
  #h1app {
    font-size: 40pt;
    background: linear-gradient(60deg,#ffb703,#ff00c3);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  nav {
    background-color:#023047;
    grid-area: N;
    margin-top: 0;
    height: 50px;
  }

  .nav-link {
    color: #7ff0f0;
    font-weight: bolder;
  }

  .nav-link:hover {
    background: linear-gradient(90deg,#00ffff,#ff00c3);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  main {
    background: white;
    grid-area: M; 
  }

  footer {
    background-color: #023047;
    color: rgb(0, 0, 0);
    text-align: center;
    font-weight: bold;
    margin: 10px;
    padding: 10px;
    padding-bottom: 30px;
    grid-area: F; 
  }

  address a {
    color: rgb(78, 182, 247);
    text-decoration: none;
    font-weight: 600;
  }

  footer a {
    text-decoration: none;
  }

  a img {
    border-width: 0px;
  }

  @media screen and (max-width: 900px) and (min-width: 551px) { 
    #grid {        
      grid-template-columns: repeat(3, 33.3%);
      grid-template-rows: repeat(4, auto);

      grid-template-areas:    "H H H"
                              "N N N"                                
                              "M M M"                                                                
                              "F F F"; 
    }
  }

  @media screen and (max-width: 550px) {  
    #grid {        
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: repeat(5, auto);

      grid-template-areas:    "H H"
                              "N N"
                              "M M"
                              "M M"                                                                  
                              "F F"; 
    }
  }
  
</style>
