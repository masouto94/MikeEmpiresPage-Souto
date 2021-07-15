const limpiador = () =>{
    updater_input_value('resultado1', "");
    updater_input_value('resultado2', "");
    reporte_1.innerHTML="";
    reporte_2.innerHTML="";
    units_dinamico_1.innerHTML = "";
    units_dinamico_2.innerHTML = "";
    document.getElementById('select_unit_1').selectedIndex = 0;
    document.getElementById('select_unit_2').selectedIndex = 0;

}
const limpiador_de_texto = (texto) =>{
    let regex = /[^A-Za-z,_:0-9 ]/g;
    let texto_limpio = texto.replace(regex, '');
    texto_limpio = texto_limpio.replaceAll(':', ': ');
    texto_limpio = texto_limpio.replaceAll(',', ', ');
    return texto_limpio
}

// Se instancian las variables para las pruebas
var Unidad_1_select = $('#select_unit_1').change(function(){
    var Unidad_1 = array_unidades.find(a => a.name ==  Unidad_1_select.val());
    Unidad_1.type = Unidad_1.constructor.name;
    console.log(Unidad_1)
    localStorage.setItem("U1", JSON.stringify(Unidad_1));

    return Unidad_1
});
var Unidad_2_select = $('#select_unit_2').change(function(){
    var Unidad_2 = array_unidades.find(a => a.name ==  Unidad_2_select.val());
    Unidad_2.type = Unidad_2.constructor.name;
    console.log(Unidad_2)
    localStorage.setItem("U2", JSON.stringify(Unidad_2));

    return Unidad_2
});



// Acá va a haber unos templates de elementos según el tipo de unidad. Por ahora van a ser iguales hasta cargar las otras
// Poner un IF con la clase de la unidad segun el select. Ponerlo en el onchange después de la función que actualmente no está devolviendo el nombre...
var units_dinamico_1 = document.getElementById('stats_unit_1');
var units_dinamico_2 = document.getElementById('stats_unit_2');

