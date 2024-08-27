function maismenos() {
    // Obtém o elemento de entrada com o ID 'display'
    const display = document.getElementById('display');
    // Pega o valor atual desse elemento (o que o usuário digitou)
    let valor = display.value;

    // Expressão regular para encontrar o último número na string
    const ultimoNumeroMatch = valor.match(/-?\d+(\.\d+)?$/);

    // Verifica se algum número foi encontrado
    if (ultimoNumeroMatch) {
        // Pega o número encontrado
        const ultimoNumero = ultimoNumeroMatch[0];
        // Troca o sinal do último número
        const numeroAlterado = ultimoNumero.startsWith('-')
            ? ultimoNumero.substring(1) // Remove o sinal negativo
            : '-' + ultimoNumero;       // Adiciona o sinal negativo

        // Substitui o último número na string original com o número alterado
        valor = valor.slice(0, valor.lastIndexOf(ultimoNumero)) + numeroAlterado;
        // Atualiza o valor do campo de entrada com a nova string
        display.value = valor;
    }
}

function raiz() {
    const display = document.getElementById('display');
    
    let valor = display.value;

    const ultimoNumeroMatch = valor.match(/-?\d+(\.\d+)?$/);

    if (ultimoNumeroMatch) {
        const ultimoNumero = ultimoNumeroMatch[0];
        let raizQuadrada = Math.sqrt(parseFloat(ultimoNumero)); // Realiza a raiz quadrada do número
        
        if (!isNaN(raizQuadrada)) {
            // Atualiza o valor no display substituindo o último número pela raiz quadrada
            valor = valor.slice(0, valor.lastIndexOf(ultimoNumero)) + raizQuadrada;
            display.value = valor;
        }
    }
}

function memoryplus() {
    const display = document.getElementById('display');

    let valorGuardado = 0;

    valorGuardado = valorGuardado + Number(display.value);

    document.getElementById('display').value = '';

    document.getElementById('display').value = valorGuardado;

    console.log('valorGuardado')
}

