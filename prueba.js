
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

    getprecio() {
        return this.precio;
    }

    getcantidad() {
        return this.cantidad;
    }
    getcategoria() {
        return this.categoria;
    }
    setProducto(producto) {
        this.producto = producto;
    }
    setprecio(precio) {
        this.precio = precio;
    }
    setcantidad(cantidad) {
        this.cantidad = cantidad;
    }
    setcategoria(categoria) {
        this.categoria = categoria;
    }

}

class Inventario {

    constructor(Producto=[]) {
        this.inventario = Producto ;
    }
    
    aplicarDescuento(categoria, porcentaje) {
        for (let i in this.inventario) {
            if (this.inventario[i].categoria === categoria) {
                this.inventario[i].precio = this.inventario[i].precio * (1 - porcentaje / 100);
            }
        }
    }

    

    listarProductosPorPrecio() {
        inventario.sort((a, b) => a.precio - b.precio);
        console.log(inventario);
    }
    filtrarProductos(categoria) {
        for (let i = 0; i < inventario.length; i++) {
            if (inventario[i].categoria === categoria) {
                console.log(inventario[i]);
            }
        }
    }

    

}

class venta  {

    constructor(){
        this.ingresos = 0;
        this.productoMasVendido = "";
    }
    
    realizarVenta(nombreProducto, cantidad){
        let inventario = new Inventario();
        for (let i = 0; i < inventario.length; i++) {
            if(inventario[i].cantidad >= cantidad && inventario[i].nombreProducto == nombreProducto){
                inventario[i].cantidad = inventario[i].cantidad - cantidad;
                console.log("Venta realizada con exito");
                this.ingresos = this.ingresos + inventario[i].precio * cantidad;
                
            }
            else{
                console.log("Stock insuficiente");
            }
        }
    }
}

let inventarioTienda = new Inventario({
    producto1: new Producto("Laptop Gamer", 1500, 50, "Electronico"),
    producto2: new Producto("Estuche celular", 5, 22, "Electronico"),
    producto3: new Producto("Iphone 15", 1.0, 20, "Electronico"),
    producto4: new Producto("TV LG", 1.5, 40, "Electronico"),
    producto5: new Producto("Manzana", 10, 30, "Fruta"),
    producto6: new Producto("Pera", 15, 25, "Fruta"),
    producto7: new Producto("Camisa", 20, 15, "Ropa"),
    producto8: new Producto("Pantalon", 30, 10, "Ropa"),
});

console.log(inventarioTienda);
inventarioTienda.aplicarDescuento("Electronico", 10);
inventarioTienda.listarProductosPorPrecio();
inventarioTienda.filtrarProductos("Ropa");



let ventaTienda = new venta();


