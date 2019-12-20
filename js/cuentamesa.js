try{
    const listaProductos = require('./listaproductos'),
        ProductoMesa = require('./productoMesa'),
        mesasActivas = require('./mesasactivas.js/'),
        actualizarCuentaHTML = require('./funcionesHTML'),
        elegirMesa = require('./funcionesHTML');
}catch(e){};


class Cuenta{
    constructor(){
        this.lista = [];
        this.precio = 0;
    }
    agregar(idProducto, cantidad) {
        for(let producto of this.lista) {
            if(producto.producto.id == idProducto){
                producto.cantidad += cantidad;
                return true;
            }
        };
        let productoEncontrado = listaProductos.lista.find(producto =>{
            return producto.id == idProducto;
        });
        const productoEnMesa = new ProductoMesa(productoEncontrado, cantidad);
        this.lista.push(productoEnMesa);
        this.obtenerCuentaTotal();
    }
    obtenerCuentaTotal(){
        this.precio =  this.lista.reduce((acumulador, productoEnMesa) => {
            return acumulador += productoEnMesa.cantidad * productoEnMesa.producto.precio;
        }, 0);
        return actualizarCuentaHTML(this.precio);
    }

};

try {
    module.exports = Cuenta;
} catch (e) {}