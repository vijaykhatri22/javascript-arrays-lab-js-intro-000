const app = "I don't do much."
function destructivelyAppendKitten(newKitten){
  kittens.push(newKitten)
  return kittens
}
function destructivelyPrependKitten(newKitten){
  kittens.unshift(newKitten);
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  //return kittens;
}
