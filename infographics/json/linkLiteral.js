var parsedJSON = require('./vdm.json');
var linkCount = 0, literalCount = 0;
if (parsedJSON.classes) {
    var classLength = parsedJSON.classes.length;
    for (var i = 0; i < classLength; i++) {
        var cls = parsedJSON.classes[i];
        if (cls.properties) {
            for (var j = 0; j < cls.properties.length; j++) {
                var property = cls.properties[j];
                if (property.datatype) {
                    if (property.datatype === 'POINTER')
                        linkCount++;
                    else 
                        literalCount++;
                }
            }
        }
    }
}

var jsonOutput = [];
jsonOutput.push({"DATATYPE" : "LINK", "COUNT" : linkCount});
jsonOutput.push({"DATATYPE" : "LITERAL", "COUNT" : literalCount});

//console.log(linkCount + '(link) > literal:' + literalCount);
console.log(JSON.stringify(jsonOutput));

