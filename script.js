// Scrollen zu den Features
function scrollToFeatures() {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
}

// Modal für Feature-Karten anzeigen
function showModal(feature) {
    const modal = document.getElementById("featureModal");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");

    title.textContent = feature;
    description.textContent = `${feature} `;

    modal.style.display = "block";
}

// Modal schließen
function closeModal() {
    document.getElementById("featureModal").style.display = "none";
}

// Modal schließen, wenn außerhalb des Fensters geklickt wird
window.onclick = function(event) {
    const modal = document.getElementById("featureModal");
    if (event.target === modal) {
        closeModal();
    }
};
