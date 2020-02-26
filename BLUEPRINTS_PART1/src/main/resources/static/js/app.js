var app = (function () {

	return {
        input: function(author, callback) {
            callback(null, mockdata[author]);
        }
    }

})();