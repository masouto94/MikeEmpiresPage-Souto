// Funciones para resetear y limpiar el output de los objetos
const limpiador = () =>{
    updater_input_value('resultado1', "");
    updater_input_value('resultado2', "");
    reporte_1.html("");
    reporte_2.html("");
    units_dinamico_1.html("");
    units_dinamico_2.html("");
    $("#select_unit_1").prop('selectedIndex', 0);
    $("#select_unit_2").prop('selectedIndex', 0);
    $("#selector_units_button").slideUp();
    
    
}
const limpiador_de_texto = (texto) =>{
    let regex = /[^A-Za-z,_:0-9 ]/g;
    let texto_limpio = texto.replace(regex, '');
    texto_limpio = texto_limpio.replaceAll(':', ': ');
    texto_limpio = texto_limpio.replaceAll(',', ', ');
    return texto_limpio
}

// Se almacenan las variables para las pruebas en el localStorage
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



// Acá va a haber unos templates de elementos según el tipo de unidad que se completarán más abajo
var units_dinamico_1 = $("#stats_unit_1");
var units_dinamico_2 = $("#stats_unit_2");



const completador_de_campos_1 = () =>{
    
    // Se instancian las unidades recuperándolas del storage
    Unidad_1 = JSON.parse(localStorage.getItem("U1"));
    
    if(Unidad_1.type == "Melee_Unit"){
        var contenido_1 = `<div> Nombre <br><input type="text" id="name_unit_1" value="" disabled = "disabled"></div>HP<br><input type="text" id="hp_unit_1" value="" disabled = "disabled"><br>Attack<br><input type="text" id="attack_unit_1" value="" disabled = "disabled"><br>Bonus<br><input type="text" id="bonus_unit_1" value="" disabled = "disabled"><br>ROF<br><input type="text" id="ROF_unit_1" value="" disabled = "disabled"><br>Blast Radius<br><input type="text" id="blast_radius_unit_1" value="" disabled = "disabled"><br>Armor classes<br><input type="text" id="armorclasses_unit_1" value="" disabled = "disabled"><br>Cost<br><input type="text" id="cost_unit_1" value="" disabled = "disabled"><br>LOS<br><input type="text" id="LOS_unit_1" value="" disabled = "disabled"><br>Speed<br><input type="text" id="speed_unit_1" value="" disabled = "disabled"><br>`
        // Upgrades
            if("Infantry" in Unidad_1.armorclasses[0]){
                contenido_1 += `<div id="upgrades_1"><img id="forging_1" src="../media/assets/Forging_aoe2de.png" alt="" srcset=""><img id="ironcasting_1" src="../media/assets/IronCastingDE.png" alt="" srcset=""><img id="blastfurnace_1" src="../media/assets/BlastFurnaceDE.png" alt="" srcset=""><img id="scalemailarmor_1" src="../media/assets/ScaleMailArmorDE.png" alt="" srcset=""><img id="chainmailarmor_1" src="../media/assets/ChainMailArmorDE.png" alt="" srcset=""><img id="platemailarmor_1" src="../media/assets/PlateMailArmorDE.png" alt="" srcset=""></div>`;
            }
            else if("Cavalry" || "Camel" in Unidad_1.armorclasses[0]){
                contenido_1 += `<div id="upgrades_1"><img id="forging_1" src="../media/assets/Forging_aoe2de.png" alt="" srcset=""><img id="ironcasting_1" src="../media/assets/IronCastingDE.png" alt="" srcset=""><img id="blastfurnace_1" src="../media/assets/BlastFurnaceDE.png" alt="" srcset=""><img id="scalehorsemailarmor_1" src="../media/assets/ScaleBardingArmorDE.png" alt="" srcset=""><img id="chainmailhorsearmor_1" src="../media/assets/ChainBardingDE.png" alt="" srcset=""><img id="platemailhorsearmor_1" src="../media/assets/PlateBardingArmorDE.png" alt="" srcset=""></div>`;
            }
        units_dinamico_1.html(contenido_1)}
        else if(Unidad_1.type == "Ranged_Unit"){
            var contenido_1 = `<div> Nombre <br><input type="text" id="name_unit_1" value="" disabled= "disabled"></div>HP<br><input type="text" id="hp_unit_1" value="" disabled= "disabled"><br>Attack<br><input type="text" id="attack_unit_1" value="" disabled= "disabled"><br>Range<br><input type="text" id="range_unit_1" value="" disabled= "disabled"><br>Minimum Range<br><input type="text" id="min_range_unit_1" value="" disabled= "disabled"><br>Accuracy<br><input type="text" id="accuracy_unit_1" value="" disabled= "disabled"><br>Projectile Speed<br><input type="text" id="projectile_speed_unit_1" value="" disabled= "disabled"><br>Frame Delay<br><input type="text" id="frame_delay_unit_1" value="" disabled= "disabled"><br>Bonus<br><input type="text" id="bonus_unit_1" value="" disabled= "disabled"><br>ROF<br><input type="text" id="ROF_unit_1" value="" disabled= "disabled"><br>Blast Radius<br><input type="text" id="blast_radius_unit_1" value="" disabled= "disabled"><br>Armor classes<br><input type="text" id="armorclasses_unit_1" value="" disabled= "disabled"><br>Cost<br><input type="text" id="cost_unit_1" value="" disabled= "disabled"><br>LOS<br><input type="text" id="LOS_unit_1" value="" disabled= "disabled"><br>Speed<br><input type="text" id="speed_unit_1" value="" disabled= "disabled"><br>`
            contenido_1 += `<div id="upgrades_1"><img id="fletching_1" src="../media/assets/FletchingDE.png" alt="" srcset=""><img id="bodkinarrow_1" src="../media/assets/BodkinArrowDE.png" alt="" srcset=""><img id="bracer_1" src="../media/assets/BracerDE.png" alt="" srcset=""><img id="paddedarcherarmor_1" src="../media/assets/PaddedArcherArmorDE.png" alt="" srcset=""><img id="leatherarcherarmor_1" src="../media/assets/LeatherArcherArmorDE.png" alt="" srcset=""><img id="ringarcherarmor_1" src="../media/assets/RingArcherArmorDE.png" alt="" srcset=""></div>`
            units_dinamico_1.html(contenido_1);
            // Se completan los valores específicos de Ranged_Unit para Unidad_2
            $("#range_unit_1").val(Unidad_1.range) 
            $("#accuracy_unit_1").val(Unidad_1.accuracy) 
            $("#frame_delay_unit_1").val(Unidad_1.frame_delay) 
            $("#min_range_unit_1").val(Unidad_1.min_range) 
            $("#projectile_speed_unit_1").val(Unidad_1.projectile_speed)}; 
            
            
            
            // Se completan los valores generales de Unidad_1
            $("#name_unit_1").val(Unidad_1.name) 
            $("#hp_unit_1").val(Unidad_1.hp) 
            
            let attack_parse_1 = JSON.stringify(Unidad_1.attack);
            $("#attack_unit_1").val(limpiador_de_texto(attack_parse_1)) 
            
            let bonus_parse_1 = JSON.stringify(Unidad_1.bonus[0]);
            $("#bonus_unit_1").val(limpiador_de_texto(bonus_parse_1)) 
            
            $("#ROF_unit_1").val(Unidad_1.ROF) 
            $("#blast_radius_unit_1").val(Unidad_1.blast_radius) 
            
            let armor_parse_1 = JSON.stringify(Unidad_1.armorclasses[0]);
            $("#armorclasses_unit_1").val(limpiador_de_texto(armor_parse_1)) 
            
            let cost_parse_1 = JSON.stringify(Unidad_1.cost);
            $("#cost_unit_1").val(limpiador_de_texto(cost_parse_1)) 
            
            $("#LOS_unit_1").val(Unidad_1.LOS) 
            $("#speed_unit_1").val(Unidad_1.speed) 
            
            
            
            
            return Unidad_1
        };
        const completador_de_campos_2 = () =>{
            
            // Se instancian las unidades recuperándolas del storage
            Unidad_2 = JSON.parse(localStorage.getItem("U2"));
            
            
            
            if(Unidad_2.type == "Melee_Unit"){
                var contenido_2 = `<div> Nombre <br><input type="text" id="name_unit_2" value="" disabled = "disabled"></div>HP<br><input type="text" id="hp_unit_2" value="" disabled = "disabled"><br>Attack<br><input type="text" id="attack_unit_2" value="" disabled = "disabled"><br>Bonus<br><input type="text" id="bonus_unit_2" value="" disabled = "disabled"><br>ROF<br><input type="text" id="ROF_unit_2" value="" disabled = "disabled"><br>Blast Radius<br><input type="text" id="blast_radius_unit_2" value="" disabled = "disabled"><br>Armor classes<br><input type="text" id="armorclasses_unit_2" value="" disabled = "disabled"><br>Cost<br><input type="text" id="cost_unit_2" value="" disabled = "disabled"><br>LOS<br><input type="text" id="LOS_unit_2" value="" disabled = "disabled"><br>Speed<br><input type="text" id="speed_unit_2" value="" disabled = "disabled"><br>`
                if("Infantry" in Unidad_2.armorclasses[0]){
                    contenido_2 += `<div id="upgrades_2"><img id="forging_2" src="../media/assets/Forging_aoe2de.png" alt="" srcset=""><img id="ironcasting_2" src="../media/assets/IronCastingDE.png" alt="" srcset=""><img id="blastfurnace_2" src="../media/assets/BlastFurnaceDE.png" alt="" srcset=""><img id="scalemailarmor_2" src="../media/assets/ScaleMailArmorDE.png" alt="" srcset=""><img id="chainmailarmor_2" src="../media/assets/ChainMailArmorDE.png" alt="" srcset=""><img id="platemailarmor_2" src="../media/assets/PlateMailArmorDE.png" alt="" srcset=""></div>`;
                }
                else if("Cavalry" || "Camel" in Unidad_2.armorclasses[0]){
                    contenido_2 += `<div id="upgrades_2"><img id="forging_2" src="../media/assets/Forging_aoe2de.png" alt="" srcset=""><img id="ironcasting_2" src="../media/assets/IronCastingDE.png" alt="" srcset=""><img id="blastfurnace_2" src="../media/assets/BlastFurnaceDE.png" alt="" srcset=""><img id="scalehorsemailarmor_2" src="../media/assets/ScaleBardingArmorDE.png" alt="" srcset=""><img id="chainmailhorsearmor_2" src="../media/assets/ChainBardingDE.png" alt="" srcset=""><img id="platemailhorsearmor_2" src="../media/assets/PlateBardingArmorDE.png" alt="" srcset=""></div>`;
                }
                
                units_dinamico_2.html(contenido_2)}
                else if(Unidad_2.type == "Ranged_Unit"){
                    var contenido_2 = `<div> Nombre <br><input type="text" id="name_unit_2" value="" disabled= "disabled"></div>HP<br><input type="text" id="hp_unit_2" value="" disabled= "disabled"><br>Attack<br><input type="text" id="attack_unit_2" value="" disabled= "disabled"><br>Range<br><input type="text" id="range_unit_2" value="" disabled= "disabled"><br>Minimum Range<br><input type="text" id="min_range_unit_2" value="" disabled= "disabled"><br>Accuracy<br><input type="text" id="accuracy_unit_2" value="" disabled= "disabled"><br>Projectile Speed<br><input type="text" id="projectile_speed_unit_2" value="" disabled= "disabled"><br>Frame Delay<br><input type="text" id="frame_delay_unit_2" value="" disabled= "disabled"><br>Bonus<br><input type="text" id="bonus_unit_2" value="" disabled= "disabled"><br>ROF<br><input type="text" id="ROF_unit_2" value="" disabled= "disabled"><br>Blast Radius<br><input type="text" id="blast_radius_unit_2" value="" disabled= "disabled"><br>Armor classes<br><input type="text" id="armorclasses_unit_2" value="" disabled= "disabled"><br>Cost<br><input type="text" id="cost_unit_2" value="" disabled= "disabled"><br>LOS<br><input type="text" id="LOS_unit_2" value="" disabled= "disabled"><br>Speed<br><input type="text" id="speed_unit_2" value="" disabled= "disabled"><br>`
                    contenido_2 += `<div id="upgrades_2"><img id="fletching_2" src="../media/assets/FletchingDE.png" alt="" srcset=""><img id="bodkinarrow_2" src="../media/assets/BodkinArrowDE.png" alt="" srcset=""><img id="bracer_2" src="../media/assets/BracerDE.png" alt="" srcset=""><img id="paddedarcherarmor_2" src="../media/assets/PaddedArcherArmorDE.png" alt="" srcset=""><img id="leatherarcherarmor_2" src="../media/assets/LeatherArcherArmorDE.png" alt="" srcset=""><img id="ringarcherarmor_2" src="../media/assets/RingArcherArmorDE.png" alt="" srcset=""></div>`
                    units_dinamico_2.html(contenido_2);
                    // Se completan los valores específicos de Ranged_Unit para Unidad_2
                    $("#range_unit_2").val(Unidad_2.range) 
                    $("#accuracy_unit_2").val(Unidad_2.accuracy) 
                    $("#frame_delay_unit_2").val(Unidad_2.frame_delay) 
                    $("#min_range_unit_2").val(Unidad_2.min_range) 
                    $("#projectile_speed_unit_2").val(Unidad_2.projectile_speed)};
                    
                    
                    
                    // Se completan los valores generales de Unidad_2
                    $("#name_unit_2").val(Unidad_2.name) 
                    $("#hp_unit_2").val(Unidad_2.hp) 
                    
                    let attack_parse_2 = JSON.stringify(Unidad_2.attack);
                    $("#attack_unit_2").val(limpiador_de_texto(attack_parse_2)) 
                    
                    let bonus_parse_2 = JSON.stringify(Unidad_2.bonus[0]);
                    $("#bonus_unit_2").val(limpiador_de_texto(bonus_parse_2)) 
                    
                    $("#ROF_unit_2").val(Unidad_2.ROF) 
                    $("#blast_radius_unit_2").val(Unidad_2.blast_radius) 
                    
                    let armor_parse_2 = JSON.stringify(Unidad_2.armorclasses[0]);
                    $("#armorclasses_unit_2").val(limpiador_de_texto(armor_parse_2)) 
                    
                    let cost_parse_2 = JSON.stringify(Unidad_2.cost);
                    $("#cost_unit_2").val(limpiador_de_texto(cost_parse_2)) 
                    
                    $("#LOS_unit_2").val(Unidad_2.LOS) 
                    $("#speed_unit_2").val(Unidad_2.speed) 
                    
                    
                    
                    return  Unidad_2
                };
