// const seleccionar_unidad_1 = () =>{
//     var selector_1 = document.getElementById("select_unit_1");
//     var Unidad_1_select = array_unidades.find(a => a.name == selector_1.options[selector_1.selectedIndex].value);
//     console.log(Unidad_1_select);
//     // array_seleccionado.push(Unidad_1_select);
//     return Unidad_1_select;
    
//     };

// const seleccionar_unidad_2 = () =>{
//     var selector_2 = document.getElementById("select_unit_2");
//     var Unidad_2_select = array_unidades.find(a => a.name == selector_2.options[selector_2.selectedIndex].value);
//     console.log(Unidad_2_select);
//     // array_seleccionado.push(Unidad_2_select);
//     return Unidad_2_select;
    
//     };

var Unidad_1_select = $('#select_unit_1').change(function(){
    var Unidad_1_din = array_unidades.find(a => a.name ==  Unidad_1_select.val());
    console.log(Unidad_1_din)
    Unidad_1 = localStorage.setItem("U1", JSON.stringify(Unidad_1_din));
    return Unidad_1
});
var Unidad_2_select = $('#select_unit_2').change(function(){
    var Unidad_2_din = array_unidades.find(a => a.name ==  Unidad_2_select.val());
    console.log(Unidad_2_din)
    Unidad_2 = localStorage.setItem("U2", JSON.stringify(Unidad_2_din));
    return Unidad_2
});



// Acá va a haber unos templates de elementos según el tipo de unidad. Por ahora van a ser iguales hasta cargar las otras
// Poner un IF con la clase de la unidad segun el select. Ponerlo en el onchange después de la función que actualmente no está devolviendo el nombre...
var units_dinamico_1 = document.getElementById('stats_unit_1');
var units_dinamico_2 = document.getElementById('stats_unit_2');
const completador_de_campos = () =>{
var contenido_1 = `<div> Nombre <br><input type="text" id="name_unit_1" value=""></div>HP<br><input type="text" id="hp_unit_1" value=""><br>Attack(<i>{"Class": value,...}</i>)<br><input type="text" id="attack_unit_1" value=''><br>Bonus(<i>{"Class": value,...}</i>)<br><input type="text" id="bonus_unit_1" value=''><br>ROF<br><input type="text" id="ROF_unit_1" value=""><br>Blast Radius<br><input type="text" id="blast_radius_unit_1" value=""><br>Armor classes(<i>{"Class": value,...}</i>)<br><input type="text" id="armorclasses_unit_1" value=''><br>Cost(<i>Food: value, Wood: value, Gold: value</i>)<br><input type="text" id="cost_unit_1" value=''><br>LOS<br><input type="text" id="LOS_unit_1" value=""><br>Speed<br><input type="text" id="speed_unit_1" value=""><br>`;
var contenido_2 = `<div> Nombre <br><input type="text" id="name_unit_2" value=""></div>HP<br><input type="text" id="hp_unit_2" value=""><br>Attack(<i>{"Class": value,...}</i>)<br><input type="text" id="attack_unit_2" value=''><br>Bonus(<i>{"Class": value,...}</i>)<br><input type="text" id="bonus_unit_2" value=''><br>ROF<br><input type="text" id="ROF_unit_2" value=""><br>Blast Radius<br><input type="text" id="blast_radius_unit_2" value=""><br>Armor classes(<i>{"Class": value,...}</i>)<br><input type="text" id="armorclasses_unit_2" value=''><br>Cost(<i>Food: value, Wood: value, Gold: value</i>)<br><input type="text" id="cost_unit_2" value=''><br>LOS<br><input type="text" id="LOS_unit_2" value=""><br>Speed<br><input type="text" id="speed_unit_2" value=""><br>`;
units_dinamico_1.innerHTML = contenido_1;
units_dinamico_2.innerHTML = contenido_2;
// Unidad1

Unidad_1 = JSON.parse(localStorage.getItem("U1"));
Unidad_2 = JSON.parse(localStorage.getItem("U2"));


document.getElementById("name_unit_1").value = JSON.parse(localStorage.getItem("U1")).name;
document.getElementById("hp_unit_1").value = JSON.parse(localStorage.getItem("U1")).hp;
document.getElementById("attack_unit_1").value = JSON.parse(localStorage.getItem("U1")).attack;
document.getElementById("bonus_unit_1").value = JSON.parse(localStorage.getItem("U1")).bonus;
document.getElementById("ROF_unit_1").value = JSON.parse(localStorage.getItem("U1")).ROF;
document.getElementById("blast_radius_unit_1").value = JSON.parse(localStorage.getItem("U1")).blast_radius;
document.getElementById("armorclasses_unit_1").value = JSON.parse(localStorage.getItem("U1")).armorclasses;
document.getElementById("cost_unit_1").value = JSON.parse(localStorage.getItem("U1")).cost;
document.getElementById("LOS_unit_1").value = JSON.parse(localStorage.getItem("U1")).LOS;
document.getElementById("speed_unit_1").value = JSON.parse(localStorage.getItem("U1")).speed;

// Unidad2
document.getElementById("name_unit_2").value = JSON.parse(localStorage.getItem("U2")).name;
document.getElementById("hp_unit_2").value = JSON.parse(localStorage.getItem("U2")).hp;
document.getElementById("attack_unit_2").value = JSON.parse(localStorage.getItem("U2")).attack;
document.getElementById("bonus_unit_2").value = JSON.parse(localStorage.getItem("U2")).bonus;
document.getElementById("ROF_unit_2").value = JSON.parse(localStorage.getItem("U2")).ROF;
document.getElementById("blast_radius_unit_2").value = JSON.parse(localStorage.getItem("U2")).blast_radius;
document.getElementById("armorclasses_unit_2").value = JSON.parse(localStorage.getItem("U2")).armorclasses;
document.getElementById("cost_unit_2").value = JSON.parse(localStorage.getItem("U2")).cost;
document.getElementById("LOS_unit_2").value = JSON.parse(localStorage.getItem("U2")).LOS;
document.getElementById("speed_unit_2").value = JSON.parse(localStorage.getItem("U2")).speed;

return Unidad_1, Unidad_2
}


