// Función para capturar el resultado del ataque menos la armadura. El mínimo es 1
const ataqueResultado = (atacante, defensor) => {
    var ataque = parseInt(document.getElementById(atacante).value);
    var defensa = parseInt(document.getElementById(defensor).value);
    if(ataque-defensa > 0){
        var resultado =  ataque-defensa;
    }else{
        var resultado = 1
    }
    return resultado}
    
    

// Función para calcular el bonus según la armor class y aplicar la función del resultado del ataque
const bonus = (id_update,atacante, atacante_class, defensor, defensor_class) => {
    // precargar las variables en objetos: atacante, armor class/ defensor,armor class
    var tipo_at =document.querySelector(`input[name= '${atacante_class}']:checked`).value;
    var tipo_def = document.querySelector(`input[name= '${defensor_class}']:checked`).value;
    console.log(tipo_at);
    console.log(tipo_def);

            
            
    var bonus = "";
        if((tipo_at == "Infantry") && (tipo_def == "Cavalry")){
        bonus = ataqueResultado(atacante, defensor) * 2}
        else if((tipo_at == "Cavalry") && (tipo_def == "Archer")){
        bonus = ataqueResultado(atacante, defensor) * 2}
        else if((tipo_at == "Archer") && (tipo_def == "Infantry")){
        bonus = ataqueResultado(atacante, defensor) * 2}
        else{
        bonus = ataqueResultado(atacante, defensor) * 1};
        
    
    var campo = document.getElementById(id_update);
    campo.value = bonus;
    console.log(bonus)
    console.log(campo)
    console.log(tipo_at)
    console.log(tipo_def)
    return bonus, campo};
                
                
document.getElementById("button1").addEventListener("click",function(){bonus("resultado1",'unit1','unit1_class','unit4', 'unit2_class')},false);
document.getElementById("button2").addEventListener("click",function(){bonus("resultado2",'unit3', 'unit2_class','unit2', 'unit1_class')},false);
