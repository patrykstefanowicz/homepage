const firstName = "Patryk";
const age = 25;

console.log(firstName);
console.log(age);

console.log(`Siema, nazywam się ${firstName} oraz mam ${age} lat.`);

const heading = document.querySelector(".main__heading--js");
console.log(heading);
heading.innerHTML = `Coś tam się udało za pomocą querySelectora`;

const emptyParagraph = document.querySelector(".about__description--js");
emptyParagraph.innerHTML = `dopisane za pomocą JavaScriptu`;

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}
createContent(".notes__heading--js", "Siema siema, tutaj dni tygodnia");

createContent(".about__description--js", "dopisane za pomocą JavaScriptu");

function calculate(myNumber) {
  console.log(`Dostałem ${myNumber}`);
  myNumber = myNumber * 7;
  return `wynik ${myNumber}`;
}
const myResult = calculate(2);
console.log(myResult);

function greetOld(firstName, age) {
  console.log(`Siema, nazywam się ${firstName} oraz mam ${age} lat.`);
}
greetOld(firstName, age);

function helloWorld() {
  console.log("Witaj świecie");
}
helloWorld();

const greet = (age, firstName) => {
  console.log(`Siema, nazywam się ${firstName} oraz mam ${age} lat.`);
};
greet(25, "Patryk");

const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed`);
  },
  isOperation: true,
  levels: 357,
  name: "Death Star",
  population: 10000,
  commander: {
    name: "Death Vader",
    age: 44,
  },
};
console.log(deathStar);

console.log(console);

console.log(typeof deathStar);
console.log(typeof deathStar.name);

deathStar.fire("Rebel ship");
console.log(deathStar.commander.age);
console.log(deathStar["diameter"]);

const myProperty = "name";
const showMeProperty = (myProperty) => {
  console.log(`Twoja własność ${myProperty} to: ${deathStar[myProperty]}`);
};

showMeProperty("levels");

const humanOne = {
  name: "Patryk",
  age: 25,
  address: {
    street: "Pułaskiego",
    city: "Suwałki",
  },
};

const humanTwo = {
  name: "Stefan",
  age: 26,
  address: {
    street: "Pułaskiego",
    city: "Suwałki",
  },
};

humanOne.address.city = "Białystok";

console.log(humanOne);
console.log(humanTwo);

if (humanOne.age > humanTwo.age) {
  console.log("HumanOne jest starszy");
} else if (humanOne.age == humanTwo.age) {
  console.log("są równolatkami");
} else console.log("HumanTwo jest starszy");

const myNumber = 4;

switch (myNumber) {
  case 4:
    console.log("to jest liczba 4");
    break;
  case 6:
    console.log("to jest liczba 6");
    break;
  default:
    console.log("inna liczba niż wybrana");
}

const button = document.querySelector(".action--js");


const myClick = () => {
  console.log("kliknąłeś");
  const about = document.querySelector(".about__heading--js");
  about.innerHTML = `Kim jednak Ty jesteś?`;
}

button.addEventListener('click', myClick);
