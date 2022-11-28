//importar librerias
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const {Usuario,ListaComponentes} = require("./dao")

//definir puerto
const puerto = 4444

//crear una instancia para comunicarse con el servidor
const app = express()

//configuraciones
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(cors())
//falta imagenes//

//COMUNICACIONES
app.get("/api/login",(req,resp) => {
    const usuario = req.query.usuario
    const contra = req.query.contra
    
    resp.send(contra)
})

app.get("/cursos",(req,resp)=>{
    resp.send(
        `<form method="post" action="/usuario-post" >
            <input type="text" name="usuario" />
            <input type="text" name="contra" />
            <input type="submit" value="Enviar" />
        </form>`)

})

app.post("/usuario-post", async (req,resp)=>{
    const usuario = req.body.usuario
    const contra = req.body.contra
    const listaUsuarios = await Usuario.findAll()

    var sol = "no ahi"
    for(i=0;i<listaUsuarios.length;i++){
        var persona=listaUsuarios[i]
        console.log(persona)
        if(persona.nombre==usuario && persona.contra==contra){sol ="si ahi"}
    }
    
    if(sol=="no ahi"){
        try{
            await Usuario.create({
                nombre : usuario,
                contra : contra,
            })
        } catch(error){
            resp.send({
                error : `ERROR. ${error}`
            })
            return
        }
    }else{}

    const respuesta = `<h1>Peticion HTTP Post (raw)</h1>
	        <div>
	        Nombre: ${usuario}
	    </div>
	    <div>
	        Codigo: ${contra}
	    </div>
        <div>
	        Verificacion: ${sol}
	    </div>`

    resp.send(respuesta)
})



app.get("/listacomponentes", async (req, resp) => {
    const Lista =  await ListaComponentes.findAll()

    resp.send(Lista)
})

app.listen(puerto,()=>{
    console.log(`Servidor web iniciado en puerto ${puerto}`)
})