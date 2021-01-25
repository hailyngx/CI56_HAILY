//class: bản thiết kế 
//object: được tạo ra từ class, là 1 instance của class

let a = new Object();
a.name = "Ly";
a.age = 18;

class NYC {
    name;
    age;
    sex;
    address;

    constructor(name, age, sex, address){
        console.log("Đối tượng được khởi tạo với dữ liệu");
        console.log(name, age, sex, address);

        this.name = name;
        this.age = age;
        this.sex = sex;
        this.address = address;
    }
    cheat(){
        console.log("Vừa đá xong 😇");
    }

    comeBack() {
        console.log("Quay lại nhớ 😌")
    }
}

// let nyc1 = new NYC('A', 20, 'female', 'TB');
let nyc2 = new NYC('B', 19, 'female', 'HN');
nyc2.name 
nyc2.cheat();
// nyc1.name = "A";
// nyc1.age = 22;
// nyc1.sex = "female";
// nyc1.address = "TB";

console.log(nyc1)

class Boy {
    name;
    age;
    handsome;

    f = [
        'play game',
        'music',
        'girl'
    ]
    get favorite() { 
        return this.f;
    }

    set favorite() {
        this.f = value;
    }
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    playGame() {
        console.log("Choi game");
    }
}

class GoodBoy extends Boy {
    cooking;

    constructor(name, age, cooking){
        super(name, age);
        this.cooking = cooking;
        delete this.handsome;
    }

    takeCare(){
        console.log('Quan tam, cham soc')
    }
}

class BadBoy extends Boy {
    rich;

    constructor(name, age, rich){
        super(name, age);
        this.rich = rich;
    }
}

let Long = new GoodBoy('Duy Long', 20, 'master chef');
let Nga = new BadBoy('Thu Nga', 18, 'platinum');
let Chinh = new Boy('Do Chinh', 23);

console.log(Long.favorite);
Long.favorite = ['phuot', 'doc sach']

class Calc {
    static sum (a,b) {
        return a+b;
    }
    static subtract(a,b){
        return a-b;
    }
    static multiply(a,b){
        return a*b;
    }
    static power(a,b){
        return a**b;
    }
}

let c1 = new Calc();
Calc.sum(1, 10);
Calc.subtract(2, 3);

// Animal:
//     name
//     leg
//     sound

// Reptile ke thua Animal
//     weight 
//     length
//     speak: in ra man hinh: Con nay keu + sound

// Mammal ke thua Animal
//     furColor

// Dog ke thua Mammal
//     Leg = 4
//     Speak = "Go go"

//     bite()

class Animal {
    name;
    leg;
    sound;

    constructor(name, leg, sound){
        this.name = name;
        this.leg = leg;
        this.sound = sound;
    }
}

class Reptile extends Animal {
    weight;
    length;

    constructor(weight, length, sound, weight, length){
        this.weight = weight;
        this.length = length;
        this.sound = sound;
    }

    speak() {
        console.log('Con nay keu' + this.sound)
    }
}

class Mammal extends Animal {
    furColor;

    constructor(name, leg, sound, furColor){
        super(name, leg, sound)
        this.furColor = furColor;
    }
}

class Dog extends Mammal {
    constructor(name, furColor) {
        super(name, 4, 'gogo', furColor)
    }

    bite(){
        console.log('Auuu');
    }
}