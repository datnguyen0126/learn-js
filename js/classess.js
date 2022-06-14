// Factory function
// function pizzaFactory(pizzaSize) {
//   const crust = "original";
//   const size = pizzaSize;
//   return {
//     bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`),
//   };
// }

// const myPizza = pizzaFactory("small");
// myPizza.bake();

class Pizza {
  #sauce = "traditional"; // private field

  constructor(pizzaType) {
    this.type = pizzaType;
    this.size = "medium";
    this._crust = "original";
    this.toppings = [];
  }

  get pizzaCrust() {
    return this._crust;
  }

  set pizzaCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }

  setCrust(pizzaCrust) {
    this._crust = pizzaCrust;
  }

  getCrust() {
    return this._crust;
  }  

  getToppings() {
    return this.toppings;
  }

  setToppings(topping) {
    this.toppings.push(topping);
  }

  bake() {
    console.log(
      `baking a ${this.size} ${this.crust} ${this.type} crust pizza.`
    );
  }
}

// class SpecialtyPizza extends Pizza {
//   constructor(pizzaSize) {
//     super(pizzaSize);
//     this.type = "The works";
//   }

//   slice() {
//     console.log(`Our ${this.type} pizza`);
//   }
// }

// const myPizza = new Pizza();
// myPizza.bake();
// myPizza.pizzaCrust = "sausage";
// console.log(myPizza.pizzaCrust);
// myPizza.setCrust("thin");
// console.log(myPizza.getCrust());
// myPizza.setToppings("olives");
// console.log(myPizza.getToppings());
