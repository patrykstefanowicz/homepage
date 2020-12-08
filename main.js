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

function calculate(myNumber) {
  console.log(`Dostałem ${myNumber}`);
  return myNumber * 7;
}

const myResult = calculate(2);

console.log(myResult);
