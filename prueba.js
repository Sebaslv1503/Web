class Producto {
    constructor(producto, precio, cantidad, categoria) {
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }

    getProducto() {
        return this.producto;
    }

    getPrecio() {
        return this.precio;
    }

    getCantidad() {
        return this.cantidad;
    }

    getCategoria() {
        return this.categoria;
    }

    setProducto(producto) {
        this.producto = producto;
    }

    setPrecio(precio) {
        this.precio = precio;
    }

    setCantidad(cantidad) {
        this.cantidad = cantidad;
    }

    setCategoria(categoria) {
        this.categoria = categoria;
    }
}

class Inventario {
    constructor() {
        this.inventario = [];
    }

    agregarProducto(producto) {
        this.inventario.push(producto);
    }

    aplicarDescuento(categoria, porcentaje) {
        for (let i = 0; i < this.inventario.length; i++) {
            if (this.inventario[i].getCategoria() === categoria) {
                let precioActual = this.inventario[i].getPrecio();
                this.inventario[i].setPrecio(precioActual * (1 - porcentaje / 100));
            }
        }
    }

    listarProductosPorPrecio() {
        for (let i = 0; i < this.inventario.length; i++) {
            for (let j = i + 1; j < this.inventario.length; j++) {
                if (this.inventario[i].getPrecio() > this.inventario[j].getPrecio()) {
                    let temp = this.inventario[i];
                    this.inventario[i] = this.inventario[j];
                    this.inventario[j] = temp;
                }
            }
        }

        for (let i = 0; i < this.inventario.length; i++) {
            console.log(this.inventario[i]);
        }
    }

    filtrarProductos(categoria) {
        for (let i = 0; i < this.inventario.length; i++) {
            if (this.inventario[i].getCategoria() === categoria) {
                console.log(this.inventario[i]);
            }
        }
    }

    buscarProductoPorNombre(nombreProducto) {
        for (let i = 0; i < this.inventario.length; i++) {
            if (this.inventario[i].getProducto() === nombreProducto) {
                return this.inventario[i];
            }
        }
        return null;
    }
}

class Venta {
    constructor(inventario) {
        this.inventario = inventario;
        this.ingresos = 0;
        this.ventasRealizadas = [];
        this.productoMasVendido = { nombre: "", cantidad: 0 };
    }

    realizarVenta(nombreProducto, cantidad) {
        let producto = this.inventario.buscarProductoPorNombre(nombreProducto);

        if (!producto) {
            console.log("Producto no encontrado en el inventario.");
            return;
        }

        if (producto.getCantidad() >= cantidad) {
            producto.setCantidad(producto.getCantidad() - cantidad);
            this.ingresos += producto.getPrecio() * cantidad;

            this.ventasRealizadas.push({
                producto: nombreProducto,
                cantidad: cantidad,
                fecha: new Date(),
            });

            if (cantidad > this.productoMasVendido.cantidad) {
                this.productoMasVendido.nombre = nombreProducto;
                this.productoMasVendido.cantidad = cantidad;
            }

            console.log("Venta realizada con éxito.");
        } else {
            console.log("Stock insuficiente para realizar la venta.");
        }
    }
}

let inventarioTienda = new Inventario();

let producto1 = new Producto("Laptop Gamer", 1500, 50, "Electrónico");
let producto2 = new Producto("Estuche celular", 5, 22, "Electrónico");
let producto3 = new Producto("Iphone 15", 1000, 20, "Electrónico");
let producto4 = new Producto("TV LG", 1500, 40, "Electrónico");
let producto5 = new Producto("Manzana", 10, 30, "Fruta");
let producto6 = new Producto("Pera", 15, 25, "Fruta");
let producto7 = new Producto("Camisa", 20, 15, "Ropa");

inventarioTienda.agregarProducto(producto1);
inventarioTienda.agregarProducto(producto2);
inventarioTienda.agregarProducto(producto3);
inventarioTienda.agregarProducto(producto4);
inventarioTienda.agregarProducto(producto5);
inventarioTienda.agregarProducto(producto6);
inventarioTienda.agregarProducto(producto7);

inventarioTienda.aplicarDescuento("Electrónico", 10);

inventarioTienda.listarProductosPorPrecio();

inventarioTienda.filtrarProductos("Ropa");

let ventaTienda = new Venta(inventarioTienda);

ventaTienda.realizarVenta("Laptop Gamer", 1);
ventaTienda.realizarVenta("Camisa", 2);
ventaTienda.realizarVenta("Pantalon", 1);

console.log("Ingresos totales:", ventaTienda.ingresos);
console.log("Producto más vendido:", ventaTienda.productoMasVendido.nombre);