const completador_de_campos = () =>{

Unidad_1 = JSON.parse(localStorage.getItem("U1"));
Unidad_2 = JSON.parse(localStorage.getItem("U2"));

if(Unidad_1.type == "Melee_Unit"){
var contenido_1 = `<div> Nombre <br><input type="text" id="name_unit_1" value=""></div>HP<br><input type="text" id="hp_unit_1" value=""><br>Attack(<i>{"Class": value,...}</i>)<br><input type="text" id="attack_unit_1" value=''><br>Bonus(<i>{"Class": value,...}</i>)<br><input type="text" id="bonus_unit_1" value=''><br>ROF<br><input type="text" id="ROF_unit_1" value=""><br>Blast Radius<br><input type="text" id="blast_radius_unit_1" value=""><br>Armor classes(<i>{"Class": value,...}</i>)<br><input type="text" id="armorclasses_unit_1" value=''><br>Cost(<i>Food: value, Wood: value, Gold: value</i>)<br><input type="text" id="cost_unit_1" value=''><br>LOS<br><input type="text" id="LOS_unit_1" value=""><br>Speed<br><input type="text" id="speed_unit_1" value=""><br>`
units_dinamico_1.innerHTML = contenido_1}
else if(Unidad_1.type == "Ranged_Unit"){
    var contenido_1 = `<div> Nombre <br><input type="text" id="name_unit_1" value=""></div>HP<br><input type="text" id="hp_unit_1" value=""><br>Attack(<i>{"Class": value,...}</i>)<br><input type="text" id="attack_unit_1" value=''><br>Range</i>)<br><input type="text" id="range_unit_1" value=''><br>Minimum Range</i>)<br><input type="text" id="min_range_unit_1" value=''><br>Accuracy</i>)<br><input type="text" id="accuracy_unit_1" value=''><br>Projectile Speed</i>)<br><input type="text" id="projectile_speed_unit_1" value=''><br>Frame Delay</i>)<br><input type="text" id="frame_delay_unit_1" value=''><br>Bonus(<i>{"Class": value,...}</i>)<br><input type="text" id="bonus_unit_1" value=''><br>ROF<br><input type="text" id="ROF_unit_1" value=""><br>Blast Radius<br><input type="text" id="blast_radius_unit_1" value=""><br>Armor classes(<i>{"Class": value,...}</i>)<br><input type="text" id="armorclasses_unit_1" value=''><br>Cost(<i>Food: value, Wood: value, Gold: value</i>)<br><input type="text" id="cost_unit_1" value=''><br>LOS<br><input type="text" id="LOS_unit_1" value=""><br>Speed<br><input type="text" id="speed_unit_1" value=""><br>`
    units_dinamico_1.innerHTML = contenido_1;
    document.getElementById("range_unit_1").value = Unidad_1.range;
    document.getElementById("accuracy_unit_1").value = Unidad_1.accuracy;
    document.getElementById("frame_delay_unit_1").value = Unidad_1.frame_delay;
    document.getElementById("min_range_unit_1").value = Unidad_1.min_range;
    document.getElementById("projectile_speed_unit_1").value = Unidad_1.projectile_speed;};


if(Unidad_2.type == "Melee_Unit"){
    var contenido_2 = `<div> Nombre <br><input type="text" id="name_unit_2" value=""></div>HP<br><input type="text" id="hp_unit_2" value=""><br>Attack(<i>{"Class": value,...}</i>)<br><input type="text" id="attack_unit_2" value=''><br>Bonus(<i>{"Class": value,...}</i>)<br><input type="text" id="bonus_unit_2" value=''><br>ROF<br><input type="text" id="ROF_unit_2" value=""><br>Blast Radius<br><input type="text" id="blast_radius_unit_2" value=""><br>Armor classes(<i>{"Class": value,...}</i>)<br><input type="text" id="armorclasses_unit_2" value=''><br>Cost(<i>Food: value, Wood: value, Gold: value</i>)<br><input type="text" id="cost_unit_2" value=''><br>LOS<br><input type="text" id="LOS_unit_2" value=""><br>Speed<br><input type="text" id="speed_unit_2" value=""><br>`
    units_dinamico_2.innerHTML = contenido_2}
    else if(Unidad_2.type == "Ranged_Unit"){
        var contenido_2 = `<div> Nombre <br><input type="text" id="name_unit_2" value=""></div>HP<br><input type="text" id="hp_unit_2" value=""><br>Attack(<i>{"Class": value,...}</i>)<br><input type="text" id="attack_unit_2" value=''><br>Range</i>)<br><input type="text" id="range_unit_2" value=''><br>Minimum Range</i>)<br><input type="text" id="min_range_unit_2" value=''><br>Accuracy</i>)<br><input type="text" id="accuracy_unit_2" value=''><br>Projectile Speed</i>)<br><input type="text" id="projectile_speed_unit_2" value=''><br>Frame Delay</i>)<br><input type="text" id="frame_delay_unit_2" value=''><br>Bonus(<i>{"Class": value,...}</i>)<br><input type="text" id="bonus_unit_2" value=''><br>ROF<br><input type="text" id="ROF_unit_2" value=""><br>Blast Radius<br><input type="text" id="blast_radius_unit_2" value=""><br>Armor classes(<i>{"Class": value,...}</i>)<br><input type="text" id="armorclasses_unit_2" value=''><br>Cost(<i>Food: value, Wood: value, Gold: value</i>)<br><input type="text" id="cost_unit_2" value=''><br>LOS<br><input type="text" id="LOS_unit_2" value=""><br>Speed<br><input type="text" id="speed_unit_2" value=""><br>`
        units_dinamico_2.innerHTML = contenido_2;
        document.getElementById("range_unit_2").value = Unidad_2.range;
        document.getElementById("accuracy_unit_2").value = Unidad_2.accuracy;
        document.getElementById("frame_delay_unit_2").value = Unidad_2.frame_delay;
        document.getElementById("min_range_unit_2").value = Unidad_2.min_range;
        document.getElementById("projectile_speed_unit_2").value = Unidad_2.projectile_speed;};



document.getElementById("name_unit_1").value = Unidad_1.name;
document.getElementById("hp_unit_1").value = Unidad_1.hp;

let attack_parse_1 = JSON.stringify(Unidad_1.attack);
console.log(attack_parse_1);
document.getElementById("attack_unit_1").value = limpiador_de_texto(attack_parse_1);

let bonus_parse_1 = JSON.stringify(Unidad_1.bonus[0]);
console.log(bonus_parse_1);
document.getElementById("bonus_unit_1").value = limpiador_de_texto(bonus_parse_1);

document.getElementById("ROF_unit_1").value = Unidad_1.ROF;
document.getElementById("blast_radius_unit_1").value = Unidad_1.blast_radius;

let armor_parse_1 = JSON.stringify(Unidad_1.armorclasses[0]);
console.log(armor_parse_1);
document.getElementById("armorclasses_unit_1").value = limpiador_de_texto(armor_parse_1);

let cost_parse_1 = JSON.stringify(Unidad_1.cost);
console.log(cost_parse_1);
document.getElementById("cost_unit_1").value = limpiador_de_texto(cost_parse_1);

document.getElementById("LOS_unit_1").value = Unidad_1.LOS;
document.getElementById("speed_unit_1").value = Unidad_1.speed;

// Unidad2
document.getElementById("name_unit_2").value = Unidad_2.name;
document.getElementById("hp_unit_2").value = Unidad_2.hp;

let attack_parse_2 = JSON.stringify(Unidad_2.attack);
console.log(attack_parse_2);
document.getElementById("attack_unit_2").value = limpiador_de_texto(attack_parse_2);

let bonus_parse_2 = JSON.stringify(Unidad_2.bonus[0]);
console.log(bonus_parse_2);
document.getElementById("bonus_unit_2").value = limpiador_de_texto(bonus_parse_2);

document.getElementById("ROF_unit_2").value = Unidad_2.ROF;
document.getElementById("blast_radius_unit_2").value = Unidad_2.blast_radius;

let armor_parse_2 = JSON.stringify(Unidad_2.armorclasses[0]);
console.log(armor_parse_2);
document.getElementById("armorclasses_unit_2").value = limpiador_de_texto(armor_parse_2);

let cost_parse_2 = JSON.stringify(Unidad_2.cost);
console.log(cost_parse_2);
document.getElementById("cost_unit_2").value = limpiador_de_texto(cost_parse_2);

document.getElementById("LOS_unit_2").value = Unidad_2.LOS;
document.getElementById("speed_unit_2").value = Unidad_2.speed;



return Unidad_1, Unidad_2
}


