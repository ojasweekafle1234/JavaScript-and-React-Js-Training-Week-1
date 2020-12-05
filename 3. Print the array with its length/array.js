//Initialize and calculate array length//
var array = ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"]
var iterator = array.values(); 
for (let elements of iterator) { 
  console.log(elements); 
} 
console.log("Size of array at first",array.length);

//ADD TWO NEW PLACES
var updatedPlaces = array.push("Butwal", "Chitwan");
console.log(array);
//ARRAY LENGTH
console.log("Size of array after adding two new places", array.length);

//REMOVE KATHMANDU
array.splice(3, 1);
console.log(array);
//FINAL ARRAY LENGTH
console.log("Size of array after removing Kathmandu", array.length);