<template>
    <button class="h-vh-4vh w-vw-4.7vw bg-gray-800 ml-0.5vw font-medium  hover:bg-gray-900 text-white rounded">Previous</button>
    <button class="h-vh-4vh w-vw-4.7vw bg-gray-800 ml-0.5vw font-medium  hover:bg-gray-900 text-white rounded">Next</button>
</template>

<script lang="ts">
import { defineComponent, reactive} from "vue";
import { usePeopleStore } from '../store/people'
export default defineComponent({
  name: "Controls",

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
