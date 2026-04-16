async function main() {
    // Iniciar temporizador con una etiqueta
    console.time('fetch-paises');
    
    try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,,,population');
        
        console.timeLog('fetch-paises', 'Respuesta recibida, convirtiendo a JSON...');
        
        // si me devuelve algo que no sea 200, significa que no fue todo bien
        if (!response.ok) {       
            const e = await response.json();
            throw new Error(`${e.message} | Status ${e.status}` || "Error Forzado MAL LAS COMAS");
        }

        const data = await response.json();
        

        // Mostrar tiempo total
        console.timeEnd('fetch-paises');
        
        console.log(`✅ Países cargados: ${data.length}`); // 250
        // console.log(data.slice(0, 3)); // Muestra los primeros 3
        

        /* 
        {
        "name": {
                "common": "Ivory Coast",
                "official": "Republic of Côte d'Ivoire",
                "nativeName": {
                    "fra": {
                    "official": "République de Côte d'Ivoire",
                    "common": "Côte d'Ivoire"
                    }
                }
            },
            "capital": [
                "Yamoussoukro"
            ],
            "population": 31719275
        }, */

        /* data.forEach((c, index) => {
            console.log(`Id: ${index} | Pais: ${c.name.common}`)
        }); */

        const popu = 40000000;
        const dataFiltered = data.filter(c => c.population > popu);    // return lista

        dataFiltered.forEach((c, index) => {
            console.log(`Id: ${index} | Pais: ${c.name.common}`)
        });


        const dataString = dataFiltered.map((c, index) => {
            return `Id: ${index} | Pais: ${c.name.common}`
        });        // return lista


        const dataSmall = dataFiltered.map(c => {
            return {
                name: c.name.common,
                population: c.population
            }
        });

        console.log(JSON.stringify(dataSmall));

        

    } catch (error) {
        console.timeEnd('fetch-paises');
        console.error('❌ Error:', error);

    } finally {
        console.log("Hola desde finalyy")
    }
}

main();
