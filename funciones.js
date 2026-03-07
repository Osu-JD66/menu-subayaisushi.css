const magazine = document.querySelector('.magazine');
const pages = document.querySelectorAll('.page');

const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

let currentPage = 0;

function updatePages() {

    pages.forEach((page, index) => {
        page.classList.remove('active', 'previous', 'next');

        if (index < currentPage) {
            page.classList.add('previous');
        } 
        else if (index === currentPage) {
            page.classList.add('active');
        } 
        else {
            page.classList.add('next');
        }
    });

    // CONTROL DE BOTONES
    if (currentPage === 0) {
        btnAnterior.style.display = "none";
        btnSiguiente.style.display = "inline-block";
    } 
    else if (currentPage === pages.length - 1) {
        btnAnterior.style.display = "inline-block";
        btnSiguiente.style.display = "none";
    } 
    else {
        btnAnterior.style.display = "inline-block";
        btnSiguiente.style.display = "inline-block";
    }
}

// BOTÓN SIGUIENTE
btnSiguiente.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePages();
    }
});

// BOTÓN ANTERIOR
btnAnterior.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        updatePages();
    }
});

// Mostrar primera página
updatePages();
