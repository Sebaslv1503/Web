class Conductor {
    #licencia;

    constructor(nombre, licencia) {
        this.nombre = nombre;
        this.#licencia = licencia;
        this.rutas = []; 
    }

    
    getLicencia() {
        return this.#licencia;
    }

    registrarRuta(ruta) {
        this.rutas.push(ruta);
    }

    obtenerHistorialRutas() {
        return this.rutas;
    }
}

// Clase ConductorVIP (Herencia)
class ConductorVIP extends Conductor {
    constructor(nombre, licencia) {
        super(nombre, licencia);
        this.vehiculoPreferido = null; // Preferencia de vehículo
    }

    asignarVehiculoPreferido(vehiculo) {
        this.vehiculoPreferido = vehiculo;
    }

    obtenerVehiculoPreferido() {
        return this.vehiculoPreferido;
    }
}


// Clase Vehiculo
class Vehiculo {
    constructor(modelo, placa) {
        this.modelo = modelo;
        this.placa = placa;
        this.asignadoA = null; // Conductor asignado
    }

    asignarConductor(conductor) {
        this.asignadoA = conductor;
    }

    obtenerConductor() {
        return this.asignadoA;
    }
}

// Clase Ruta
class Ruta {
    constructor(origen, destino, duracion) {
        this.origen = origen;
        this.destino = destino;
        this.duracion = duracion; // Duración en minutos
    }
}

// Ejemplo de uso
const conductor1 = new Conductor("Juan Pérez", "12345ABC");
const vehiculo1 = new Vehiculo("Toyota Corolla", "XYZ-987");
const ruta1 = new Ruta("Centro", "Aeropuerto", 30);

conductor1.registrarRuta(ruta1);
vehiculo1.asignarConductor(conductor1);

console.log("Historial de rutas de Juan:", conductor1.obtenerHistorialRutas());
console.log("Conductor asignado al vehículo:", vehiculo1.obtenerConductor().nombre);

// Uso de ConductorVIP
const conductorVIP = new ConductorVIP("María López", "67890DEF");
conductorVIP.asignarVehiculoPreferido(vehiculo1);

console.log("Vehículo preferido de María:", conductorVIP.obtenerVehiculoPreferido().modelo);
