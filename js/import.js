import playGuitar from "./modules.js";
import { shredding as shred, plucking as pluck } from "./modules.js";
import User from "./user.js";

console.log(playGuitar());
console.log(shred());
console.log(pluck());
let user = new User("user@gmail.com", "user name");
console.log(user.greeting());
