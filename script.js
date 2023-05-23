document.addEventListener("DOMContentLoaded", function () {
  // Chargement des instructions Javascript exécutées après le chargement du DOM

  // liason entre le fichier data.json et java.js
  fetch('data.json').then(function (response) {
    response.json().then(function (data) {

      function ajouteanal(script) {
        //Page d'accueil
        document.querySelector("#PageAccueil").innerHTML = '<h1><a href="#Accueil" class="titre" id=Accueil> <span class="M">M</span>on <span class="portrait">portrait</span> chinois</a></h1>  <p>Un portrait chinois est un jeu permettant de déceler certains aspects de la personnalité d’un individu ou de connaître ses goûts ou ses préférences personnelles, au travers d’un questionnaire basé sur l’identification à des personnes, des objets ou des éléments divers.</p>  <a href="#Pays"><img class="fleche" src="images/fleche.png" alt="descendre la page" ></a> <a href="#Accueil" id=Accueil><img class="maison" src="images/Accueil.png" alt="Accueil" ></a><div class ="navbar"><a href="#Pays">Pays</a><br><a href="#Fruit">Fruit</a><br><a href="#Objet">Objet</a><br><a href="#Saison">Saison</a><br><a href="#Voiture">Voiture</a><br><a href="#Invention">Invention</a><br><a href="#Animal">Animal</a></div>'

        // Affichage des différentes analogies
        var texte = "";
        script.forEach(function afficheAnalogie(script) {
          texte += '<section class="' + script.classe + '"id="' + script.classe + '"><h2 class="' + script.classe + '"> Si j’étais <span class="analogie">' + script.analogie + '</span>,  je serais <span class="analogie">' + script.valeuranalogies + '</span></h2><div class="fond"><img class="' + script.classe + '" src="' + script.imagefond + '" alt=""></div><img class="' + script.classeimg + '" src="' + script.img + '"alt="' + script.alt + '"><p>' + script.justify + '</p></section>';

        });
        document.querySelector("#listeanalogies").innerHTML = texte;

      }
      
      ajouteanal(data);




      //Formulaire
      var envoyer = document.getElementById('envoyer')
      envoyer.addEventListener('click', function () {
        var lien = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=pauline.gazengel&courriel=" + document.getElementById('mail').value + "&message=Si j'étais " + document.getElementById('analogie').value + ", je serais " + document.getElementById('valeuranalogie').value + " parce que " + document.getElementById('justify').value + ". Image " + document.getElementById('images').value + ".";

        fetch(lien).then(function (response) {
          response.json().then(function (api) {
            alert(api.message);
          })
        })
        data.push({
          "analogie": document.getElementById('analogie').value,
          "valeuranalogies": document.getElementById('valeuranalogie').value,
          "justify": document.getElementById('justify').value,
          "img": document.getElementById('images').value,
          "imagefond": "images/Fonddore.jpg",
          "classe": "Animal"
        })
        ajouteanal(data);
        const formulaire = document.querySelectorAll('form input, form textarea');
        formulaire.forEach(function (entree) {
          entree.value = "";
        })
      })

    });
  })



//Mentions légales
  var piedDePage = document.querySelector("footer")
    piedDePage.style.overflow = "hidden";

    var hauteur = piedDePage.clientHeight;
    piedDePage.style.height = "3em";

    document.querySelector("footer h4").addEventListener("click", function(event){
      if(piedDePage.style.height == "3em"){
        var animationPiedDePage = piedDePage.animate([{"height": hauteur + "px"}], {"duration":500});
        animationPiedDePage.addEventListener("finish",function(){
          piedDePage.style.height = hauteur + "px";
        })
      } 
      else {
        var animationPiedDePage = piedDePage.animate([{"height": "3em"}], {"duration":500});
        animationPiedDePage.addEventListener("finish",function(){
          piedDePage.style.height == "3em"
        })
        setTimeout(function(){
          piedDePage.style.height = "3em"
        }, 490)
      }
    });


});