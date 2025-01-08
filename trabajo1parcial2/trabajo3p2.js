//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                    //SISTEMA DE INVENTARIO TIENDA TECNOLOGICA
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const inventario = {
    producto1: { nombre: "Laptop Gamer", precio: 1500, cantidad: 50 }, producto2: { nombre: "Estuche celular", precio: 5, cantidad: 22 }, 
    producto3: { nombre: "Iphone 15 ", precio: 1.0, cantidad: 20 }, producto4: { nombre: "TV LG", precio: 1.5, cantidad: 40 },
};

Object.seal(inventario);

function venderProducto(nombreBuscado, cantidad) {
    for (let key in inventario) {
        if (inventario[key].nombre === nombreBuscado) {
            if (inventario[key].cantidad >= cantidad) {
                inventario[key].cantidad = inventario[key].cantidad-cantidad;
                console.log('Venta exitosa:'+ cantidad + nombreBuscado +'(s) vendidas.');
                return;
            } else {
                console.log('Stock insuficiente de: ' + nombreBuscado);
                return;
            }
        }
    }
    console.log('Error: El producto ' + nombreBuscado + ' no existe en el inventario.');
}

function aplicarDescuento(porcentaje) {
    for (let key in inventario) {
        let descuento = inventario[key].precio * (porcentaje / 100);
        inventario[key].precio = Math.max(0, inventario[key].precio - descuento);
    }
    console.log('Se ha aplicado un descuento del' + porcentaje);
}

venderProducto("Laptop Gamer", 10); 
venderProducto("Estuche celular", 25); 
venderProducto("Mochila", 5); 

aplicarDescuento(10); 


console.log("Inventario final:", inventario);
