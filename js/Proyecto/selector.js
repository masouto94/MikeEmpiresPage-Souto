// Acá va a haber unos templates de elementos según el tipo de unidad. Por ahora van a ser iguales hasta cargar las otras
var units_dinamico_1 = document.getElementById('stats_unit_1');
var units_dinamico_2 = document.getElementById('stats_unit_2');

var contenido_1 = `<div> Nombre <br><input type="text" id="name_unit_1" value=""></div>HP<br><input type="text" id="hp_unit_1" value=""><br>Attack(<i>{"Class": value,...}</i>)<br><input type="text" id="attack_unit_1" value=''><br>Bonus(<i>{"Class": value,...}</i>)<br><input type="text" id="bonus_unit_1" value=''><br>ROF<br><input type="text" id="ROF_unit_1" value=""><br>Blast Radius<br><input type="text" id="blast_radius_unit_1" value=""><br>Armor classes(<i>{"Class": value,...}</i>)<br><input type="text" id="armorclasses_unit_1" value=''><br>Cost(<i>Food: value, Wood: value, Gold: value</i>)<br><input type="text" id="cost_unit_1" value=''><br>LOS<br><input type="text" id="LOS_unit_1" value=""><br>Speed<br><input type="text" id="speed_unit_1" value=""><br>`;
var contenido_2 = `<div> Nombre <br><input type="text" id="name_unit_2" value=""></div>HP<br><input type="text" id="hp_unit_2" value=""><br>Attack(<i>{"Class": value,...}</i>)<br><input type="text" id="attack_unit_2" value=''><br>Bonus(<i>{"Class": value,...}</i>)<br><input type="text" id="bonus_unit_2" value=''><br>ROF<br><input type="text" id="ROF_unit_2" value=""><br>Blast Radius<br><input type="text" id="blast_radius_unit_2" value=""><br>Armor classes(<i>{"Class": value,...}</i>)<br><input type="text" id="armorclasses_unit_2" value=''><br>Cost(<i>Food: value, Wood: value, Gold: value</i>)<br><input type="text" id="cost_unit_2" value=''><br>LOS<br><input type="text" id="LOS_unit_2" value=""><br>Speed<br><input type="text" id="speed_unit_2" value=""><br>`;

console.log(units_dinamico_1);
console.log(units_dinamico_2);

units_dinamico_1.innerHTML = contenido_1;
units_dinamico_2.innerHTML = contenido_2;
