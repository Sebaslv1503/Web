// Sistema de ventas en JS

class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio, categoria, stock) {
        if (precio < 0) {
            throw new Error("El precio no puede ser negativo");
        }
        if (stock < 0) {
            throw new Error("El stock no puede ser negativo");
        }
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
        this._categoria = categoria;
        this._stock = stock;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        if (precio < 0) {
            throw new Error("El precio no puede ser negativo");
        }
        this._precio = precio;
    }

    get categoria() {
        return this._categoria;
    }

    set categoria(categoria) {
        this._categoria = categoria;
    }

    get stock() {
        return this._stock;
    }

    set stock(stock) {
        if (stock < 0) {
            throw new Error("El stock no puede ser negativo");
        }
        this._stock = stock;
    }

    toString() {
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio.toFixed(2)}, categoría: ${this._categoria}, stock: ${this._stock}`;
    }
}

class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            if (producto.stock > 0) {
                this._productos.push(producto);
                producto.stock -= 1; 
            } else {
                console.log(`El producto "${producto.nombre}" no tiene stock disponible.`);
            }
        } else {
            console.log("No se puede agregar más productos a la Orden");
        }
    }

    calcularTotal() {
        let totalVenta = 0;
        for (let i = 0; i < this._productos.length; i++) {
            const producto = this._productos[i];
            if (producto.categoria === "Ropa Usada") {
                totalVenta += producto.precio * 0.9;
            } else {
                totalVenta += producto.precio;
            }
        }
        return totalVenta;
    }

    calcularImpuestos() {
        const total = this.calcularTotal();
        return total * 0.16;
    }

    listarProductosPorPrecioDescendente() {
        const productosOrdenados = this._productos.slice();
        for (let i = 0; i < productosOrdenados.length - 1; i++) {
            for (let j = 0; j < productosOrdenados.length - i - 1; j++) {
                if (productosOrdenados[j].precio < productosOrdenados[j + 1].precio) {
                    const temp = productosOrdenados[j];
                    productosOrdenados[j] = productosOrdenados[j + 1];
                    productosOrdenados[j + 1] = temp;
                }
            }
        }
        return productosOrdenados;
    }

    mostrarOrden() {
        let productosOrden = '';
        for (let i = 0; i < this._productos.length; i++) {
            productosOrden += `\n{${this._productos[i].toString()}}`;
        }
        console.log(`Orden: ${this._idOrden}, Total: $${this.calcularTotal().toFixed(2)}, Impuestos: $${this.calcularImpuestos().toFixed(2)}, Productos: ${productosOrden}`);
    }
}

try {
    let producto1 = new Producto('Camisa', 150, 'Ropa', 4);
    let producto2 = new Producto('pantalon', 300, 'Ropa Usada', 2);
    let producto3 = new Producto('Zapatos', 100, 'Calzado', 3);

    console.log(producto1.toString());
    console.log(producto2.toString());
    console.log(producto3.toString());

    let orden1 = new Orden();
    orden1.agregarProducto(producto1);
    
    orden1.agregarProducto(producto3);
    orden1.agregarProducto(producto2); 
   
    orden1.mostrarOrden();

    console.log("Productos en orden descendente por precio:");
    const productosOrdenados = orden1.listarProductosPorPrecioDescendente();
    for (let i = 0; i < productosOrdenados.length; i++) {
        console.log(productosOrdenados[i].toString());
    }

    console.log("Estado final del stock de productos:");
    console.log(producto1.toString());
    console.log(producto2.toString());
    console.log(producto3.toString());
} catch (error) {
    console.error(error.message);
}
