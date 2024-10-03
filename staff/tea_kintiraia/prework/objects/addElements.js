/*
añadir multiples elementos
*/

function addEelement(object) {
    // buscar la última posición -> numbers[2] <- para añadir a partir de ella (el primer elemento añadido estará en numbers [3])
    //añadir los elmentos que estan en el objeto arguments
    //recorriendo el objeto arguments añado tantos elementos cuantos haya en el objeto arguments
    //cantidad de elementos a añadir es arguments.length -1
    for (var i = 1; i < arguments.length; i++) {
        //saco el parametro exacto
        var elemt = arguments[i]
        //introduzco el parametro exacto -> element <- en el objeto
        object[object.length] = element
        //incrementar la longitud -> object.length <-
        object.length++
    }

}

var numbers = {
    0: 0,
    1: 1,
    2: 2,
    length: 3
}

console.log("CASO 1 -> añadir 3 y 4 a numbers")

addElements(numbers, 3, 4)

console.log("resultado esperado -> 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, length: 5}", numbers)