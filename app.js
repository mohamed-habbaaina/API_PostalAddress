
document.querySelector('#search').addEventListener('input', async function (params) {

    if(this.value.length == 5){

        //  URL de API 
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=code,nom,population,surface,departement,region,centre,codesPostaux`;

        //  Le Fetch pour récupérer la data
        await fetch(url).then(response => response.json())
        .then(data => {
            let affich = '<ul>';    // Affichage responses
            let affich2 = '<ul>';   // Affichage responses
            for(ville of data){
                affich += `<li><strong>${ville.nom}</strong> - ${ville.population} Habitants</li>`;
                affich2 += `Departement: <li>${ville.departement.code} ${ville.departement.nom}, Region: ${ville.region.nom}, Surface: ${ville.surface}</li>`;

            }
            affich += '</ul>';
            affich2 += '</ul>';

            document.querySelector('#result').innerHTML = affich;
            document.querySelector('#result2').innerHTML = affich2;

        }).catch((err)=> console.console.log('Error: ' + err))



    }
    else{   //  Géré l'affichage si pas match
        document.querySelector('#result').innerHTML = '';
        document.querySelector('#result2').innerHTML = '';
    }
})