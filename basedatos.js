const carreras = [
    {
        id: "1",
        nombre : "Ingenieria de Sistemas"
    },{
        id: "2",
        nombre : "Ingenieria Industrial"
    }
]

const cursos = [
    {
        id:"1",
        nombre:"Programcion Web",
        carreraId : "1"
    },{
        id:"2",
        nombre:"Lenguaje de Programacion",
        carreraId : "1"
    },{
        id:"3",
        nombre:"Dibujo de Ingenieria",
        carreraId : "2"
    }
]

const usuarios = [
    {
        id : "1",
        usuario : "Juan",
        correo : "juan@gmail.com",
        contra :"12345"
    },{
        id : "2",
        usuario : "Maria",
        correo : "maria@gmail.com",
        contra :"67890"
    },{
        id : "3",
        usuario : "Pedro",
        correo : "pedro@gmail.com",
        contra :"pedro123"
    }
]

const pedidos = [
    {
        id : "1",
        nombre : "Procesdor",
        precio : 123,
        imagenP : "",
        basura : ""
    },{
        id : "2",
        nombre : "Tarjeta Grafica",
        precio : 321,
        imagenP : "",
        basura : ""
    },{
        id : "3",
        nombre : "Teclado y Mouse",
        precio : 108,
        imagenP : "",
        basura : ""
    }
]

module.exports= {
    carreras : carreras,
    cursos : cursos,
    usuarios : usuarios,
    pedidos : pedidos
}