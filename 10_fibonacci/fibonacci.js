const fibonacci = function(num) {
    num = Number(num);
    
    if(num < 0) {
        return "OOPS";
    }
    arr = new Array(num + 1);
    arr[0] = 0;
    arr[1] = 1;

    for(let i = 2; i <= num; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[num];
};

// Do not edit below this line
module.exports = fibonacci;
