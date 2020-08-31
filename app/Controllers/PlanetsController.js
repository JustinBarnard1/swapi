import { ProxyState } from "../AppState.js";
import { planetsService } from "../Services/PlanetsService.js";

function _drawPlanets() {
    let planets = ProxyState.planets
    let template = ''
    planets.forEach(p => template += p.Template)
    document.getElementById("planets").innerHTML = template
}

export default class PlanetsController {
    constructor() {
        ProxyState.on('planets', _drawPlanets)
        planetsService.getPlanets();
    }

    nextPlanet() {
        planetsService.nextPlanet()
    }

    previousPlanet() {
        planetsService.previousPlanet()
    }
}