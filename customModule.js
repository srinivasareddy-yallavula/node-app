function teacherName() {
    console.log("TeacherName");
}

function add(a, b) {
    console.log(a + b);
}

function sub(a, b) {
    console.log(a - b);
}

let n = 'kmss';

let obj = {
    name: 'kmss',
    age: 20
}

function isEven(x) {
    var result = x % 2 == 0;
    console.log(result);
}

function multiplyWith2(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    console.log(arr);
}


module.exports = {
    teacherName, add, sub, n, obj, isEven, multiplyWith2
}
