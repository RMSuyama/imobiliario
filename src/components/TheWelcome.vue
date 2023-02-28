<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
<div v-if="loading">Carregando...</div>
<div v-else>
<div class="search-container">
<label for="search">Pesquisar:</label>
<input type="text" id="search" v-model="search" />
<button @click="searchPokemon" class="btn btn-primary btn-lg">
  <i class="bi bi-search"></i> Pesquisar
</button>        
</div>
<div v-if="pokemon" class="pokemon-details">
    <h2>{{ pokemon.name }}</h2>
    <img :src="pokemon.spriteUrl" :alt="pokemon.name" />
    <div>
      <div>Tipo:</div>
      <ul>
        <li v-for="type in pokemon.types" :key="type">{{ type }}</li>
      </ul>
    </div>
    <div>
        <div id="habilidades">Habilidades:</div>
            <ul>
                <li v-for="ability in pokemon.abilities" :key="ability">{{ ability }}</li>
            </ul>
        </div>
        <div>
                <div>Altura:</div>
                <div>{{ pokemon.height }}m</div>
        </div>
        <div>
                <div>Peso:</div>
                <div>{{ pokemon.weight }}kg</div>
        </div>
            </div>
    <div v-else>
      <p>Nenhum pokémon encontrado.</p>
    </div>
  </div>



</template>
<script>
    import axios from 'axios';
    
    export default {
      data() {
        return {
          loading: false,
          search: '',
          pokemon: null,
        };
      },
      methods: {
        async searchPokemon() {
          this.loading = true;
          try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.search.toLowerCase()}`);
            const data = response.data;
            this.pokemon = {
              name: data.name,
              types: data.types.map(type => type.type.name),
              abilities: data.abilities.map(ability => ability.ability.name),
              height: data.height / 10, // Convert to meters
              weight: data.weight / 10, // Convert to kilograms
              spriteUrl: data.sprites.front_default,
            };
          } catch (error) {
            console.error(error);
            this.pokemon = null;
          }
          this.loading = false;
        },
      },
    };
    </script>