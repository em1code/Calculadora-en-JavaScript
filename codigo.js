function sumar(){
    const forma  = document.getElementById('forma');
    let oprandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operación no incluye numeros';
    }
    document.getElementById('resultado').innerHTML = `resultado: ${resultado}`;
    console.log(`resultado: ${resultado}`);
}