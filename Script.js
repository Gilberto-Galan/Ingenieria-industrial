$(document).ready(function()
            {
                //ponemos nuestro código Javascript que utiliza JQuery
                ConfigurarInicio();
                $('.myicono').click(function(e)
                {
                    //console.dir(e);
                    //alert('Prueba');
                    $('#navbar ul').toggleClass('lista-sm');
                })
                function ConfigurarInicio()
                {
                    var urlPath = window.location.pathname;
                    console.log(urlPath);
                    $('nav a').each(function()
                    {
                        //console.log($(this));
                        var href = $(this).attr('href');
                        console.log(href);
                        var indice =urlPath.length - href.length;
                        //console.log(indice);
                        console.log(urlPath.substring(indice));
                        if(urlPath.substring(indice) === href)
                        {
                            console.log('match');
                            $(this).closest('li').addClass('active');
                        }
                    })
                    
                }
            })