<template>
  <div class="pokemon-carousel">
    <h2>Todos os Pokémons</h2>
    <div class="carousel">
      <div class="carousel-items">
        <div v-for="pokemon in pokemonList" :key="pokemon.id">
          <img :src="pokemon.image" :alt="pokemon.name" />
          <h3>{{ pokemon.name }}</h3>
        </div>
      </div>
      <div class="carousel-controls">
        <button class="prev-btn">Anterior</button>
        <button class="next-btn">Próximo</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import 'slick-carousel';

export default {
  name: 'PokemonCarousel',
  data() {
    return {
      pokemonList: [],
    };
  },
  mounted() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => {
        this.pokemonList = response.data.results.map((pokemon, index) => {
          const id = index + 1;
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return { id, name: pokemon.name, image };
        });

        const carouselItems = this.$el.querySelector('.carousel-items');
        const prevBtn = this.$el.querySelector('.prev-btn');
        const nextBtn = this.$el.querySelector('.next-btn');

        $(carouselItems).slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow: prevBtn,
          nextArrow: nextBtn,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      });
  },
};
</script>

<style scoped>
.pokemon-carousel {
  text-align: center;
}

.carousel {
  margin-top: 20px;
}

.carousel-items {
  display: flex;
}

.carousel-items > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
}

.carousel img {
  width: 150px;
  height: 150px;
}

.carousel-controls {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.carousel-controls button {
  margin: 0 5px;
}
</style>