$("#select_unit_1").change(function(){

if($("#select_unit_2").val() != "null"){
$("#selector_units_button").slideDown()}

}
);
$("#select_unit_2").change(function(){

if($("#select_unit_1").val() != "null"){
$("#selector_units_button").slideDown()}

}
);

$("#selector_units_button").click(function(){
completador_de_campos_1();
completador_de_campos_2();
// Se agrega nombre dinamico a resultados
$("#p_1").html(`${Unidad_1.name} ataca a ${Unidad_2.name}`);
$("#p_2").html(`${Unidad_2.name} ataca a ${Unidad_1.name}`);
upgrader_unidad();
$("#selector_units_button").hide()})
// Elementos a ocultar a cargar la página

$(document).ready(function (){
    $("#selector_units_button").hide()
    $("#reset").hide();
    $(".containerCajasResults").hide();
    ;
    
    
    $("button").click(function() {
        $(".containerCajasResults").slideDown();
        $("#reset").show();
    });
    
    $("#reset").click(function(){
        $(".containerCajasResults").slideUp();
    });
});






const upgrader_unidad = () =>{
    let array = [];
    $("img").each(function(){let a = $(this).attr("id"); array.push(a)});



    for (i in array){
        $(`#${array[i]}`).click(function() {
        if($(this).css("opacity") == "0.5"){
            $(this).css("opacity", "1");
            let forging = new Blacksmith(1,0,0,0,0);
            let ironcasting = new Blacksmith(1,0,0,0,0);
            let blastfurnace = new Blacksmith(2,0,0,0,0);
            let scalemailarmor = new Blacksmith(0,0,[1,1],0,0);
            let chainmailarmor = new Blacksmith(0,0,[1,1],0,0);
            let platemailarmor = new Blacksmith(0,0,[1,2],0,0);
            let scalehorsemailarmor = new Blacksmith(0,0,0,[1,1],0)
            let chainmailhorsearmor = new Blacksmith(0,0,0,[1,1],0)
            let platemailhorsearmor = new Blacksmith(0,0,0,[1,2],0)
            let fletching = new Blacksmith(0,[1,1],0,0,0)
            let bodkinarrow = new Blacksmith(0,[1,1],0,0,0)
            let bracer = new Blacksmith(0,[1,1],0,0,0)
            let paddedarcherarmor = new Blacksmith(0,0,0,0,[1,1])
            let leatherarcherarmor = new Blacksmith(0,0,0,0,[1,1])
            let ringarcherarmor = new Blacksmith(0,0,0,0,[1,2])

            switch ($(this).attr("id")){
                case "forging_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, forging);
                    $("#attack_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.attack)));
                    break;
                case "ironcasting_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, ironcasting);
                    $("#attack_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.attack)));
                    break;   
                case "blastfurnace_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, blastfurnace);
                    $("#attack_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.attack)));
                    break;
                case "scalemailarmor_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, scalemailarmor);
                    $("#armorclasses_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.armorclasses[0])));
                    break;
                case "chainmailarmor_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, chainmailarmor);
                    $("#armorclasses_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.armorclasses[0])));
                    break;
                case "platemailarmor_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, platemailarmor);
                    $("#armorclasses_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.armorclasses[0])));
                    break;            
                case "scalehorsemailarmor_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, scalehorsemailarmor);
                    $("#armorclasses_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.armorclasses[0])));
                    break; 
                case "chainmailhorsearmor_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, chainmailhorsearmor);
                    $("#armorclasses_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.armorclasses[0])));
                    break; 
                case "platemailhorsearmor_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, platemailhorsearmor);
                    $("#armorclasses_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.armorclasses[0])));
                    break;
                case "fletching_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, fletching);
                    $("#attack_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.attack)));
                    $("#range_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.range)));
                    $("#LOS_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.LOS)));
            
                    break;
                case "bodkinarrow_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, bodkinarrow);
                    $("#attack_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.attack)));
                    $("#range_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.range)));
                    $("#LOS_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.LOS)));
                    break;   
                case "bracer_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, bracer);
                    $("#attack_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.attack)));
                    $("#range_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.range)));
                    $("#LOS_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.LOS)));
                    break;
                case "paddedarcherarmor_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, paddedarcherarmor);
                    $("#armorclasses_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.armorclasses[0])));
                    break;
                case "leatherarcherarmor_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, leatherarcherarmor);
                    $("#armorclasses_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.armorclasses[0])));
                    break;
                case "ringarcherarmor_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, ringarcherarmor);
                    $("#armorclasses_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.armorclasses[0])));
                    break;
                case "forging_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, forging);
                    $("#attack_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.attack)));
                    break;
                case "ironcasting_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, ironcasting);
                    $("#attack_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.attack)));
                    break;   
                case "blastfurnace_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, blastfurnace);
                    $("#attack_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.attack)));
                    break;
                case "scalemailarmor_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, scalemailarmor);
                    $("#armorclasses_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.armorclasses[0])));
                    break;
                case "chainmailarmor_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, chainmailarmor);
                    $("#armorclasses_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.armorclasses[0])));
                    break;
                case "platemailarmor_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, platemailarmor);
                    $("#armorclasses_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.armorclasses[0])));
                    break;            
                case "scalehorsemailarmor_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, scalehorsemailarmor);
                    $("#armorclasses_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.armorclasses[0])));
                    break; 
                case "chainmailhorsearmor_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, chainmailhorsearmor);
                    $("#armorclasses_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.armorclasses[0])));
                    break; 
                case "platemailhorsearmor_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, platemailhorsearmor);
                    $("#armorclasses_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.armorclasses[0])));
                    break;
                case "fletching_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, fletching);
                    $("#attack_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.attack)));
                    $("#range_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.range)));
                    $("#LOS_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.LOS)));
                    break;
                case "bodkinarrow_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, bodkinarrow);
                    $("#attack_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.attack)));
                    $("#range_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.range)));
                    $("#LOS_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.LOS)));
                    break;   
                case "bracer_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, bracer);
                    $("#attack_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.attack)));
                    $("#range_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.range)));
                    $("#LOS_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.LOS)));
                    break;
                case "paddedarcherarmor_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, paddedarcherarmor);
                    $("#armorclasses_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.armorclasses[0])));
                    break;
                case "leatherarcherarmor_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, leatherarcherarmor);
                    $("#armorclasses_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.armorclasses[0])));
                    break;
                case "ringarcherarmor_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, ringarcherarmor);
                    $("#armorclasses_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.armorclasses[0])));
                    break;
                }
            
            }else if($(this).css("opacity") == "1"){
            $(this).css("opacity", "0.5")
            let anti_forging = new Blacksmith(-1,0,0,0,0);
            let anti_ironcasting = new Blacksmith(-1,0,0,0,0);
            let anti_blastfurnace = new Blacksmith(-2,0,0,0,0);
            let anti_scalemailarmor = new Blacksmith(0,0,[-1,-1],0,0);
            let anti_chainmailarmor = new Blacksmith(0,0,[-1,-1],0,0);
            let anti_platemailarmor = new Blacksmith(0,0,[-1,-2],0,0);
            let anti_scalehorsemailarmor = new Blacksmith(0,0,0,[-1,-1],0)
            let anti_chainmailhorsearmor = new Blacksmith(0,0,0,[-1,-1],0)
            let anti_platemailhorsearmor = new Blacksmith(0,0,0,[-1,-2],0)
            let anti_fletching = new Blacksmith(0,[-1,-1],0,0,0)
            let anti_bodkinarrow = new Blacksmith(0,[-1,-1],0,0,0)
            let anti_bracer = new Blacksmith(0,[-1,-1],0,0,0)
            let anti_paddedarcherarmor = new Blacksmith(0,0,0,0,[-1,-1])
            let anti_leatherarcherarmor = new Blacksmith(0,0,0,0,[-1,-1])
            let anti_ringarcherarmor = new Blacksmith(0,0,0,0,[-1,-2])
            
            switch ($(this).attr("id")){
                case "forging_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, anti_forging);
                    $("#attack_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.attack)));
                    break;
                case "ironcasting_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, anti_ironcasting);
                    $("#attack_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.attack)));
                    break;   
                case "blastfurnace_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, anti_blastfurnace);
                    $("#attack_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.attack)));
                    break;
                case "scalemailarmor_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, anti_scalemailarmor);
                    $("#armorclasses_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.armorclasses[0])));
                    break;
                case "chainmailarmor_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, anti_chainmailarmor);
                    $("#armorclasses_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.armorclasses[0])));
                    break;
                case "platemailarmor_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, anti_platemailarmor);
                    $("#armorclasses_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.armorclasses[0])));
                    break;            
                case "scalehorsemailarmor_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, anti_scalehorsemailarmor);
                    $("#armorclasses_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.armorclasses[0])));
                    break; 
                case "chainmailhorsearmor_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, anti_chainmailhorsearmor);
                    $("#armorclasses_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.armorclasses[0])));
                    break; 
                case "platemailhorsearmor_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, anti_platemailhorsearmor);
                    $("#armorclasses_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.armorclasses[0])));
                    break;
                case "fletching_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, anti_fletching);
                    $("#attack_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.attack)));
                    $("#range_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.range)));
                    $("#LOS_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.LOS)));
            
                    break;
                case "bodkinarrow_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, anti_bodkinarrow);
                    $("#attack_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.attack)));
                    $("#range_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.range)));
                    $("#LOS_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.LOS)));
                    break;   
                case "bracer_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, anti_bracer);
                    $("#attack_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.attack)));
                    $("#range_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.range)));
                    $("#LOS_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.LOS)));
                    break;
                case "paddedarcherarmor_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, anti_paddedarcherarmor);
                    $("#armorclasses_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.armorclasses[0])));
                    break;
                case "leatherarcherarmor_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, anti_leatherarcherarmor);
                    $("#armorclasses_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.armorclasses[0])));
                    break;
                case "ringarcherarmor_1":
                    Unidad_1 = upgrade_blacksmith(Unidad_1, anti_ringarcherarmor);
                    $("#armorclasses_unit_1").val(limpiador_de_texto(JSON.stringify(Unidad_1.armorclasses[0])));
                    break;
                case "forging_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, anti_forging);
                    $("#attack_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.attack)));
                    break;
                case "ironcasting_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, anti_ironcasting);
                    $("#attack_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.attack)));
                    break;   
                case "blastfurnace_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, anti_blastfurnace);
                    $("#attack_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.attack)));
                    break;
                case "scalemailarmor_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, anti_scalemailarmor);
                    $("#armorclasses_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.armorclasses[0])));
                    break;
                case "chainmailarmor_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, anti_chainmailarmor);
                    $("#armorclasses_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.armorclasses[0])));
                    break;
                case "platemailarmor_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, anti_platemailarmor);
                    $("#armorclasses_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.armorclasses[0])));
                    break;            
                case "scalehorsemailarmor_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, anti_scalehorsemailarmor);
                    $("#armorclasses_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.armorclasses[0])));
                    break; 
                case "chainmailhorsearmor_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, anti_chainmailhorsearmor);
                    $("#armorclasses_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.armorclasses[0])));
                    break; 
                case "platemailhorsearmor_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, anti_platemailhorsearmor);
                    $("#armorclasses_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.armorclasses[0])));
                    break;
                case "fletching_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, anti_fletching);
                    $("#attack_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.attack)));
                    $("#range_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.range)));
                    $("#LOS_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.LOS)));
                    break;
                case "bodkinarrow_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, anti_bodkinarrow);
                    $("#attack_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.attack)));
                    $("#range_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.range)));
                    $("#LOS_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.LOS)));
                    break;   
                case "bracer_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, anti_bracer);
                    $("#attack_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.attack)));
                    $("#range_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.range)));
                    $("#LOS_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.LOS)));
                    break;
                case "paddedarcherarmor_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, anti_paddedarcherarmor);
                    $("#armorclasses_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.armorclasses[0])));
                    break;
                case "leatherarcherarmor_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, anti_leatherarcherarmor);
                    $("#armorclasses_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.armorclasses[0])));
                    break;
                case "ringarcherarmor_2":
                    Unidad_2 = upgrade_blacksmith(Unidad_2, anti_ringarcherarmor);
                    $("#armorclasses_unit_2").val(limpiador_de_texto(JSON.stringify(Unidad_2.armorclasses[0])));
                    break;
                }
            }
        })
    }
}