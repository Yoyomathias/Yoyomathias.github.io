const boutonValider = document.getElementById("valider");

console.log(boutonValider);

boutonValider.addEventListener("click", function() {
    const couleursChoisies = document.querySelectorAll(
        '#couleurs input:checked'
    );

    console.log(couleursChoisies);
    const bonneCouleur = "vert";

if (couleursChoisies.length === 1 &&
    couleursChoisies[0].value === bonneCouleur) {
    alert("Bonne réponse !");
} else {
    alert("Mauvaise réponse !");
}
});