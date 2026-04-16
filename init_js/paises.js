








async function fetchCountries() {
    // Iniciar temporizador con una etiqueta
    console.time('fetch-paises');
    
    try {
        const url = 'https://restcountries.com/v3.1/all?fields=name,flags,population';
        const response = await fetch(url);        // GET
        
        console.timeLog('fetch-paises', 'Respuesta recibida, convirtiendo a JSON...');
        
        // 
        // if (!response.ok) return [];         // 
        const data = await response.json();

        /* 
        data = [
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
            }, 
            ...
        ]
        */
        // Mostrar tiempo total
        console.timeEnd('fetch-paises');
        
        console.log(`✅ Países cargados: ${data.length}`); // 250
        // console.log(data.slice(0, 3)); // Muestra los primeros 3

        return data;
        

    } catch (error) {
        console.timeEnd('fetch-paises');
        console.error('❌ Error:', error);
    }
}

function filterCountries(countries, population) {
    return countries.filter(c => {
        return c.population > population
    });
};


document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById('form-paises');
    const container = document.querySelector('.cont-paises');

    form.addEventListener('submit', async (e) => {
        // e.stopPropagation();        
        e.preventDefault();     // cancela el evento de submit

        const formData = new FormData(form);
        const datos = Object.fromEntries(formData.entries());


        console.log(datos);
        
        const population = parseInt(datos.population);
        console.log(population);

        const countries = await fetchCountries();        // countries vale como data
        const countriesFiltered = filterCountries(countries, population);

        const html = countriesFiltered.map((c, index) => {
            return /*html*/`
                <div class="d-flex gap-3">
                    <img class="flag-img" src="${c.flags.png}" alt="">
                    <p class="bolder">Id: ${index} | Pais: ${c.name.common}</p>
                </div>
            `
        }).join('');  /// 
        /* 
         lista = [
             <p> Id: ${index} | Pais: ${c.name.common}</p>
             <p> Id: ${index} | Pais: ${c.name.common}</p>,
             <p> Id: ${index} | Pais: ${c.name.common}</p>
         ]
        */


        container.innerHTML = `${html}`;
    });
});


/* 
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

        */