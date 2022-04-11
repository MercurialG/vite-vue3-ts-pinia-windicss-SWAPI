import { defineStore } from 'pinia'
import links from '../api/links'

interface Character{
	name: "",
	height: "",
	mass: "",
	hair_color: "",
	skin_color: "",
	eye_color: "",
	birth_year: "",
	gender: "",
	homeworld: "",
	films: [],
	species: [],
	vehicles: [],
	starships: [],
	created: "",
	edited: "",
	url: ""
}

export const usePeopleStore = defineStore({
  id: 'people',
  state: () => ({characters: [] as Character[]}),
  getters: {
    characterList(): Array<Character> {
      return this.characters
    }
  },
  actions: {
   async getPeople() {
     const response = await links.getPeopleList()
     this.characters = response.data
     console.log(this.characters)
   },
   async searchPeople(query: string) {
    const response = await links.searchPeople(query)
    this.characters = response.data.results
    console.log(this.characters)
  }
  }
})
