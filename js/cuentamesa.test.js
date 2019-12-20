const Cuenta = require('./cuentamesa'),
    listaproductos = require('./listaproductos'),
    Producto = require('./productos'),
    mesasActivas = require('./mesasactivas'),
    Mesa = require('./mesas.js');

test('agrego un producto a la mesa',()=>{
    listaproductos.agregar("cafe",20);
    listaproductos.agregar("helado",200);
    listaproductos.agregar("almuerzo",300);
    mesasActivas.agregar(1);
    mesasActivas.lista[0].cuenta.agregar(1,2);
    mesasActivas.lista[0].cuenta.agregar(3,1);
    expect(mesasActivas.lista[0].cuenta.obtenerCuentaTotal()).toBe(340)

});