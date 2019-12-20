try{
const Producto = require('./productos'),
    agregarProductoAlHTML = require('./funcionesHTML'),
    agregarProductoParaCuentaMesa = require('./funcionesHTML');
}catch(e){};

const listaProductos = {
    lista: [],

    agregar: function (producto, precio, id) {
        if (id == undefined) {
            id = this.lista.length + 1;
        }
        let productoNuevo = new Producto(producto, precio, id);
        this.lista.push(productoNuevo);
        agregarProductoAlHTML(productoNuevo);
        agregarProductoParaCuentaMesa(productoNuevo);
    },

    eliminar: function (producto) {
        let index = this.lista.findIndex((productosDeLista) => {
            return productosDeLista.id === producto
        });
        this.lista.splice(index, 1);
    },
};

try {
    module.exports = listaProductos;
} catch (e) {};