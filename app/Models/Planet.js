export default class Planet {
    constructor({ name, climate, terrain, population, diameter }) {
        this.name = name
        this.climate = climate
        this.terrain = terrain
        this.population = population
        this.diameter = diameter

    }

    get Template() {

        return /*html*/`
    <div class='col-3'>
      <div class="card p-2 value">
          ${this.name} - pop. ${this.population} - size: ${this.diameter}
      </div>
    </div>
    `
    }
}