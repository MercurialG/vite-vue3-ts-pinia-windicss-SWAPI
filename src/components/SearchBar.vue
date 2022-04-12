<template>
    <div class="w-vw-20vw mt-10vh mt-10vh mx-auto">
      <input class="
      w-vw-14.8vw
      h-vh-4vh
      px-3
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" v-model="inputs.query"/>
      <button class="h-vh-4vh w-vw-4.7vw bg-gray-800 ml-0.5vw font-medium  hover:bg-gray-900 text-white rounded" @click="searchClick">Search</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive} from "vue";
import { usePeopleStore } from '../store/people'
export default defineComponent({
  name: "SearchBar",

  setup() {
    const people = usePeopleStore()  
    let inputs = reactive({query: ''});
    const searchClick = () => {
     people.searchPeople(inputs.query)
     console.log();
    }
    
    return {
      inputs,
      searchClick,
    };
  },
});
</script>
