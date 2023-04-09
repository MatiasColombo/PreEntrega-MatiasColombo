function calcularPromedioEdad(edades) {
  let sumaEdades = 0;
  for (let i = 0; i < edades.length; i++) {
    sumaEdades += edades[i];
  }
  let promedioEdad = sumaEdades / edades.length;
  return promedioEdad;
}

let edades = [];
for (let i = 1; i <= 15; i++) {
  let edad = parseInt(prompt(`Ingrese la edad de la persona ${i}:`));
  edades.push(edad);
}

let promedioEdad = calcularPromedioEdad(edades);
console.log (`El promedio de edad de las 15 personas es: ${promedioEdad}`);
alert (`El promedio de edad de las 15 personas es: ${promedioEdad}`);S
