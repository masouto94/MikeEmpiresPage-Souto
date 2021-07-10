
const upgrade_blacksmith = (unidad, mejoras) => {
    if(unidad instanceof Melee_Unit)
    {unidad.attack = unidad.attack.melee + mejoras.melee_attack}
    else if(unidad instanceof Ranged_Unit){
        unidad.attack = unidad.attack.pierce + mejoras.ranged_attack[0]
        unidad.range = unidad.range + mejoras.ranged_attack[1]
    };
    return unidad
};



upgrade_infantry = (unidad, mejoras) =>{
    if(mejoras.squires == true){
        unidad.speed = unidad.speed * 1.25}
    else if(mejoras.arsoning == true){
        unidad.bonus.push = {building:3}}
    else if(mejoras.supplies == true){
        unidad.cost.food = unidad.cost.food - 20 
    }
    return unidad
};

upgrade_cavalry = (unidad, mejoras) =>{
    if(mejoras.bloodlines == true){
        unidad.hp = unidad.hp + 20}
    else if(mejoras.husbandry == true){
        unidad.speed = unidad.speed * 1.20}
    return unidad
};

upgrade_archery_range = (unidad, mejoras) =>{
    if(mejoras.thumbring == true){
        unidad.accuracy = parseFloat(1);
        unidad.ROF = unidad.ROF * 1.20}
    else if((mejoras.parthian_tactics == true) && ("Cavalry Archer" in unidad.armorclasses) &!("Conquistador" in unidad.armorclasses)){
        unidad.armorclasses.base_melee = unidad.armorclasses.base_melee + 1;
        unidad.armorclasses.base_pierce = unidad.armorclasses.base_pierce + 2;
        unidad.bonus.Spearman = unidad.bonus.Spearman + 2;
        }
    return unidad
};

upgrade_university = (unidad, mejoras) =>{
    if(mejoras.ballistics == true){
        unidad.accuracy = parseFloat(1);
    }
    else if((mejoras.chemistry == true) && (pierce in unidad.attack)){
        unidad.attack.pierce = unidad.attack.pierce + 1 
    }
    else if((mejoras.chemistry == true) && ("Siege Weapon" in unidad.armorclasses) && (melee in unidad.attack) &! ("Ram" in unidad.armorclasses)){
        unidad.attack.melee = unidad.attack.melee +1;
    }else if(mejoras.siege_engineers == true && ("Siege Weapon" in unidad.armorclasses)){
        unidad.bonus.Building = unidad.bonus.Building * 1.2; 
    }else if(mejoras.siege_engineers == true && ("Siege Weapon" in unidad.armorclasses) &! ("Ram" in unidad.armorclasses)){
        unidad.range = unidad.range +1; 
    }
};

// Función para capturar el resultado del ataque menos la armadura. El mínimo es 1
const ataqueResultado = (atacante, defensor) => {
    if(atacante.attack.melee-defensor.armorclasses[0].base_melee > 0){
        var resultado =  atacante.attack.melee-defensor.armorclasses[0].base_melee;
    }else if(atacante.attack.pierce-defensor.armorclasses[0].base_pierce <= 0){
        var resultado =  atacante.attack.pierce-defensor.armorclasses[0].base_pierce;

    }
    else{
        var resultado = 1
    }
    return resultado};
    
    

// Función para calcular el bonus según la armor class y aplicar la función del resultado del ataque
const bonus = (atacante, defensor) => {

    var resultado_bonus = 0;
    for(i in Object.keys(defensor.armorclasses[0])){
        var indice = Object.keys(defensor.armorclasses[0])[i];
        if(atacante.bonus[0].hasOwnProperty(indice)){
            resultado_bonus += (parseFloat(atacante.bonus[0][indice] - defensor.armorclasses[0][indice]));
        };
        
    
    };

    var subtotal = ataqueResultado(atacante,defensor);
    var resultado = subtotal + resultado_bonus;


    return resultado
};

const updater_input_value = (id_update, valor) =>{
    var campo = document.getElementById(id_update);
    campo.value = valor;
}
// Se instancian las dos unidades para la prueba

