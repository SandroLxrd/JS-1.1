//DOM de eventos
document
.getElementById("prodcut--formulario")
.addEventListener("Submit", function (elemento){

elemento.preventDefault();//evalua el comportamiento del elementeo

//Obtener valores de formulario
const name = document.getElementById("name").value,
precio = document.getElementById("precio").value,
año = document.getElementById("año").value;
 
//crear nuevo producto
const producto = new Producto(nombre, precio, año);

//crear nuevo usuario
const usuario = new Usuario();  

// Boton de validacion
if(nombre ==="" || precio ==="" || año===""){
    usuario.showMessage("Por favor insertar nombre de usuario");
}

//Guardar producto

usuario.AddProducto(producto);
usuario.showMessage("Producto agregado correctamnete");
usuario.resetFrom();

});

document.getElementById("Lista-producto").addEventListener("click", (elemento) =>{
    const usuario = new Usuario();
    usuario.deletProduct(elemento.target);
    elemento.preventDefault();
});