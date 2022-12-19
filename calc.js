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
    const img = document.getElementById('imagem')
    
        if (imc < 18.5) 
        {
            console.log('Magreza | Abaixo do peso');
            resimc.innerHTML = `IMC de ${imc.toFixed(0)}`;
            resultado.innerHTML = 'Só osso | Abaixo do peso';
            img.src = 'susto.jpg'
        }
        else if (imc >= 18.5 && imc < 25)
        {
            console.log('Normal');
            resimc.innerHTML = `IMC de ${imc.toFixed(0)}`;
            resultado.innerHTML = 'Normal';
            img.src = 'Marcinha.jpg'
        }
        else if (imc >= 25 && imc < 30)
        {
            console.log('Sobrepeso| Sobrepeso');
            resimc.innerHTML = `IMC de ${imc.toFixed(0)}`;
            resultado.innerHTML = 'Disquinho(a) | Sobrepeso';
            img.src = 'veio.jpg'
        }
        else if (imc >= 30 && imc < 35)
        {
            console.log('Obesidade | Obesidade:  Grau I');
            resimc.innerHTML = `IMC de ${imc.toFixed(0)}`;
            resultado.innerHTML = 'Bolota | Obesidade:  Grau I';
            img.src = 'Mari2.jpg'
        }
        else if (imc >= 35 && imc < 40)
        {
            console.log('Obesidade | Obesidade:  Grau II');
            resimc.innerHTML = `IMC de ${imc.toFixed(0)}`;
            resultado.innerHTML = 'Redondo(a) | Obesidade:  Grau II';
            img.src = 'Mari.jpg'
        }
        else 
        {  
            console.log('Obesidade | Obesidade grave:  Grau III');
            resimc.innerHTML = `IMC de ${imc.toFixed(0)}`;
            resultado.innerHTML = 'Dieta urgente! | Obesidade Mórbida:  Grau III';
            img.src = 'avos.jpg'
        }
        go(2,3);
    }
}
