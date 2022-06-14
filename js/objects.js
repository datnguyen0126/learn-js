const test = {
  name: "a",
  age: "b",
};

const test1 = Object.create(test, { newinfo: { value: "male" } });
console.log(test1);

const band = {
  vocals: "Rovert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul",
};

const { guitar: myVal1, bass: myVal2 } = band;
console.log(myVal1);
console.log(myVal2);

const { vocals, guitar } = band;
console.log(vocals);
console.log(guitar);

function sings({ vocals }) {
  return `${vocals} sings!`;
}
console.log(sings(band));
