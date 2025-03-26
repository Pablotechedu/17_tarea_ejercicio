/*Ejercicio: 

Paso 1:
Escribe una funcion greenEnergy() que tenga un objeto como 
parametro y establezca la propiedad 'Fuel Type' de ese 
objeto en 'avocado oil'

Paso 2:
Escribe una funcion remotelyDisable() que tenga un objeto como
parametro y establezca (o reasigne) la propiedad disable de ese
objeto a true.

Paso 3:
Llame a sus dos funciones con el objeto spaceship en el editor de codigo,
luego imprime el objeto spaceship para confirmar que se 
cambiaron/agregaron esas propiedades.
*/

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};

// Paso 1: pasa la propiedad Fuel Type a "avocado oil"
const greenEnergy = (objeto) => {
  objeto["Fuel Type"] = "avocado oil";
};

// Paso 2: pasa la propiedad disable a true
const remotelyDisable = (objeto) => {
  objeto.disable = true;
};
// Paso 3: Llama a las funciones y muestra el objeto
greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);
