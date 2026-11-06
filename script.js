const images = [
    {
        chemin: "images/Pomme verte.png",
        couleur: "vert"
    },
    {
        chemin: "images/Goutte d'eau.png",
        couleur: "bleu"
    }
];
let imageActuelle = 0;
let partieTerminee = false;
const affichageImage = document.getElementById("image-jeu");
affichageImage.src = images[imageActuelle].chemin;
const boutonValider = document.getElementById("valider");
let score = 0;
let reponseValidee = false;
const affichageScore = document.getElementById("score");

console.log(boutonValider);
function imageSuivante() {
    imageActuelle = imageActuelle + 1;

    if (imageActuelle < images.length) {
        affichageImage.src = images[imageActuelle].chemin;
        reponseValidee = false;
        document.getElementById("resultat").textContent = "";
        const casesCouleurs = document.querySelectorAll(
    '#couleurs input'
);

casesCouleurs.forEach(function(caseCouleur) {
    caseCouleur.checked = false;
});
    } else {
        partieTerminee = true;
    }
}
boutonValider.addEventListener("click", function() {
    if (partieTerminee) {
    return;
}
    if (reponseValidee) {
    return;
}
    const couleursChoisies = document.querySelectorAll(
        '#couleurs input:checked'
    );

    console.log(couleursChoisies);
    const bonneCouleur = images[imageActuelle].couleur;

const resultat = document.getElementById("resultat");

if (couleursChoisies.length === 1 &&
    couleursChoisies[0].value === bonneCouleur) {
    resultat.textContent = "Bonne réponse !";

    score = score + 1;
    affichageScore.textContent = "Score : " + score;
    reponseValidee = true;

} else {
    resultat.textContent = "Mauvaise réponse !";
    reponseValidee = true;
}
imageSuivante();
});