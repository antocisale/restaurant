const listaproductos = require('./listaproductos'),
    Producto = require('./productos');


beforeEach(()=>{
    listaproductos.lista.splice(0);
});

test('agrego un producto a la lista',()=>{
    listaproductos.agregar("cafe",20,1);
    expect(listaproductos.lista.length).toBe(1);
    expect(listaproductos.lista[0]).toEqual({
        "id":1,
        "producto":"cafe",
        "precio":20
    })
});

test('agrego producto a la lista sin ID',()=>{
    listaproductos.agregar("cafe",40);
    expect(listaproductos.lista[0]).toEqual({
        "id":1,
        "producto":"cafe",
        "precio":40
    });
});

test('agrego 2 productos a la lista sin ID',()=>{
    listaproductos.agregar("helado",100);
    listaproductos.agregar("cafe",50);
    expect(listaproductos.lista.length).toBe(2);
    expect(listaproductos.lista[0].id).toBe(1);
    expect(listaproductos.lista[1].id).toBe(2);
    
});

test('elimino un producto de la lista',()=>{
    listaproductos.agregar("helado",100);
    listaproductos.agregar("cafe",50);
    listaproductos.eliminar(1);
    expect(listaproductos.lista.length).toBe(1);
    expect(listaproductos.lista[0].producto).toBe("cafe");
});