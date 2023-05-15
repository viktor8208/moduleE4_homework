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

/* Задание 2
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли
у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
 */

function obj2 (str, mas) {
    return (str in mas)
}
console.log(obj2('city1', student))

/* Задание 3
Написать функцию, которая создает пустой объект, но без прототипа.
 */

function obj3 (){
    return Object.create(null);
}
let z = obj3()
console.log(z)




/*
Задание 4.

Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте,
 какими свойствами он обладает.

План:

Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создать экземпляры каждого прибора.
Вывести в консоль и посмотреть результаты работы, гордиться собой. :)
 */

function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

ElectricalAppliance.prototype.plugIn = function () {
    this.isPlugged = true;
    console.log(`${this.name} is plugged`)
}

ElectricalAppliance.prototype.plugOut = function () {
    this.isPlugged = false;
    console.log(`${this.name} is not plugged`)
}

function ElectricalLamp(power, model, colour) {
    this.model = model;
    this.collor = colour;
    this.name = 'Lamp';
    this.power = power;
    this.isPlugged = false;
}

ElectricalLamp.prototype = new ElectricalAppliance();

ElectricalLamp.prototype.powerUsed = function () {
    console.log('powerUsed = ' + (this.isPlugged ? this.power : 0));
}

const x = new ElectricalLamp(100, "asd-10", 'blu');
//console.log(x);
//x.plugIn();
//console.log(x);
//x.powerUsed()

function ElectricalСomputer(power, processorType, energySavON) {
    this.processorType = processorType;
    this.energySavON = energySavON ? 0.7 : 1;
    this.name = 'Сomputer';
    this.power = power;
    this.isPlugged = false;
}
ElectricalСomputer.prototype = new ElectricalAppliance();

ElectricalСomputer.prototype.powerUsed = function () {
    console.log('powerUsed = ' + (this.isPlugged ? this.power * this.energySavON: 0));
}



const y = new ElectricalСomputer(100, "Intel", true)
//console.log(y);
//y.plugIn();
//console.log(y);
//y.powerUsed()


/*
Задание 5.

Переписать консольное приложение из предыдущего юнита на классы.

Общие требования:

Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6.
 */

class ElectricalApplianceA {
    constructor(power, name) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    plugIn() {
        this.isPlugged = true;
        console.log(`${this.name} is plugged`)
    }

    plugOut() {
        this.isPlugged = false;
        console.log(`${this.name} is not plugged`)
    }
}


class ElectricalLampA extends ElectricalApplianceA{
    constructor(model, colour, power) {
        super(power);
        this.model = model;
        this.collor = colour;
        this.name = 'Lamp';
    }

    powerUsed () {
        console.log('powerUsed = ' + (this.isPlugged ? this.power : 0) + ' Wt');
    }
}

class ElectricalСomputerA extends ElectricalApplianceA{
    constructor(processorType, energySavON, power) {
        super(power);
        this.processorType = processorType;
        this.energySavON = energySavON ? 0.7 : 1;
        this.name = 'Сomputer';
    }

    powerUsed () {
        console.log('powerUsed = ' + (this.isPlugged ? this.power * this.energySavON: 0) + ' Wt');
    }
}

const lamp1 = new ElectricalLampA('qwe-100', 'blue', 100);
const comp1 = new ElectricalСomputerA('Intel', true, 100);

comp1.plugIn()
//console.log(comp1)
comp1.powerUsed()


