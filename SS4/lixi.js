// Hãy viết chương trình "tổng kết thu nhập":
// Nhập vào 1 mảng, mỗi phần tử trong mảng là 1 thành viên trong lớp CIJS56.
// Mỗi thành viên bao gồm thông tin: tên, số tiền lì xì trong tết
// - Tìm tên thành viên có số tiền lì xì nhiều nhất
// - Sắp xếp thành viên trong lớp theo thứ tự lì xì tăng dần
// - Nhập vào 1 số tiền bất kì, hãy sử dụng thuật toán tìm kiếm nhị phân tìm thành viên có số tiền bằng số tiền vừa nhập vào.

let members = [
    {name: 'A', money: 20},
    {name: 'B', money: 2},
    {name: 'C', money: 11},
    {name: 'D', money: 5},
];

// let tempt = members[0];
// for (let i = 0; i < members.length; i++) {
//     if (tempt.money < members[i].money) {
//         temp = members[i];
//     }
// }
// console.log('Thanh vien nhieu tien nhat la: ' + temp.name);

// for(let i=0;)
// for(let member of members)
// for(let index in members)
// forEach(function)

// members.forEach(function(member){
//     break;
//     continue;
// })

// members.sort(function(a, b){
//     return a.money - b.money;
// });
// console.log(members);

// bubble sort, selection sort, quick sort, merge sort,...

// gg array sorting algorithms

function binary_search(arr, value) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let middle = Math.floor((left+right)/2);
        if(arr[middle].money == value){
            return true;
        } else if(arr[middle].money < value) {
            left = middle + 1;
        } else if(arr[middle].money > value) {
            right = middle - 1;
        }
    }

    console.log("Not found")
    return false;

}

// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(binary_search(arr, 2))

let money = Number(prompt("Enter the amount of money: "));
binary_search(members, money);
// only used in organized, not random array