// Unidad 1
let name_unit_1= document.getElementById("name_unit_1").value;
let hp_unit_1= parseInt(document.getElementById("hp_unit_1").value);
let attack_unit_1= JSON.parse(document.getElementById("attack_unit_1").value);
let bonus_unit_1= JSON.parse(document.getElementById("bonus_unit_1").value);
let ROF_unit_1= parseFloat(document.getElementById("ROF_unit_1").value);
let blast_radius_unit_1= parseFloat(document.getElementById("blast_radius_unit_1").value);
let armorclasses_unit_1= JSON.parse(document.getElementById("armorclasses_unit_1").value);
let cost_unit_1= JSON.parse(document.getElementById("cost_unit_1").value);
let LOS_unit_1= parseInt(document.getElementById("LOS_unit_1").value);
let speed_unit_1= parseFloat(document.getElementById("speed_unit_1").value);

var Jaguar_Warrior = new Melee_Unit(name_unit_1,hp_unit_1,attack_unit_1,bonus_unit_1,ROF_unit_1,blast_radius_unit_1,armorclasses_unit_1,cost_unit_1,LOS_unit_1,speed_unit_1);

// Unidad 2
let name_unit_2= document.getElementById("name_unit_2").value;
let hp_unit_2= parseInt(document.getElementById("hp_unit_2").value);
let attack_unit_2= JSON.parse(document.getElementById("attack_unit_2").value);
let bonus_unit_2= JSON.parse(document.getElementById("bonus_unit_2").value);
let ROF_unit_2= parseFloat(document.getElementById("ROF_unit_2").value);
let blast_radius_unit_2= parseFloat(document.getElementById("blast_radius_unit_2").value);
let armorclasses_unit_2= JSON.parse(document.getElementById("armorclasses_unit_2").value);
let cost_unit_2= JSON.parse(document.getElementById("cost_unit_2").value);
let LOS_unit_2= parseInt(document.getElementById("LOS_unit_2").value);
let speed_unit_2= parseFloat(document.getElementById("speed_unit_2").value);

var Long_Swordsman = new Melee_Unit(name_unit_2,hp_unit_2,attack_unit_2,bonus_unit_2,ROF_unit_2,blast_radius_unit_2,armorclasses_unit_2,cost_unit_2,LOS_unit_2,speed_unit_2);

console.log(Jaguar_Warrior);
console.log(Long_Swordsman);


// Se identifica el elemento que va a tener un valor dinámico
var reporte_1 = document.getElementById("reportBox1");
var reporte_2 = document.getElementById("reportBox2");

// Se coteja el daño contra el hp y se genera un reporte segun win o lose
const reporte_output_pelea = () =>{


var dano_1a2 = parseFloat(document.getElementById("resultado1").value);
var dano_2a1 = parseFloat(document.getElementById("resultado2").value);


var hp_sobre_dano_1a2 = Math.ceil(Long_Swordsman.hp / dano_1a2);
var hp_sobre_dano_2a1 = Math.ceil(Jaguar_Warrior.hp / dano_2a1);

if(hp_sobre_dano_1a2 < hp_sobre_dano_2a1){
    reporte_1.innerHTML = `El ${Jaguar_Warrior.name} gana porque necesita ${hp_sobre_dano_1a2} golpes para ganar`;
    reporte_2.innerHTML = `El ${Long_Swordsman.name} pierde porque necesita ${hp_sobre_dano_2a1} golpes para ganar`; 
}else if(hp_sobre_dano_2a1 < hp_sobre_dano_1a2){
    reporte_1.innerHTML = `El ${Jaguar_Warrior.name} pierde porque necesita ${hp_sobre_dano_1a2} golpes para ganar`;
    reporte_2.innerHTML = `El ${Long_Swordsman.name} gana porque necesita ${hp_sobre_dano_2a1} golpes para ganar`; 
    
}else if(hp_sobre_dano_1a2 == hp_sobre_dano_2a1) {
    reporte_1.innerHTML = `Las unidades empatan porque ambas necesitan ${hp_sobre_dano_1a2} para ganar`;
    reporte_2.innerHTML = `Las unidades empatan porque ambas necesitan ${hp_sobre_dano_1a2} para ganar`;
}
};