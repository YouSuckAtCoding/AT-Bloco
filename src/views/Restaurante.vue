<template>
 
    <div class="mainPage">
        <div class="CategoriaPage">
                <nav class="navbar" id="CategoriaTitle">
                    <div class="container-fluid" id="CategoriaTitleContainer">
                        <a class="navbar-brand">Categorias</a>
                    </div>
                </nav>
                <div class="CategoriaIcons">
                    <ul class="list-group">
                      <li class="list-group-item" id="IconContainer">
                        <router-link to="/emergencia" class="nav-link">
                            <i class="fa-solid fa-hospital" id="LinkIcon"></i> 
                            Emergência
                          </router-link>
                         
                    </li>
                    <li class="list-group-item" id="IconContainer">
                        <router-link to="/entretenimento" class="nav-link">
                            <i class="fa-solid fa-champagne-glasses" id="LinkIcon"></i>
                             Entretenimento
                        </router-link>
                    </li>
                    <li class="list-group-item" id="IconContainer">
                        <router-link to="/restaurantes" class="nav-link">
                            <i class="fa-solid fa-burger" id="LinkIcon"></i> 
                            Gastronomia
                        </router-link>
                    </li>
                    <li class="list-group-item" id="IconContainer">
                        <router-link to="/outros" class="nav-link"> 
                            <i class="fa-solid fa-list" id="LinkIcon"></i> 
                            Outros
                        </router-link>
                    </li>             
                    </ul>
                    
                </div>
                
        </div>
        <div class="SelecaoPage">
            <nav class="navbar navbar-expand-lg" id="navbarConteudo">
                <div class="container-fluid" id="ContainerNavbarConteudo">
                  <a class="navbar-brand" href="#">Sistema de Apoio ao Turista</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 ms-4 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">
                            <i class="fa-solid fa-house" id="LinkIcon2"></i> Início
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="fa-solid fa-envelope" id="LinkIcon2"></i> Mensagens
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-flag" id="LinkIcon2"></i>
                          Idioma
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Português - pt-br</a></li>
                          <li><a class="dropdown-item" href="#">English - En-Us</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

              <form id="ContainerSearchBar" class="d-flex" role="search">
                <input id="IndexSearchBar" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-danger" type="submit">Search</button>
              </form>

              <div class="container-lg" id="ContainerConteudo">
                <template v-for="item in data" :key="item.id">
                    <div class="Conteudo"  v-if="item.category === 'gastronomia'">
                        <a class="nav-link" href="#"  > 
                            <i :class='item.icon' id="LinkIcon"></i> 
                            <p>
                            {{item.name}}
                            </p>
                            <p>
                            {{item.address}}
                            </p>
                            <p>
                            {{item.neighborhood}}
                            </p>
                            <p>
                            {{item.city}}
                            </p>
                        </a>
                    </div>
                </template>
                
               
              </div>  

            </div>
            
    </div>
    <footer>
        <div class="card" id="Rodape">
            <div class="card-header" id="headerRodape">
                Sistema de Apoio ao Turista ₢ 2022 Infnet
              </div>
            <div class="card-body" id="conteudoRodape">
                <a class="nav-link" href="#" id="rodapeIcon">
                    Sobre Nós
                </a>
                <a class="nav-link" href="#" id="rodapeIcon">
                    Carreira
                </a>
                <a class="nav-link" href="#" id="rodapeIcon">
                    Entre em Contato
                </a>
            </div>
          </div>
    </footer>
  

</template>

<script>
import data from "@/data/Data.json"

export default {
name: 'Restaurante-Component',
components: {

},
data(){
return{
  data: data
}
},
mounted(){
let scriptFont = document.createElement('script')
scriptFont.setAttribute('src', 'https://kit.fontawesome.com/208c9d7d9a.js')
scriptFont.setAttribute('crossorigin', 'anonymous')
document.head.appendChild(scriptFont)
}
}
</script>
