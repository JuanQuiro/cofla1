
//! TODOS DAN PLATA PARA VER QUE HELADO COMPRAN

let amigos: number;
amigos = parseInt(window.prompt("Cuantos amigos?"));

document.write(`<br><br> Los amigos son en total ${amigos}`)
var pagoTotal = 0;
for (let i = 0; i < amigos; i++) { 
    let pago = parseFloat(window.prompt(`Cuanto pago el amigo ${i}`));
    pagoTotal += pago;
    document.write(`<br><br> El amigo ${i}, pago = ${pago}`)
}

document.write(`<br><br> El dinero que tienen es = ${pagoTotal}<br><br>`);

//! Preguntar que tipo de helado van a comprar

const definirCompra = (pagototal : number) => {
    document.write(`<br><br>El dinero es ${pagoTotal} <br><br>`);
    if (pagoTotal >= 0.6 && pagoTotal < 1) return (`Compra ${pagoTotal}: helado de agua`);
    if (pagoTotal >= 1 && pagoTotal < 1.6) return (`Compra ${pagoTotal}: helado de crema`);
    if (pagoTotal >= 1.6 && pagoTotal < 1.7) return (`Compra ${pagoTotal}: helado de heladix`);
    if (pagoTotal >= 1.7 && pagoTotal < 1.8) return (`Compra ${pagoTotal}: helado de heladovich`);
    if (pagoTotal >= 1.8 && pagoTotal < 2.9) return (`Compra ${pagoTotal}: helado de helardo`);
    if (pagoTotal >= 2.9) return (`${pagoTotal}: helado de confites o pote`);
    else return(`${pagoTotal}: Eres pobre :D`)
}

document.write(definirCompra(pagoTotal));
