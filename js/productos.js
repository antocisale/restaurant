class Producto {
    constructor(producto, precio,id) {
        this.id = id;
        this.producto = producto;
        this.precio = precio;
    }
}

try {
    module.exports = Producto;
} catch (e) {}