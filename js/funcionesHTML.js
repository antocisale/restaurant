try {
    const Mesa = require('./mesas.js'),
        mesasActivas = require('./mesasactivas'); 

} catch(e){}

///////////////////////////* FUNCIONES DE MESAS OCUPADAS *////////////////////////////////////
const showCuenta =()=>{
    let cuentaMesa = document.querySelector(".modal");
    cuentaMesa.style.display="block";
};

const addBotonCerrar = ()=>{  //PENDIENTE CREACION DE MODAL
    let newBotonCerrar = document.createElement("button");
    newBotonCerrar.innerHTML = "Cerrar";
    newBotonCerrar.classList.add("cerrar");
    newBotonCerrar.addEventListener("click",showCuenta);
    return newBotonCerrar;
};

const addBotonEliminar = ()=>{
    let newBotonEliminar = document.createElement("button");
    newBotonEliminar.innerHTML = "Eliminar";
    newBotonEliminar.classList.add("eliminar");
    newBotonEliminar.addEventListener("click",()=>{
        let mesaAEliminar = newBotonEliminar.parentElement.parentElement.firstChild.id;
        mesasActivas.eliminar(mesaAEliminar);
        eliminarMesadeSelector(mesaAEliminar);
        newBotonEliminar.parentElement.parentElement.remove();
    });
    return newBotonEliminar;
};

const agregarMesaAlHTML = (mesa)=>{
    let list = document.querySelector("#tablaMesasActivas");
    let mesaNueva = document.createElement("tr");
    mesaNueva.classList.add("filas");

    let mesaNuevaNro = document.createElement("td");
    mesaNuevaNro.innerHTML = mesa.id;
    mesaNuevaNro.id=`${mesa.id}`;
    
    let mesaNuevaCuenta = document.createElement("td");
    mesaNuevaCuenta.innerHTML = `$ ${mesa.cuenta.precio}`;

    let mesaNuevaBotonCerrar = document.createElement("td");
    let botonCerrar = addBotonCerrar();
    mesaNuevaBotonCerrar.appendChild(botonCerrar);

    let mesaNuevaBotonEliminar = document.createElement("td");
    let botonEliminar = addBotonEliminar();
    mesaNuevaBotonEliminar.appendChild(botonEliminar);

    mesaNueva.appendChild(mesaNuevaNro);
    mesaNueva.appendChild(mesaNuevaCuenta);
    mesaNueva.appendChild(mesaNuevaBotonCerrar);
    mesaNueva.appendChild(mesaNuevaBotonEliminar);
    list.appendChild(mesaNueva);
    selectorDeMesasActivas(mesaNuevaNro.id);
};

let botonAgregarMesa = document.querySelector("#agregarMesa");
botonAgregarMesa.addEventListener("click", ()=>{
    mesasActivas.agregar(document.querySelector("#txtMesa").value);
    return document.querySelector("#txtMesa").value ="";
});

const selectorDeMesasActivas = (mesa)=>{
    let selector = document.querySelector("#mesaCargaCuenta");
    let elemLista = document.createElement("option");
        elemLista.innerHTML=mesa;
        elemLista.id = mesa;
        selector.appendChild(elemLista);
}

const eliminarMesadeSelector = (mesa)=>{
    let selectorDeMesas = document.querySelectorAll("#mesaCargaCuenta > option");
    for (let numeroDeMesa of selectorDeMesas){
        if (mesa == numeroDeMesa.id){
            numeroDeMesa.remove();
        }
    }
}


/////////////////////////////////// FUNCIONES DE LAS CUENTAS DE CADA MESA//////////////////////////////

const actualizarCuentaHTML=(nuevoValor)=>{
    let mesaAModificar = elegirMesa();
    let listaDeMesas = document.querySelectorAll("#tablaMesasActivas>tr>td");
    for(let mesa of listaDeMesas){
        if(mesa.id == mesaAModificar){
            mesa.nextSibling.innerHTML =`$ ${nuevoValor}`}
        };
};

let botonAgregarAMesa = document.querySelector("#agregarAMesa");
botonAgregarAMesa.addEventListener("click", () => {
    let mesaElegida = elegirMesa();
    let mesabuscada = mesasActivas.lista.findIndex((mesasactivas)=>{
        return mesasactivas.id == mesaElegida;
    });
    let listaproductos = document.querySelectorAll("#tablaCargaProductos > tr");
    for(let producto of listaproductos){
    mesasActivas.lista[mesabuscada].cuenta.agregar(producto.cells[0].id,
        producto.cells[1].childNodes[0].value);
        producto.cells[1].childNodes[0].value = "";
    }
});

