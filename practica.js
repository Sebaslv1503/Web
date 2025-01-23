
class Inventario {

    constructor() {
        this.inventario = [];
    }
    agregarProducto(producto) {
        this.inventario.push(producto);
    }
    listarProductosCategoria(categoria){
        console.log(categoria);
        let cont=0;
        for(let i=0 ; this.inventario.length > i ; i++){
            if(this.inventario[i].getCategoria==categoria){
                this.inventario.productoToString();
                cont++;
            }

        }
        console.log("Productos encontrados con la categoria "+categoria + ": "+ contador);
    }
}

class Producto{
    constructor(nombre, precio, cantidad, categoria){
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
        this.categoria=categoria;
    }
    productoToString(){
        console.log("Nombre: "+this.nombre);
        console.log("Precio: "+this.precio);
        console.log("Stock: "+this.cantidad);
        console.log("Categoria: "+this.categoria);
    }
    getCategoria(){
        return this.categoria;
    }

}

class Venta{
    constructor(inventario){
        this.inventario=inventario;
        this.ventas=[];
        this.ganancias=0;
    }
    
    realizarVenta(nombreProducto, cantidad){
        for(let i=0; this.inventario.length>i; i++){
            if(this.inventario[i].nombre==nombreProducto && this.inventario[i].cantidad>0){
                this.inventario[i].cantidad=this.inventario[i].cantidad-cantidad;
                console.log("Venta Realizada exitosamente.");
                this.ganancias+=cantidad*this.inventario[i].precio;
            }else{
                console.log("Error Producto no encontrado o Stock insuficiente.");
            }
        }
    }
    aplicarDescuento(categoria, porcentaje){
        for(let i=0; this.inventario.length>i; i++){
            if(this.inventario[i].categoria==categoria){
                this.inventario[i].precio=this.inventario[i].precio*porcentaje/100;
            }
        }
    }
}

let producto1 = new Producto("Laptop Gamer", 1500, 50, "Electrónico");
let producto2 = new Producto("Estuche celular", 5, 22, "Electrónico");
let producto3 = new Producto("Iphone 15", 1000, 20, "Electrónico");
let producto4 = new Producto("TV LG", 1500, 40, "Electrónico");
let producto5 = new Producto("Manzana", 10, 30, "Fruta");
let producto6 = new Producto("Pera", 15, 25, "Fruta");
let producto7 = new Producto("Camisa", 20, 15, "Ropa");


let inventario = new Inventario();

inventario.agregarProducto(producto1);
inventario.agregarProducto(producto2);
inventario.agregarProducto(producto3);
inventario.agregarProducto(producto4);
inventario.agregarProducto(producto5);

let venta = new Venta(inventario);

venta.realizarVenta("Pera", 5);