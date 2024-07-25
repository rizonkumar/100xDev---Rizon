// give an input array, give me back all the even values from it


const arr = [1, 2, 3, 4, 5]

// 1st approach

const newArray = [];

for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0){
        newArray.push(arr[i])
    }
}
console.log(newArray)

// 2nd Approach

function filterLogic(n) {
    if(n % 2 == 0){
        return true;
    } else {
        return false;
    }
}
const ans = arr.filter(filterLogic);
console.log(ans)