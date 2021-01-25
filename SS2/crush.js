class crushes {
    name;
    age;
    appearance;
    weight;
    height;
    crush;

    constructor(name, age, appearance, weight, height, crush){
        console.log("Đối tượng được khởi tạo với dữ liệu");
        console.log(name, age, appearance, weight, height, crush);

        this.name = name;
        this.age = age;
        this.appearance = appearance;
        this.weight = weight;
        this.height = height;
        this.crush = crush;
    }
    
    flirt(){
        console.log("Thả thính 😇");
    }

    ignore(){
        console.log("Seen tin nhắn 😌")
    }
}

let crush1 = new crush('A', 19, 'nice', '45', "160", 'C');
let crush2 = new crush('B', 19, 'beautiful', '45', "160", 'B');
let crush3 = new crush('C', 19, 'tall', '53', "150", 'E');
let crush4 = new crush('D', 19, 'short', '46', "155", 'R');
let crush5 = new crush('E', 19, 'lean', '49', "175", 'C');

crush1.flirt()

