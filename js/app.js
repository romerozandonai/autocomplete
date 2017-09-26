var list = [
    {
        "name":"Series",
        "options":{
            "1":"Game of Thrones",
            "2":"The Walking Dead"
        }
    },
    {
        "name":"Filmes",
        "options":{
            "1":"Napoleon Dynamite",
            "2":"Across the Universe"
        }
    }
];

$(document).ready(function(){

    populateCategs();

    $("#categs").on("change",function(){

        var choosen = $(this).val();
        var options = '';

        if(choosen == ''){
            alert('Escolha uma opção válida');
        }
        else{

            var result = list[choosen].options;

            $.each(result,function(i,line){
                options += '<option value="'+line+'">'+line+'</option>';
            });

            $('#txtAutoComplete').removeAttr("disabled");
            $('#optionsList').html(options);

        }

    });

});

function populateCategs(){

    var options = '<option value="">Escolha</option>';

    $.each(list,function(i,e){
        options += '<option value="'+i+'">'+e.name+'</option>';
    });
    $('#categs').html(options);

}