let persona={
    nombre:'Juan',
    apellido: 'Perez',
    edad: 5,
    nombreCompleto: function(){
        return this.nombre+ ' ' + this.apellido;
    }
    
}

console.log(persona.nombreCompleto());

const persona2 = new Object();

