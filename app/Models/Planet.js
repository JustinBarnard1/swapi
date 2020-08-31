export default class Planet {
    constructor({ name, climate, terrain, population, diameter }) {
        this.name = name
        this.climate = climate
        this.terrain = terrain
        this.population = population
        this.diameter = diameter
        this.bgColor = "bg-primary"

        if (this.diameter <= 10000) {
            this.bgColor = "bg-success"
        }
        if (this.diameter > 10000 && this.diameter < 20000) {
            this.bgColor = "bg-warning"
        }
        if (this.diameter > 20000) {
            this.bgColor = "bg-danger"
        }


    }




    get Template() {

        return /*html*/`
    <div class='col-3'>
      <div class="card p-2 value ${this.bgColor}">
          ${this.name} - pop. ${this.population} - size: ${this.diameter}
      </div>
    </div>
    `
    }
}