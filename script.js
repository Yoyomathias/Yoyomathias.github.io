const boutonValider = document.getElementById("valider");

console.log(boutonValider);

boutonValider.addEventListener("click", function() {
    const couleursChoisies = document.querySelectorAll(
        '#couleurs input:checked'
    );

    console.log(couleursChoisies);
    const bonneCouleur = "vert";

const resultat = document.getElementById("resultat");

if (couleursChoisies.length === 1 &&
    couleursChoisies[0].value === bonneCouleur) {
    resultat.textContent = "Bonne réponse !";
} else {
    resultat.textContent = "Mauvaise réponse !";
}
});