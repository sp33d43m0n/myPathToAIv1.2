var specLaptop = { 
    marca: 'Hp',
    keyboard: 'español',
    graphicCard: ['nvidia','gforce','quanpeng'],
    hardware:{
        motherBoard: 'rfx330',
        monitor:'15.5',
        memoria: 128,
    } 
}

console.log(specLaptop.marca, specLaptop.keyboard, specLaptop.graphicCard);
console.log(specLaptop["graphicCard"]);
specLaptop.graphicCard=['patito','pollito'];
console.log(specLaptop.marca, specLaptop.keyboard, specLaptop.graphicCard);
specLaptop.hardware.monitor=16.5;
console.log(specLaptop.marca, specLaptop.keyboard, specLaptop.graphicCard);
console.log(specLaptop.hardware.monitor);