class Familia{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}
madre = new Familia("Lucía", 66);
padre = new Familia("Sergio", 63);
hija_mayor_de_todas = new Familia("Nina", 25);
hijo_mayor = new Familia("Lucas", 24);
hijo_menor = new Familia("Francisco", 19);


array_de_objetos_desordenado = [madre,hijo_menor, padre, hija_mayor_de_todas, hijo_mayor]

// Función para recibir arrays y devolverlos ordenados por edad segun un criterio

const ordenador = (lista,parametro) => {
    switch(parametro){

        case "descending":
            return lista.sort((a,b)=>{
                if(a.edad>b.edad){
                    return -1
                }else{
                    return 1
                }});
            break;
        case "even":
            return lista.sort((a,b)=>{
                if(a.edad%2 == 0 && b.edad %2 !=0){
                    return -1
                }
                else
                {
                    return 1
                }
            });
            break;
        case "odd":
            return lista.sort((a,b)=>{
                if(a.edad%2 != 0 && b.edad %2 ==0){
                    return -1
                }
                else
                {
                    return 1
                }
            });
            break;
        // El comportamiento default es ascending
        default:
            return lista.sort((a,b)=>{
                if(a.edad<b.edad){
                    return -1
                }else{
                    return 1
                }});
            break;
    }
}

console.log(array_de_objetos_desordenado)
console.log("Ascendente ",ordenador(array_de_objetos_desordenado))
console.log("Descendente ",ordenador(array_de_objetos_desordenado, "descending"))
console.log("Pares ",ordenador(array_de_objetos_desordenado, "even"))
console.log("Impares ", ordenador(array_de_objetos_desordenado, "odd"))

