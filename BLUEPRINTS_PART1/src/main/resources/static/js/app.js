var app =(function(){

    var author=null;
    var lista = [];

    var total = function(total, valor){
            return total + valor.value;
    };

    var setName = function (author2) {
        author = author2;
        $( "#authorName" ).html(author+"'s bluesprints:");
    }

    var setLista = function (retorno) {
        $( "#totalPoints" ).html("Total Points: 0");
        $("#t01 tbody").empty();
        $("#t01 tbody").append('<tr><th>Blueprint name</th><th>Number of points</th><th>Open</th></tr>');
        if (retorno == null){
            return new Error("No se encontro");
        }
        var lista  = retorno.map(function(BP){
            return {key:BP.name, value:BP.points.length}
        })
        lista.map(function(BP){
            var fila = '<tr><td id="bpName">' + BP.key + '</td><td id="point">'+BP.value+'</td><td><button type="button" class="btn btn-success" onclick="">Open</button></td></tr>';
            $("#t01 tbody").append(fila);
        })
        var suma = lista.reduce(total,0);
        $( "#totalPoints" ).html("Total Points: "+suma);
    }

    return {
         update: function(author){
            setName(author);
            apimock.getBlueprintsByAuthor(author,setLista);
         }
	};
})();
