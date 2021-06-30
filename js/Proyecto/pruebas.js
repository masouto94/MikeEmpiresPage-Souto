var input2 = '{"Infantry": 10, "Condottiero": 10, "StandardBuilding": 3}'




var parser_Json = JSON.parse(input2)
var array = []
array.push(parser_Json)
console.log(array[0].StandardBuilding)



