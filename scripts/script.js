var tabla_usuarios
var id_usuario

$(document).ready(function()
{
    $("#guardar").click(function(e)
    {
        switch($("#guardar").html())
        {
            case "Guardar":
                {
                    agregarRegistro()
                }
                break
            case "Actualizar":
                {
                    actualizarRegistro()
                }
                break
        }
    })
    $("#limpiar").click(function(e)
    {
        limpiar()
    })
})

function agregarRegistro()
{
    console.log(respuesta)
    if(validar() == true)
    {

        $.post("funciones/guardarRegistro.php",
        {
            nombre: $("#nombre").val(),
            correo: $("#correo").val(),
            puesto_cargo: $("#puesto_cargo").val(),
            url_empresa: $("#url_empresa").val(),
            empresa: $("#empresa").val(),
            celular: $("#celular").val(),
        },
        function(respuesta)
        {
            switch(parseInt(respuesta))
            {
                case 1:
                    {
                        alert("Registro agregado correctamente")
                        limpiar()
                        mostrarRegistros()
                    }
                    break
                default:
                    {
                        alert("Ocurrió un error, por favor contacta al administrador\n\nError: " + respuesta)
                    }
                    break
            }
        })
    }
    else
    {
        alert("Por favor complete correctamente los campos en color rojo")
    }
}

function actualizarRegistro()
{
    if(validar() == true)
    {
        if(confirm("¿Realmente desea actualizar el registro?") == true)
        {
            
            $.post("funciones/actualizarRegistro.php",
            {
                id: id_usuario,
                nombre: $("#nombre").val(),
                correo: $("#correo").val(),
                puesto_cargo: $("#puesto_cargo").val(),
                url_empresa: $("#url_empresa").val(),
                empresa: $("#empresa").val(),
                celular: $("#celular").val(),
            },
            function(respuesta)
            {
                switch(parseInt(respuesta))
                {
                    case 1:
                        {
                            alert("Registro actualizado correctamente")
                            limpiar()
                            mostrarRegistros()
                        }
                        break
                    default:
                        {
                            alert("Ocurrió un error, por favor contacta al administrador\n\nError: " + respuesta)
                        }
                        break
                }
            })
        }
    }
    else
    {
        alert("Por favor complete correctamente los campos en color rojo")
    }
}

function mostrarRegistros()
{
    $.post("funciones/mostrarRegistros.php",
    {
    },
    function(respuesta)
    {
        switch(parseInt(respuesta))
        {
            case -1:
                {
                    $("#tabla").html("<div style='width:100%; margin-top:15px; '><b>Aún no hay registros</b></div>")
                }
                break
            default:
                {
                    var tabla = JSON.parse(respuesta)
                    tabla_usuarios = tabla

                    var codigo = ""+
                    "<table style='margin-top:15px; width:100%;'>"+
                        "<tr>"+
                            "<td><b>Nombre<b></td>"+
                            "<td><b>Correo<b></td>"+
                            "<td><b>Puesto/Cargo<b></td>"+
                            "<td><b>URL Empresa<b></td>"+
                            "<td><b>Empresa<b></td>"+
                            "<td><b>Celular<b></td>"+
                            "<td></td>"+
                            "<td></td>"+
                        "</tr>"
                    for(x=0; x<tabla.length; x++)
                    {
                        codigo+=
                        "<tr>"+
                            "<td>" + tabla[x]["nombre"] + "</td>"+
                            "<td>" + tabla[x]["correo"] + "</td>"+
                            "<td>" + tabla[x]["puesto_cargo"] + "</td>"+
                            "<td>" + tabla[x]["url_empresa"] + "</td>"+
                            "<td>" + tabla[x]["empresa"] + "</td>"+
                            "<td>" + tabla[x]["celular"] + "</td>"+
                            "<td><img class='icono' src='imagenes/actualizar.png' onclick='actualizar_usuario(" + x + ")'></td>"+
                            "<td><img class='icono' src='imagenes/eliminar.png' onclick='eliminar_usuario(" + x + ")'></td>"+
                            "<td><img class='icono' src='imagenes/done.png' onclick='generarQR(" + x + ")'></td>"+
                        "</tr>"
                    }
                    codigo+=
                    "</table>"

                    $("#tabla").html(codigo)
                }
                break
        }
    })
}

