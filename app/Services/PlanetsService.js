import { ProxyState } from "../AppState.js";
import Planet from "../Models/Planet.js";
import { api } from "./AxiosService.js";

class PlanetsService {


    getPlanets() {
        api.get('planets')
            .then(res => {
                ProxyState.next = res.data.next
                ProxyState.planets = res.data.results.map(p => new Planet(p))
            })
            .catch(error => {
                console.error(error)
            })
    }

    nextPlanet() {
        if (ProxyState.next) {
            api.get(ProxyState.next)
                .then(res => {
                    ProxyState.previous = res.data.previous
                    ProxyState.next = res.data.next
                    ProxyState.planets = res.data.results.map(p => new Planet(p))
                })
                .catch(error => {
                    console.error(error)
                })
        }
    }


    previousPlanet() {
        if (ProxyState.previous) {
            api.get(ProxyState.previous)
                .then(res => {
                    ProxyState.previous = res.data.previous
                    ProxyState.next = res.data.next
                    ProxyState.planets = res.data.results.map(p => new Planet(p))
                })
                .catch(error => {
                    console.error(error)
                })
        }
    }
}


export const planetsService = new PlanetsService();