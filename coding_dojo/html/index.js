const btnregister = document.getElementById('btnregister');

function sum() {
    return 4+6;
}
console.log("resultado de suma", sum());

function hola(msg){
    alert(`hola como estas ${msg}`)
}

btnregister.addEventListener('click', () => { 
    // const msgValue = msg.innerHTML;
    const txtResult = document.getElementById('txtResult');
    const msg=document.getElementById('message').value;
    txtResult.innerHTML = msg;
    // innerhtml imprime un HTML de una variable. es pasarla a HTML
    // alert(msg);
    hola('javier'); 
    
})

