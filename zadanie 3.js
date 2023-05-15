
/* Задание 3
Написать функцию, которая создает пустой объект, но без прототипа.
 */

function obj3 (){
    return Object.create(null);
}
let z = obj3()
console.log(z)

