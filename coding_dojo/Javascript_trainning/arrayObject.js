var carrosOffroad = [
    {
        ref: 'abc1',
        motor: '2.5',
        puertas: 3,
        color: 'azul',
        traccion: '4x4',
        sunroof: 'si',
        cant: 5
    },
    {
        ref: 'xyz1',
        motor: '4.0',
        puertas: 4,
        color: 'negro',
        traccion: '4x4',
        sunroof: 'si',
        cant: 2
    },
    {
        ref: 'ppp0',
        motor: '3.5',
        puertas: 5,
        color: 'rojo',
        traccion: 'bajos',
        sunroof: 'no',
        cant: 10
    }
];

if((carrosOffroad[1].cant > 1 && carrosOffroad[1].puertas == 4) || carrosOffroad[1].ref == 'xyz1'){

    let purchase = carrosOffroad[1];
    console.log('el carro que elegiste tiene las siguientes especificaciones', purchase);

}

else {
    console.log('lo sentimos no hay carros disponibles con esas especiiicaciones');
}