// Description:
// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!

// function fixMeerkat(arr){
//   let create = []
//   arr.forEach(element => {
//     create.unshift(element)
//   });
//   return create
// }

function fixMeerkat(arr){
  return arr.reverse()
}

console.log(fixMeerkat(["tail", "body", "head"]), ["head", "body", "tail"])
console.log((fixMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]))
console.log((fixMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]))
console.log((fixMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]))
console.log((fixMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]))
