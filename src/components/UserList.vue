<template>
    <div class="bg-gray-500 rounded-md w-vw-20vw mt-1vh mx-auto shadow">
      <div class="ml-1vw" v-for="character in characters.characterList" :key="character.id">
          <h2>{{character.name}}</h2>
          <div>Height: {{character.height}}</div>
          <div>Mass: {{character.mass}}</div>
          <div>Hair: {{character.hair_color}}</div>
          <div>Skin: {{character.skin_color}}</div>
          <div>Eyes: {{character.eye_color}}</div>
          <div>Birth date: {{character.birth_year}}</div>
          <div>Gender: {{character.gender}}</div>
          <div>Homeworld: {{character.homeworld}}</div>
          </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePeopleStore } from '../store/people'
export default defineComponent({
  name: "UserList",

  setup() {
    const characters = usePeopleStore()
    return { characters };
  },
});
</script>
