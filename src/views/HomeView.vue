<template>
   <search-bar/>
   <user-list/>
</template>

<script lang="ts">
import SearchBar from '../components/SearchBar.vue';
import UserList from '../components/UserList.vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    SearchBar,
    UserList
  },
});
</script>
<style>
  background-color: black-900;
</style>