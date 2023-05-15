/* Задание 1
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль
все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
 */
const person = {
    lern: "Moskau",
    nameUni: "Super Uni"
}

const student = Object.create(person);
student.city = "Piter";

function obj1 (mas){
    for(let i in mas){
        if (mas.hasOwnProperty(i)){
            console.log(i, mas[i]);
        }
    }
}
obj1(student)



