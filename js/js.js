// PAGINA DE INICIO Y CLICK EN "LOGOS"

var listItems = {

    listAll: function(){
        for (var i = 0; i < listItems.items.length; i++ ){
            $('#section').append(listItems.assamble(listItems.items[i]))
        }
},

    assamble: function(a){
        return  '<a href="#"' + 'class="logoDescription col-lg-3 col-md-4 col-sm-6 col-xs-12" >'
        +'<div class="contenedores" data-id="' + a.id + '">'
        + '<img src="' + a.logoImage + '" alt="Logo">'
        + '</div>'
        + '</a>'
},
    
    listDescription: function(logo){
        for (var i = 0; i < listItems.items.length; i++ ){
            if(logo == listItems.items[i].id){
               $('#descripcion').append(listItems.assambleDescription(listItems.items[i]))
            }
        }
},

    assambleDescription: function (a){
        return '<div class="info col-12 row">'
        +'<div class="imagen col-12 col-sm-3">'
        // +'<div class="imagen-cont">'
        +'<img src="'+ a.logoImage +'" alt="">'
        // +'</div>'
        +'</div>'
        +'<div class="tituloYestrellas col">'
        +'<div class="text-title">' + a.nombreLogo + '</div>'              
        +'<div class="estrellas">'
        +'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>'
        +'</div>'
        +'</div>'
        +'</div>'
        +'<div class="description col-12">'
        +'<div class="textDesc">' + a.descripcionLogo +'</div class="textDesc">'
        +'</div>'
},
    


    setItems: function(b){
        listItems.items = b;
    },

    items: [],

}

listItems.setItems(elementsList);

// CLICK EN "TRABAJO NUEVO"

var listFormNewJob = {

    listForm: function(){
        $('#trabajoNuevo').append(listFormNewJob.assamble())
    },

    assamble: function(){
        return '<form class="contactoForm row">'
        +'<h1 class="titulo col-12">Subir nuevo trabajo</h1>'
        +'<label for="" class="form-label col-12">Nombre</label>'
        +'<input type="text" class="form-input inputName col-11" required>'
        +'<label for="" class="form-label col-12">Descripción</label>'
        +'<input type="text" class="form-input inputDescription col-11" required>'
        +'<label for="" class="form-file col-12">Logo</label>'
        +'<input type="file" name="pic" class="form-submit inputLogoImage col-11" required>'
        +'<label for="" class="form-file col-12">Imagenes</label>'
        +'<input type="file" multiple="true" name="archivos" class="form-submit inputLogoAplicaciones col-11" required>'
        +'<input type="submit" class="form-submit col-11" id="enviarForm">'
        +'</form>'
    },
}

// CLICK EN "CONTACTO"

var listFormContact = {

    listForm: function(){
        $('#contacto').append(listFormContact.assamble())
    },

    assamble: function(){
        return '<form class="contactoForm row" method="post">'
        +'<h1 class="titulo col-12">Envianos un mensaje</h1>'
        +'<label for="" class="form-label col-12">Nombre</label>'
        +'<input type="text" class="form-input inputName col-11" required>'
        +'<label for="" class="form-label col-12">Apellido</label>'
        +'<input type="text" class="form-input inputLastName col-11" required>'
        +'<label for="" class="form-label col-12">Correo</label>'
        +'<input type="text" class="form-input inputMail col-11" required>'
        +'<label for="" class="form-label col-12">Mensaje</label>'
        +'<input type="text" class="form-input inputMessage col-11" required>'
        +'<input type="submit" class="form-submit col-11" id="enviarFormContacto">'
        +'</form>'
    },

}

// CLICK EN UN LOGO

var listClickLogo = {
    
    
    //si a.id es igual a algun a.id enviar datos de  (a) a assamble y ejecutar lisAll
    
    listAll: function(){
        for (var i = 0; i < listItems.items.length; i++ ){

            $('#section').append(listItems.assamble(listItems.items[i]))
        }

    },

    assamble: function (a){
        return '<div class="info row col-12">'
        +'<div class="imagen col-3">'
        +'<div class="imagen-cont">'
        +'<img src="'+ a.logoImage +'" alt="">'
        +'</div>'
        +'</div>'
        +'<div class="col-9 row">'
        +'<div class="text-title col-12">' + a.nombreLogo + '</div>'              
        +'<div class="estrellas col-12">'
        +'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>'
        +'</div>'
        +'</div>'
        +'</div>'
        +'<div class="description">'+ a.descripcionLogo +'</div>'
    }
}

/*
    al hacer clic en un logo 
    buscar los datos de ese logo con su id 
    traer los datos de ese logo 
    mostrarlos 
*/

// BOTONES

$(document).ready(function(){


    $('.logos').on('click',function(){
        
        /* $('#section').html("");
        $('#trabajoNuevo').html("");
        $('#contacto').html("");
        $('#descripcion').html("");
        listItems.listAll(); */

        location.reload();
    })
    
    $('.trabajo-nuevo').on('click',function(){
        
        $('#section').html("");
        $('#trabajoNuevo').html("");
        $('#contacto').html("");
        $('#descripcion').html("");
        listFormNewJob.listForm();
    })
    
    $('.contacto').on('click',function(){
        
        $('#section').html("");
        $('#trabajoNuevo').html("");
        $('#contacto').html("");
        $('#descripcion').html("");
        listFormContact.listForm();
        
    })
    
    $('.logoDescription').on('click',function(){
       
        $('#section').html("");
        var logo = $(this).children().data('id');
        listItems.listDescription(logo);
        document.getElementById('section').style.margin = "0";

    })
    
    /*
    $('#enviarFormulario').on('click',function(){
    
        var inputName = $('.inputName').val();
        var inputDescription = $('.inputDescription').val();
        var inputLogoImage = $('.inputLogoImage').val();
        var inputLogoAplicaciones = $('.inputLogoAplicaciones').val();
        var form = inputName + inputDescription + inputLogoImage + inputLogoAplicaciones;
        
        $('#section').html("");
        $('#trabajoNuevo').html("");
        $('#contacto').html("");
        $('#descripcion').html("");
        // alert('Su trabajo ha sido enviado con exito');
        $.ajax({
            method: 'POST',
            url: 'http://www.mockable.io',
            data:form,
            success: function(response){
                console.log("ok ok ok");
            }
        })
        return false;
        // location.reload();
        // .then(function(response){
            //     console.log("ok ok ok")
            
            // })
            
            
        })
        
        $('#enviarForm').on('click', function(event){
            event.preventDefault();
            var toSave = {
                nombre: $('.inputName').val(),
                descripcionInput: $('.inputDescription').val(),
                imagenLogo: $('.inputLogoImage').val(),
                aplicaciones: $('.inputLogoAplicaciones').val(),
            }
            
            submitForm(toSave);
        })
        
        $('#enviarFormContacto').on('click', function(event){
            event.preventDefault();
            var toSave = {
                nombre: $('.inputName').val(),
                apellido: $('.inputLastName').val(),
                mail: $('.inputMail').val(),
                imagenLogo: $('.inputMessage').val(),
            }
            
            submitForm(toSave);
        })
        
        function submitForm(data){
            $.ajax({
                // url: 'http://www.mockable.io',
                url:'http://192.168.11.150:3000/peliculas',
                method:'POST',
                data: data
            }).then(success,error)
        }
        
        function success(){
            console.log("ok ok ok")
        }
        
        function error(){
            console.log("error")
        }
        */
        
        
        
        
        
    })