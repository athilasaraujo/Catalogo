/* Função para exibir detalhes do produto na janela modal */
function showDetails(brand) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalPrice = document.getElementById("modal-price");

    /* Define os detalhes do produto com base na marca */
    if (brand === 'nike') {
        modalTitle.textContent = "Tênis Nike";
        modalImage.src = "nike_tenis.jpg";
        modalPrice.textContent = "R$ 299,99";
    } else if (brand === 'adidas') {
        modalTitle.textContent = "Tênis Adidas";
        modalImage.src = "adidas_tenis.jpg";
        modalPrice.textContent = "R$ 249,99";
    }

    /* Exibe a janela modal */
    modal.style.display = "block";
}

/* Função para fechar a janela modal */
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

/* Fechar a janela modal ao clicar fora dela */
window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};