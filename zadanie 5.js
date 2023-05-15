

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


