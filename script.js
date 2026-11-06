const boutonValider = document.getElementById("valider");
let score = 0;
let reponseValidee = false;
const affichageScore = document.getElementById("score");

console.log(boutonValider);

boutonValider.addEventListener("click", function() {
    if (reponseValidee) {
    return;
}
    const couleursChoisies = document.querySelectorAll(
        '#couleurs input:checked'
    );

    console.log(couleursChoisies);
    const bonneCouleur = "vert";

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
});