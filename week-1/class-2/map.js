// given an array , give me back a new array in which every value is multipled by 2


// [1, 2, 3, 4, 5]
// to [2, 4, 6, 8, 10]

const input = [1, 2, 3, 4, 5];

// 1st Approach

const newArray = [];

for (let i = 0; i < input.length; i++) {
    newArray.push(input[i] * 2);
}

console.log(newArray);

// 2nd Approach

function transform(i){
    return i * 2;
}

const ans = input.map(transform);
console.log(ans)
