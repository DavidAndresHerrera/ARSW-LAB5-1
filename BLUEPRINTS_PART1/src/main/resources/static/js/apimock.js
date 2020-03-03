var apimock = (function () {

    var mockdata = [];
    
    mockdata["JhonConnor"] = [
        {
            author: "JhonConnor",
            name: "house",
            points: [
                {
                    x: 10,
                    y: 20
                },
                {
                    x: 15,
                    y: 25
                },
                {
                    x: 45,
                    y: 25
                }
            ]
        },
        {
            author: "JhonConnor",
            name: "dog",
            points: [
                {
                    x: 100,
                    y: 200
                },
                {
                    x: 150,
                    y: 5
                },
                {
                    x: 75,
                    y: 85
                },
{
                    x: 46,
                    y: 37
                },
{
                    x: 83,
                    y: 46
                },
{
                    x: 57,
                    y: 74
                },
{
                    x: 64,
                    y: 19
                },
{
                    x: 49,
                    y: 40
                },
            ]
        },
        {
            author: "JhonConnor",
            name: "bike",
            points: [
                {
                    x: 30,
                    y: 35
                },
                {
                    x: 40,
                    y: 45
                }
            ]
        }
    ]
    
    mockdata['LexLuthor'] = [
        {
            author: 'LexLuthor',
            name: 'kryptonite',
            points: [
                {
                    x: 60,
                    y: 65
                },
                {
                    x: 70,
                    y: 75
                }
            ]
        },
        {
            author: 'LexLuthor',
            name: 'pool',
            points: [
                {
                    x: 60,
                    y: 65
                },
                {
                    x: 7,
                    y: 5
                },
                {
                    x: 19,
                    y: 46
                },
                {
                    x: 190,
                    y: 460
                },
                {
                    x: 64,
                    y: 102
                },
            ]
        },
    ]
    
    return {
        getBlueprintsByAuthor: function(author, callback) {
            callback(mockdata[author]);
        },
        
        getBlueprintsByNameAndAuthor: function(name, author, callback) {
            blueprint = mockdata[author].find(function(blueprint) {
                return blueprint.name == name
            });
            callback(null, blueprint)
        }
    }
    
})();