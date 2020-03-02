var app =(function(){
    var author=null;

    return {
        input:function (author2) {
                  author = author2;
                  document.getElementById("authorName").innerHTML = author+"'s bluesprints:";
                },
         update: function(author){
            app.input(author);
            var bp = apimock.getBlueprintsByAuthor(author,null);
         }
	};
})();