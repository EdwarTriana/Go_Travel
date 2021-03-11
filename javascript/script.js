
function llanos(){
    swal("Oriente", "Destinos: San martin, Acacias, Villavicencio y Puerto lópez\n"+
    "Dias: 4 dias\n"+
    "Noches: 3 noches\n" +
    "Comida: Desayuno incluido tipo americano ( huevos, tocineta, arroz y chocolate)\n"+
    "Hospedaje: Hoteles 3 estrellas\n"+
    "Transporte: Tiquete desde bogotá, cali o medellín, movilización entre las ciudades con guía turístico\n"+
    "Tour: Recorrido en los parques, tour por las distintos sitios turísticos y snack en atardecer llanero en el ombligo de colombia \n"+
    
    "Persona: $550.000");
    
}

function sanandres(){
    swal("San Andres", "Destinos: San Andres e islas\n" +
    "Dias: 4 dias\n" +
    "Noches: 3 noches\n" +
    "Comida: Desayuno incluido tipo americano ( huevos, tocineta, arroz y chocolate)\n" +
    "Hospedaje: Hotel 4 estrellas\n" +
    "Transporte: Tiquete desde bogotá, cali o medellín, movilización entre la ciudad con guía turístico\n" +
    "Tour: Recorrido en los parques, tour por las distintos sitios turísticos y boat party barra libre\n" + 
    
    "Persona: $700000");
    
}

function ejecafetero(){
    swal("Eje Cafetero", "Destinos: Manizales, Pereira y armenia\n" +
    "Dias: 5 dias\n" +
    "Noches: 4 noches\n" +
    "Comida: Desayuno incluido tipo americano ( huevos, tocineta, arroz y chocolate)\n" +
    "Hospedaje: Hoteles 3 estrellas\n" +
    "Transporte: Tiquete desde Bogotá o Medellín, movilización entre las ciudades con guía turístico\n" +
    "Tour: Recorrido en los parques, tour por las distintas ciudades y una noche en chiva rumbera\n" +
    
    "Persona: $650... --- per pareja: 1150\n" +
    "despues de 4: 2210= -15%");
    
}
function costacaribe(){
    swal("Costa Caribe", "Destinos: Santa marta, Barranquilla y Cartagena\n" +
    "Dias: 6 dias\n" +
    "Noches: 5 noches\n" +
    "Comida: Desayuno incluido tipo americano ( huevos, tocineta, arroz y chocolate)\n" +
    "Hospedaje: Hoteles 3 estrellas frente al mar\n" +
    "Transporte: Tiquete desde bogotá, cali o medellín, movilización entre las ciudades con guía turístico\n" +
    "Tour: Tour por las 3 ciudades en los mejores sitios turísticos y playas\n" +
    
    "Persona: $900.000 ---  per pareja: $1.65M\n" +
    "despues de 4: $ 3.060 = -15%");
    
}
function antioquia(){
    swal("Antioquia", "Destinos: Medellín, piedra peñol, guatapé y  rionegro\n" +
   " Dias: 4 dias\n" +
    "Noches: 3 noches\n" +
    "Comida: Desayuno incluido tipo americano ( huevos, tocineta, arroz y chocolate)\n" +
    "Hospedaje: Hoteles 3 estrellas\n" +
    "Transporte: Tiquete desde bogotá, cali o cartagena, movilización entre las ciudades con guía turístico\n" +
    "Tour: Recorrido en los parques, tour por las distintos sitios turísticos y cena en guatapé\n" +
    
    "Persona: $550.000 --- per pareja: 950\n" +
    "despues de 4:=  1870-15%");
    
}
function amazonia(){
    swal("Amazonia", "Destinos: Leticia y parques naturales\n" +
    "Dias: 3 dias\n" +
    "Noches: 2 noches\n" +
    "Comida: Desayuno incluido tipo americano ( huevos, tocineta, arroz y chocolate)\n" +
    "Hospedaje: Hotel 4 estrellas\n" +
    "Transporte: Tiquete desde bogotá, cali o medellín, movilización entre la ciudad con guía turístico\n" +
    "Tour: Recorrido en los parques, tour por las distintos sitios turísticos y boat party barra libre \n" +
    
    "Persona: $500.000");
}

/* calculadora*/
function resultado () {
    const inputAddress = document.getElementById('inputAddress').value //destino
    const plan1 = document.getElementById('plan1').value //2 dias 1 noche
    const inputPassword4 = document.getElementById('inputPassword4').value //numero de personas
    const inputCity = document.getElementById('inputCity').value //numero de personas


    const array [inputAddress,plan1,inputPassword4,inputCity]

    for (let contador=900000; contador <= array.length; contador++ ) {
        if (array[contador]==="1"){
            console.log(contador)
            console.log(array[contador])
        }
    }

   

}