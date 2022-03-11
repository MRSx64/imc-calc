const divFirst = document.querySelector('.first-step');
const divSecond = document.querySelector('.second-step');
const divFinal = document.querySelector('.final-step');

function go(currentStep, nextStep) {
    let dNone, dBlock;
    if (currentStep == 1) {
        dNone = divFirst;
        
    }
    else if(currentStep == 2){

        dNone = divSecond;
    }
    else{
        dNone = divFinal;
    }
    dNone.style.display = 'none';

    if (nextStep == 1) {
        dBlock = divFirst;
        
    }
    else if(nextStep == 2){

        dBlock = divSecond;
    }
    else{
        dBlock = divFinal;
    }
    dBlock.style.display = 'block';
}

function validacao() 
{
    const peso = document.getElementById('campoPeso');
    const altura = document.getElementById('campoAltura');
    peso.style.backgroundColor = 'white';   
    altura.style.backgroundColor = 'white'; 

    if (!campoPeso.value || !campoAltura.value) 
    {
        if(!campoPeso.value && !campoAltura.value)
        {
        peso.style.backgroundColor = 'tomato';   
        altura.style.backgroundColor = 'tomato';   

        }
        else if(!campoPeso.value)
        {
        peso.style.backgroundColor = 'tomato';   
      
        }
        else
        {
        altura.style.backgroundColor = 'tomato';
        }
    }
    else
    {
    let imc = peso.value/(altura.value**2);
    const resultado = document.getElementById('res')
    const resimc = document.getElementById('valor')
    
        if (imc < 18.5) 
        {
            console.log('Magreza | Obesidade: Grau 0');
            resimc.innerHTML = `IMC de ${imc.toFixed(0)}`;
            resultado.innerHTML = 'Magreza | Obesidade: Grau 0';
        }
        else if (imc >= 18.5 && imc < 24)
        {
            console.log('Normal | Obesidade: Grau 0');
            resimc.innerHTML = `IMC de ${imc.toFixed(0)}`;
            resultado.innerHTML = 'Normal | Obesidade: Grau 0'
        }
        else if (imc >= 25 && imc < 29)
        {
            console.log('Sobrepeso| Obesidade: Grau 0');
            resimc.innerHTML = `IMC de ${imc.toFixed(0)}`;
            resultado.innerHTML = 'Sobrepeso| Obesidade: Grau 0';
        }
        else if (imc >= 30 && imc < 34)
        {
            console.log('Obesidade | Obesidade:  Grau I');
            resimc.innerHTML = `IMC de ${imc.toFixed(0)}`;
            resultado.innerHTML = 'Obesidade | Obesidade:  Grau I';
        }
        else if (imc >= 35 && imc < 39)
        {
            console.log('Obesidade | Obesidade:  Grau II');
            resimc.innerHTML = `IMC de ${imc.toFixed(0)}`;
            resultado.innerHTML = 'Obesidade | Obesidade:  Grau II';
        }
        else
        {
            console.log('Obesidade | Obesidade grave:  Grau III');
            resimc.innerHTML = `IMC de ${imc.toFixed(0)}`;
            resultado.innerHTML = 'Obesidade | Obesidade grave:  Grau III';
        }
        go(2,3);
    }
}
