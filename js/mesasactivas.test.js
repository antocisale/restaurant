const Mesa = require('./mesas.js'),
    Cuenta = require('./cuentamesa'),
    mesasActivas = require('./mesasactivas.js/');


beforeEach(()=>{
    mesasActivas.lista.splice(0);
    })

test('agrego una mesa', ()=>{
    mesasActivas.agregar(3);
    expect (mesasActivas.lista[0]).toEqual({
        "id": 3,
        "cuenta": {
            "lista":[],
            "precio":0
        }})
});

test ('agrego una mesa que ya esta en array y tira error',()=>{
    mesasActivas.agregar(2);
    mesasActivas.agregar(3);
    expect(()=>{mesasActivas.agregar(3)}).toThrow("mesa ocupada");
});

test('agrego una mesa con un id de letras y tira error',()=>{
    const mesaA = new Mesa("a");
    expect(()=>{mesasActivas.agregar(mesaA)}).toThrow("el Id de la mesa debe ser un número");
    
});

test('elimino una mesa activa',()=>{
    mesasActivas.agregar(2);
    mesasActivas.agregar(3);
    mesasActivas.eliminar(2);
    expect(mesasActivas.lista.length).toBe(1);
});

