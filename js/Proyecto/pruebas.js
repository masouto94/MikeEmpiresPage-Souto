var bonus = '{"Infantry": 10, "Condottiero": 10, "StandardBuilding": 3}';
var armor = '{"Infantry" : 5, "Condottiero": 0, "base_melee": 1, "base_pierce": 1}';



var parser_Json = JSON.parse(bonus);
var array_bonus = [];
array_bonus.push(parser_Json);
var array_armor = [];
array_armor.push(JSON.parse(armor));


resultado = 0;
for(i in Object.keys(array_armor[0])){
    var indice = Object.keys(array_armor[0])[i];
    if(array_bonus[0].hasOwnProperty(indice)){
        resultado += (parseFloat(array_bonus[0][indice] - array_armor[0][indice]));
    }
    

};

// console.log(resultado)



