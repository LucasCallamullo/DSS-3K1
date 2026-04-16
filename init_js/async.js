function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hola desde timeout");
        }, ms);
    });
}

async function main() {
    const msj = await delay(3000);
    console.log(msj);  // "Hola desde timeout" (después de 3 segundos)
}

console.log("Hola");
await main();
console.log("Hola2");
console.log("Hola3");

// Salida:
// "Hola" (inmediato)
// (espera 3 segundos)
// "Hola desde timeout"
// "Hola2"
// "Hola3"