try {
    const Mesa = require('./mesas.js'),
        Cuenta = require('./cuentamesa'),
        agregarMesaAlHTML = require('./funcionesHTML'),
        selectorDeMesasActivas = require('./funcionesHTML');

} catch(e){}

const mesasActivas = {
    lista: [],
    
    chequear: function(mesa){
        checkNro(mesa);
        let index = this.lista.findIndex((mesaactiva)=>{
            return mesaactiva.id === mesa.id});
        if (index > -1){
            alert("mesa ocupada");
            throw "mesa ocupada"
        }
    },

    agregar: function(mesa){
        let mesaNueva = new Mesa(mesa);
        this.chequear(mesaNueva);
        this.lista.push(mesaNueva);
        agregarMesaAlHTML(mesaNueva);
    },

    eliminar: function(mesa){
        let index = this.lista.findIndex((mesaactiva)=>{
            return mesaactiva.id == mesa});
            this.lista.splice(index,1);
    },
};

const checkNro = (mesa)=>{
    mesa.id=parseInt(mesa.id);
    if (isNaN(mesa.id)){
        alert("Se debe completar con un número");
        throw "el Id de la mesa debe ser un número"
    }
};

try {
    module.exports = {
        mesasActivas,
        checkNro
    }
} catch (e) {}
