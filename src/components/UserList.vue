<template>
    <div class="rounded-md w-vw-20vw min-w-px-300px mt-1vh mx-auto border-solid shadow">
      <div class="ml-1vw" v-for="character in characterList" :key="character.id">
          <h2>{{character.name}}</h2>
          <div>Height: {{character.height}}</div>
          <div>Mass: {{character.mass}}</div>
          <div>Hair: {{character.hair_color}}</div>
          <div class="flex">Skin: <div :style="{ background: character.hair_color}" :class="boxColor(character.hair_color)"></div></div>
          <div class="flex">Eyes: <div :style="{ background: character.eye_color}" :class="boxColor(character.eye_color)"></div></div>
          <div>Birth date: {{character.birth_year}}</div>
          <div>Gender: {{character.gender}}</div>
          <div>Homeworld: {{character.homeworld}}</div>
          <hr>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from "vue";
import { usePeopleStore } from '../store/people'
export default defineComponent({
  name: "UserList",

  setup() {
  
    let boxColor = (color: String) => `bg-${color}-500 bg-opacity-100 ml-1vw mt-6px border-solid-1px w-vw-1.3vw h-vh-2vh`
    
    const characterStore = usePeopleStore()
    const characterList = computed(() => characterStore.characterList)
    return { characterList, boxColor,};
  },
});
</script>
