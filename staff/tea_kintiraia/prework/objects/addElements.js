/*
array.shift()
elimina el primer elemento y lo devuelve y modifica la longitud
*/
function removeFirstElement(object) {
    //guardar el valor de la propiedad que vamos a eliminar -> numbers[0]<-
    var result = object[0]
    //para borrar la primera propiedad moveriamos todas las de más propiedades -> las propiedades a partir de numbers[0]<-
    for (var i=0; i < object.length -1; i++) {
        //numbers[0] = numbers[1]
        //numbers[1] = numbers[2]
        object[i] = object[i + 1]
        //numbers[0] = numbers[1]
        //numbers[1] = numbers[2]
    }
    //eliminar la última propiedad -> numbers.length
    object.length--
    return result//la primera propiedad
}

// var numbers = {
// 0:1,
// 1:2
// length : 2
//
//} return 0

//numbers = {
// 0: 1,
// 1: 1,
// 2: 2,
// length: 3
//}

// numbers = {
// 0: 1,
// 1: 2,
// 2: 2,
// length: 3
// }

var numbers = {
    0 : 0,
    1 : 1,
    2 : 2,
    length: 3
}
console.log("numbers before shift", numbers)

console.log("first element of numbers", removeFirstElement(numbers))

console.log("numbers after shift", numbers)

console.log("first element of numbers after second shift", removeFirstElement(number))

console.log("TEST Array.prototype.push")
console.log("CASE add 400 to nunms")
var nums = [100, 200, 300]
var length = nums.push(400)
console.log(nums)
//[100, 200, 300, 400] (4)
console.log(length)
//4

console.log("CASE add F to chars")

var chars = ["A", "B", "C", "D", "E"]
var length = chars.push("F")
console.log(chars)
// ["A", "B", "C", "D", "E", "F"] (6)
console.log(length)
// 6

