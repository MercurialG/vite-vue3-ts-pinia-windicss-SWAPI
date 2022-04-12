import api from './api'
export default {
    getPeopleList() {
        return api().get(`people`) 
    },
    getPlanetList() {
        return api().get(`planets`) 
    },
    searchPeople(query: string) {
        return api().get(`people/?search=${query}`)
        // .then(axios.get(`/${response.data.results.homeworld}`))
    },
    setHomeworld(query: string) {
        console.log(query)
        return api().get(query)
    }
}


