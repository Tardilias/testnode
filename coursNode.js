// npm i request
// Dans la première ligne, nous chargeons le module
// Le module renvoie une fonction qui peut effectuer des requêtes HTTP
const request = require('request');
request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {
    // Notre fonction callback vérifie en premier si nous avons reçu une erreur.
    // BEST PRACTICE :  consiste à vérifier d'abord s'il y a des erreurs dans un 
    // callback afin que l'exécution du callback ne se poursuive pas avec des données manquantes.
    if (error) {
        console.error(`Could not send request to API: ${error.message}`);
        return;
    }
    // Nous vérifions ensuite le code de statut de la réponse.
    // En vérifiant que le code de statut est 200, cela  signifie que la requête était "OK"
    if (response.statusCode != 200) {
        console.error(`Expected status code 200 but received ${response.statusCode}.`);
        return;
    }
    console.log('Processing our list of movies');
    // Enfin, nous analysons le corps de la réponse dans un Tableau et 
    // passons en boucle chaque film pour enregistrer son nom et son année de sortie.
    movies = JSON.parse(body);
    movies.forEach(movie => {
        console.log(`${movie['title']}, ${movie['release_date']}`);
    });
});

// Node.js est une plateforme logicielle avec une architecture orientée événements 
// qui permet d'utiliser le langage de script JavaScript, initialement développé 
// pour une utilisation côté client
// event-driven : architecture orientée événements
// Les architectures event-driven fournissent du code maintenable, gérer des tâches asynchrones 
// et construire des applications fiables.
// SYNCHRONE / ASYNCHRONE
// En informatique, on dit que deux opérations sont synchrones lorsque la seconde attend 
// que la première ait fini son travail pour démarrer, le début de l'opération suivante 
// dépend de la complétude de l'opération précédente.
// Au contraire, deux opérations sont qualifiées d'asynchrones en informatique lorsqu'elles sont indépendantes 
// c'est-à-dire lorsque la deuxième opération n'a pas besoin d'attendre que la première se termine pour démarrer.
// Par défaut, le JavaScript est un langage synchrone, bloquant et qui ne s'exécute que sur un seul thread. 
// JavaScript gère les tâches asynchrones avec l'aide de la boucle événementielle
// boucle événementielle : Construction JavaScript qui permet de terminer une nouvelle tâche tout en attendant une autre
// Le code asynchrone sera écrit de trois façons : les callbacks, les promesses et les mots-clés async/await.
// Lorsque JavaScript rencontre une opération asynchrone, comme l'écriture dans un fichier, 
// elle l'ajoute à une table dans sa mémoire. Cette table stocke l'opération, la condition 
// pour qu'elle soit exécutée et la fonction à appeler lorsqu'elle est terminée.
// Cela peut rapidement poser problème dans un contexte Web :
// imaginons qu'une de nos fonctions ou qu'une boucle prenne beaucoup de temps à s'exécuter. 
// Tant que cette fonction n'a pas terminé son travail, la suite du script ne peut pas s'exécuter (elle est bloquée) 
// et le programme dans son ensemble parait complètement arrêté du point de vue de l'utilisateur.


var tab = [1, 3, 6, 8, 9]

var element = 5
    //Ecrire une fonction qui permet de verifier si element appartient a tab

for (var i = 0; i < array.length; i++) {
    if (el === array[i]) {
        console.log('Element présent');
    }
}


function test() {​​

    var tab = [1, 3, 6, 8, 9]

    var element = 5
        //Ecrire une fonction qui permet de verifier si element appartient a tab

    for (var i = 0; i < array.length; i++) {
        if (el === array[i]) {
            console.log('Element présent');
        }
    }


}​​ // Une fonction de callback est une fonction qui est transmise comme argument 
// à une autre fonction, puis exécutée lorsque l'autre fonction est terminée.
// une fonction de rappel ou « callback » en anglais est une fonction qui va pouvoir être 
// rappelée (« called back ») à un certain moment et / ou si certaines conditions sont réunies. 
// Nous utilisons les callbacks pour nous assurer que le code est exécuté uniquement 
// après la fin d'une opération asynchrone.
// Cette fonction lit l'objet Data, ici un tableau et un element de maniere asynchrone
// En d'autres termes, le programme n'attends pas la fin de la fonction 
// Et lorsque cette fonction termine sa tache, elle appelle la fonction Callback
// Une fonction CallBack prend deux parametres
// un parametre err qui reste vide si la fonction a bien ete executee,
// un parametre result qui contient le resultat si la fonction n'a pas detecter d'erreurs
// sinon il contient le contenu du message d'erreur


var searchElement = function(data, callback) {
    for (var i = 0; i < data.tableau.length; i++)
        if (data.tableau[i] == data.filtre)
            return callback(null, i);
    return callback('Element ' + data.filtre + ' non retrouve dans tableau');
};
var tab = [1, 3, 6, 8, 9];
var element = 5;
var data = { tableau: tab, filtre: element };
searchElement(data, function(err, result) {
    if (err)
        console.error("erreur :" + err)
    else
        console.log(element + " existe a la position " +
            result)
});