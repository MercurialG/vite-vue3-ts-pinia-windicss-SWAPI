<template>
    <div class="dark rounded-md w-vw-20vw mt-1vh mx-auto border-solid shadow">
      <div class="ml-1vw" v-for="character in characterList" :key="character.id">
          <h2>{{character.name}}</h2>
          <div>Height: {{character.height}}</div>
          <div>Mass: {{character.mass}}</div>
          <div>Hair: {{character.hair_color}}</div>
          <div>Skin: {{character.skin_color}}</div>
          <div class="flex">Eyes: <div :class="eyeColor(character.eye_color)"></div>{{character.eye_color}}</div>
          <div>Birth date: {{character.birth_year}}</div>
          <div>Gender: {{character.gender}}</div>
          <div>Homeworld: {{character.homeworld}}</div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from "vue";
import { usePeopleStore } from '../store/people'
export default defineComponent({
  name: "UserList",

  setup() {
    const characterStore = usePeopleStore()
    const characterList = computed(() => characterStore.characterList)
    // eyeColor(color){return `bg-${color}-500 ml-1vw mt-6px border-solid-1px w-vw-1.3vw h-vh-2vh`)}
    return { characterList};
  },
});
</script>