function eliminar_usuario(_id)
{
    var id_usuario = tabla_usuarios[_id]["id"]
    var nombre = tabla_usuarios[_id]["nombre"]

    if(confirm("¿Realmente desea eliminar el usuario " + nombre + "?") == true)
    {
        $.post("funciones/eliminarRegistro.php",
        {
            id: id_usuario
        },
        function(respuesta)
        {
            switch(parseInt(respuesta))
            {
                case 1:
                    {
                        alert("Usuario " + nombre + " eliminado correctamente")
                        mostrarRegistros()
                    }
                    break
                default:
                {
                    alert("Ocurrió un error, por favor contacte al administrador.\n\nError: " + respuesta)
                }
                break
            }
        })
    }
}

function actualizar_usuario(_id)
{
    id_usuario = tabla_usuarios[_id]["id"]
    $("#nombre").val(tabla_usuarios[_id]["nombre"])
    $("#correo").val(tabla_usuarios[_id]["correo"])
    $("#puesto_cargo").val(tabla_usuarios[_id]["puesto_cargo"])
    $("#url_empresa").val(tabla_usuarios[_id]["url_empresa"])
    $("#empresa").val(tabla_usuarios[_id]["empresa"])
    $("#celular").val(tabla_usuarios[_id]["celular"])
    $("#guardar").html("Actualizar")
}

function generarQR()
{
    $.post("generarQR.php",
        {
            contenidoQR: $("#contenidoQR").val()
        },
        function(respuesta)
        {
            var datos = JSON.parse(respuesta)
            var url = datos[0]["url"]
            var codigo = "" +
            "<img style='margin-top:25px;' src='" + url + "'>"
            //window.location.href = "";
            $("#imagenQR").html(codigo)
        })

    /*$.post("funciones/generarQR.php",
    {
        contenidoQR: $("#contenido").val()
    },
    function(respuesta)
    {   
        var datos = JSON.parse(respuesta)
        var url = datos[0]["url"]
        url = $("contenido")
        var codigo = "" +
        "<img style='margin-top:25px;' src='" + url + "'>"+
        window.open('http://www.tupagina.com/pagina-en-tab.php', 'QR Tarjeta Presentación');
        window.location.href = "#imagenQR";

        "<a href='" + url + "' download='QR Tarjeta Presentación'>"+
            "<button style='width:90%; margin-left: 5%; margin-bottom:1%; height:40px; border-radius:3px;'>Descargar QR</button>"+
        "</a>"

        $("#imagenQR").html(codigo)
    })*/
}

function limpiar()
{
    id_usuario = ""
    $("#nombre").val("")
    $("#correo").val("")
    $("#puesto_cargo").val("")
    $("#url_empresa").val("")
    $("#empresa").val("")
    $("#celular").val("")
    $("#guardar").html("Guardar")
}

function validar()
{
    var inputTexto = ["nombre","puesto_cargo","url_empresa","empresa","celular"]
    var inputCorreo = ["correo"]
    var acumulado = 0

    for(x=0; x<inputTexto.length; x++)
    {
        var id = "#" + inputTexto[x]
            if($(id).val() == "" || $(id).val() == null)
            {
                acumulado++
                $(id).css({"border":"solid 1px red"})
            }
            else
            {
                $(id).css({"border":"solid 1px #767676"})
            }
    }

    for(x=0; x<inputCorreo.length; x++)
    {
        var id = "#" + inputCorreo[x]
        var correo = $(id).val()
        if(correo.indexOf("@") == -1 || correo.indexOf(".") == -1)
        {
            acumulado++
            $(id).css({"border":"solid 1px red"})
        }
        else
        {
            $(id).css({"border":"solid 1px #767676"})
        }
    }
    if(acumulado > 0)
    {
        return false
    }
    else
    {
        return true
    }
}