const elegirMesa = () =>{
    let selectorDeMesa = document.querySelector("#mesaCargaCuenta").selectedOptions;
    for(let i=0; i<selectorDeMesa.length;i++){
    return selectorDeMesa[i].value;
}};

///////////////////////////////////FUNCIONES DE LAS LISTAS DE PRODUCTOS///////////////////////////////
const addBotonEliminarProducto = ()=> {
    let newBotonEliminar = document.createElement("button");
    newBotonEliminar.innerHTML = "Eliminar";
    newBotonEliminar.classList.add("eliminar");
    newBotonEliminar.addEventListener("click", () => {
        newBotonEliminar.parentElement.parentElement.remove();
        let productoAEliminar = newBotonEliminar.parentElement.parentElement.firstChild.id;
        eliminarProductoDeCuentaMesa(productoAEliminar); // TODAVIA NO LO ELIMINA
    });
    return newBotonEliminar;
};

/**
 * 
 * ACTUALIZAR DE UNA TODA LA LISTA, NO POR CADA VEZ QUE SE AGREGA UN PRODUCTO!
 *  - FUNCION MAS RAPIDA QUE LA QUE ESTOY HACIENDO
 * 
 */

const agregarProductoAlHTML= (producto)=> {
    let list = document.querySelector("#tablaMenu");

    let productoNuevo = document.createElement("tr");
    productoNuevo.classList.add("filas");

    let productoNuevoId = document.createElement("td");
    productoNuevoId.innerHTML = producto.id;
    productoNuevoId.id = producto.id;

    let productoNuevoNombre = document.createElement("td");
    productoNuevoNombre.innerHTML = producto.producto;

    let productoNuevoPrecio = document.createElement("td");
    productoNuevoPrecio.innerHTML = `$ ${producto.precio}`;

    let productoNuevoBotonEliminar = document.createElement("td");
    let botonEliminar = addBotonEliminarProducto();
    productoNuevoBotonEliminar.appendChild(botonEliminar);

    productoNuevo.appendChild(productoNuevoId);
    productoNuevo.appendChild(productoNuevoNombre);
    productoNuevo.appendChild(productoNuevoPrecio);
    productoNuevo.appendChild(productoNuevoBotonEliminar);
    list.appendChild(productoNuevo);
};

const agregarProductoParaCuentaMesa=(producto)=>{
    let list = document.querySelector("#tablaCargaProductos");

    let productoNuevo = document.createElement("tr");
    productoNuevo.classList.add("filas");

    let productoNuevoNombre = document.createElement("td");
    productoNuevoNombre.innerHTML = producto.producto;
    productoNuevoNombre.id = producto.id;

    let productoNuevoCantidad = document.createElement("td");
    let cantidad = document.createElement("input");
    cantidad.setAttribute("type", "text");
    cantidad.classList.add("texto");
    productoNuevoCantidad.appendChild(cantidad);

    productoNuevo.appendChild(productoNuevoNombre);
    productoNuevo.appendChild(productoNuevoCantidad);
    list.appendChild(productoNuevo)
};

const eliminarProductoDeCuentaMesa=(producto)=>{
    let productosEnCuenta = document.querySelectorAll("#tablaCargaProductos > tr");
    for (let producto of productosEnCuenta){
        console.log(producto.cells[0].id)
        if (producto.cells[0].id ==producto){
            producto.remove();
        }
    }
};

let botonAgregarProducto = document.querySelector("#agregarProducto");
botonAgregarProducto.addEventListener("click", () => {
    listaProductos.agregar(document.querySelector("#txtProducto").value,
        document.querySelector("#productoPrecio").value);
    document.querySelector("#txtProducto").value = "";
    document.querySelector("#productoPrecio").value = "";
});
////////////////////////////////////FUNCIONES DENTRO DEL MODAL///////////////////////////////////

let cierre = document.querySelector(".close");
cierre.addEventListener("click",()=>{
        let ventanaCuenta = document.querySelector(".modal");
        ventanaCuenta.style.display="none";
});

let imprimir = document.querySelector(".print");
imprimir.addEventListener("click",()=>{print()});

try {
    module.exports = {
        addBotonCerrar,
        addBotonEliminar,
        agregarMesaAlHTML,
        botonAgregarMesa,
        selectorDeMesasActivas,
        actualizarCuentaHTML,
        botonAgregarAMesa,
        elegirMesa,
        addBotonEliminarProducto,
        agregarProductoAlHTML,
        agregarProductoParaCuentaMesa,
        botonAgregarProducto
    };
} catch (e) {}