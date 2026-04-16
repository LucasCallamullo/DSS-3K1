


// objeto de js --> Map Js Java C#,  Python Dict 
// Key --> Value  --> Clave --> Valor 


// indices        0        1        2
const listas = ["Hola", "Mundo", "Gol"];


/* 
const animal = {
    "name": "Coco",
    "type": "Perro",
    "age": 25
} 
function main(name) {
    console.log(`Hola ${name}`);   
}

const main2 = (num1, num2) => {
    console.log(`Sumando: ${num1} + ${num2} | Resultado: ${num1 + num2}`);
}

main("Lucas");
main2(4, 5);

*/




/* 
// for i in range( start = 0,            stop,                step = 1  )
for             (let index = 0; index < animales.length; index++) {
    // index = 2
    const animal = animales[index];
    console.log(animal.name);    // "Coco"  -> "Dante"
} */




const animales = [
    {
        "name": "Coco",
        "type": "Perro",
        "age": 25
    },
    {
        "name": "Dante",
        "type": "Perro",
        "age": 5
    },
]


// paradigm funcional
animales.forEach((animal) => { 
    console.log(animal)
    console.log(`${(animal.name === "Coco") ? `Hola ${animal.name}` : "No es coco"}`);
})






