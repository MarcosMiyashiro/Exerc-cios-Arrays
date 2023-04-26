function montarBaralho() {
    const naipes = ['Paus', 'Ouros', 'Copas', 'Espadas'];
    const valores = ['Ás','2','3','4','5','6','7','8','9','10','Valete','Rainha','Rei'];
    const baralho = [];

    for (const naipe of naipes) {
    for (let valor of valores) {
        const carta = { valor: valor, naipe: naipe };
        baralho.push(carta);
    }
    }
    return baralho;
}

function embaralhar(baralho) {
    for (let i = baralho.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [baralho[i], baralho[j]] = [baralho[j], baralho[i]];
}
}

    const baralho = montarBaralho();
    embaralhar(baralho);

    const cartaAleatoria = baralho[Math.floor(Math.random() * baralho.length)];
    console.log(cartaAleatoria);