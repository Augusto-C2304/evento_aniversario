AOS.init();

const dataDoAniversario = new Date("Apr 23, 2025 20:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOAniversario = timeStampDoAniversario - timeStampAtual;


    const diaEnMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const MinutosEmMs = 1000 * 60;
    
    const diasAteOAniversario = Math.floor(distanciaAteOAniversario / diaEnMs);
    const horarAteOAniversario = Math.floor((distanciaAteOAniversario % diaEnMs) / horasEmMs);
    const minutosAteOAniversario = Math.floor((distanciaAteOAniversario % horasEmMs) / MinutosEmMs);
    const segundosAteOAniversario = Math.floor((distanciaAteOAniversario % MinutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOAniversario}d ${horarAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`;

    if (distanciaAteOAniversario < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Aniversario expirado';
    }
}, 1000);