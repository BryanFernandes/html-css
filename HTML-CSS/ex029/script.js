const burguer = document.getElementById('burguer');
const itens = document.getElementById('itens');



burguer.addEventListener('click', () => {
    itens.classList.toggle('ativo');
});

function clickMenu() {
    const itens = document.getElementById('itens');
    itens.classList.toggle('ativo');
}


window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        itens.classList.remove('ativo');
    }
});
