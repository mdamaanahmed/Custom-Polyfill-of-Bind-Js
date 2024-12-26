const person = {
  firstName: "John",
  lastName: "Doe",
  address: "Noida",
};

const personDetails = function (profession, salary) {
  return `Hello👋, my name is ${this.firstName} ${this.lastName} and my working profession is ${profession} with ${salary}₹ salary. Currently living in ${this.address}.`;
};

const defaultBind = personDetails.bind(person, "Frontend Developer");
console.log("defaultBind:", defaultBind("10"));

Function.prototype.customBind = function (context, ...initialArgs) {
  if (typeof this !== "function") throw new Error(`${this} is not a function.`);
  context.function = this;
  return function (...args) {
    return context.function(...initialArgs, ...args);
  };
};

const customBind = personDetails.customBind(person, "Backend Developer");
console.log("customBind:", customBind("12"));
