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
    // this.characters.forEach(async (element) => element.homeworld = await this.homeWorld(element.homeworld))
    this.characters.forEach(async (element) => element.homeworld = await (await links.setHomeworld(element.homeworld)).data.name)
    // for (let i=0;i<=this.characters.length; i++){
    //   this.characters[i].homeworld = await this.homeWorld(this.characters[i].homeworld)
    // }
    // await links.setHomeworld(this.characters.forEach((element => links.setHomeworld(element.homeworld))))
  },

    // async homeWorld(hq: string) {
    //   const response = await links.setHomeworld(hq)
    //   return response.data.name
      // this.characters.homeworld
    //   this.characters.forEach((element) => {element.homeworld = (response.data.name)
    //   }
    // )
  // },
    // {
    //   // homeWorld(element.homeworld)
    //   // element.homeworld = links.setHomeworld(element.homeworld)
    // }
  }
})
